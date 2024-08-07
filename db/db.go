package db

import (
	"log"
	"os"
	"path/filepath"
	"respirar/models"
	"sync"

	_ "github.com/mattn/go-sqlite3"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

const dbName string = "main.db"

var (
	dbConnOnce sync.Once
	conn       *gorm.DB
	errInit    error
)

func InitDB() {
	absPath, err := filepath.Abs("./db/")
	if err != nil {
		log.Fatal(err.Error())
	}

	dbPath := filepath.Join(absPath, dbName)

	if _, err := os.Stat(dbPath); err != nil {
		file, err := os.Create(dbPath) // Create SQLite file
		if err != nil {
			log.Fatal(err.Error())
		}
		file.Close()
		log.Printf("DB %s successfully created ", dbName)
	} else {
		log.Printf("DB %s already exists ", dbName)
	}
}

func initializeConnection() {
	// absPath, err := filepath.Abs("./db/")
	// if err != nil {
	// 	log.Fatal(err.Error())
	// }

	// dbPath := filepath.Join(absPath, dbName)
	db, err := gorm.Open(sqlite.Open("main.db"), &gorm.Config{})
	if err != nil {
		errInit = err
		return
	}
	conn = db
}

func GetConnection() (*gorm.DB, error) {
	dbConnOnce.Do(initializeConnection)
	if errInit != nil {
		return nil, errInit
	}
	return conn, nil
}

func Migrate(instance *gorm.DB) error {
	err := instance.AutoMigrate(&models.User{})
	if err != nil {
		return err
	}
	log.Println("Database migration completed!")
	// generateUsers(instance)
	return nil
}

// func generateUsers(conn *gorm.DB) {
// 	for i := 1; i <= 20; i++ {
// 		user := models.User{
// 			Name:       "User" + strconv.Itoa(i),
// 			Age:        25 + i,
// 			Email:      "user" + strconv.Itoa(i) + "@example.com",
// 			Address:    "Street " + strconv.Itoa(i),
// 			City:       "City " + strconv.Itoa(i),
// 			State:      "State " + strconv.Itoa(i),
// 			Profession: "Profession " + strconv.Itoa(i),
// 		}

// 		if err := conn.Create(&user).Error; err != nil {
// 			log.Printf("Error inserting user %d: %v", i, err)
// 		}
// 	}
// }
