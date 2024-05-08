package db

import (
	"log"
	"os"
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
	if _, err := os.Stat("./db/" + dbName); err != nil {
		file, err := os.Create("./db/" + dbName) // Create SQLite file
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
	generateUsers(instance)
	return nil
}

func generateUsers(conn *gorm.DB) {
	for i := 1; i <= 20; i++ {
		user := models.User{
			Name:       "User" + string(i),
			Age:        25 + i,
			Email:      "user" + string(i) + "@example.com",
			Address:    "Street " + string(i),
			City:       "City " + string(i),
			State:      "State " + string(i),
			Profession: "Profession " + string(i),
		}

		if err := conn.Create(&user).Error; err != nil {
			log.Printf("Error inserting user %d: %v", i, err)
		}
	}
}
