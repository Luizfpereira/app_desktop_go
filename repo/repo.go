package repo

import (
	"database/sql"
	"log"
)

type UsersRepo struct {
	dbConn *sql.DB
}

func NewUsersRepo(dbConn *sql.DB) *UsersRepo {
	return &UsersRepo{dbConn: dbConn}
}

func (r *UsersRepo) CreateTable(query string) error {
	statement, err := r.dbConn.Prepare(query) // Prepare SQL Statement
	if err != nil {
		return err
	}
	statement.Exec() // Execute SQL Statements
	log.Println("table successfully created")
	return nil
}

func (r *UsersRepo) InsertManyUsersTest() error {
	return nil
}
