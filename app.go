package main

import (
	"context"
	"log"
	"respirar/db"
	"respirar/models"
	"respirar/repo"
	"respirar/service"
)

// App struct
type App struct {
	ctx         context.Context
	userService service.UserService
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
	// db.InitDB()
	dbConn, err := db.GetConnection()
	if err != nil {
		log.Fatalf("error getting db connection: %v", err)
	}
	if err := db.Migrate(dbConn); err != nil {
		log.Fatalf("error migrating database: %v", err)
	}

	userRepo := repo.NewUsersRepo(dbConn)
	userService := service.NewUserService(userRepo)
	a.userService = userService
}

func (a *App) GetUsers(limit, offset int) ([]models.User, error) {
	users, err := a.userService.GetUsers(limit, offset)
	if err != nil {
		log.Printf("error getting users: %v", err)
		return nil, err
	}
	return users, err
}

func (a *App) GetAllUsers() ([]models.User, error) {
	users, err := a.userService.GetAllUsers()
	if err != nil {
		log.Printf("error getting users: %v", err)
		return nil, err
	}
	return users, err
}

func (a *App) CreateUser(user *models.User) (*models.User, error) {
	user, err := a.userService.CreateUser(user)
	if err != nil {
		log.Printf("error creating user: %v", err)
		return nil, err
	}
	return user, err
}
