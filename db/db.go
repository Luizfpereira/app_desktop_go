package db

import (
	"database/sql"
	"log"
	"os"
	"sync"
)

const dbName string = "main.db"

var (
	dbConnOnce sync.Once
	conn       *sql.DB
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
	sqlConn, err := sql.Open("sqlite3", dbName)
	if err != nil {
		errInit = err
		return
	}
	conn = sqlConn
}

func GetConnection() (*sql.DB, error) {
	dbConnOnce.Do(initializeConnection)
	if errInit != nil {
		return nil, errInit
	}
	return conn, nil
}
