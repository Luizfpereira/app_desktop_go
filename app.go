package main

import (
	"context"
	"log"
	"respirar/db"
	"respirar/repo"
)

// App struct
type App struct {
	ctx context.Context
	userService UserService
}

// NewApp creates a new App application struct
func NewApp(userService UserService) *App {
	return &App{userService: userService}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
	db.InitDB()
	dbConn, err := db.GetConnection()
	if err != nil {
		log.Fatalf("error getting db connection: %v", err)
	}
	usersRepo := repo
}
