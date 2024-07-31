package service

import (
	"fmt"
	"respirar/models"
	"respirar/repo"
)

type service struct {
	userRepo repo.UserRepository
}

type UserService interface {
	GetUsers(limit, offset int) ([]models.User, error)
	CreateUser(user *models.User) (*models.User, error)
}

func NewUserService(userRepo repo.UserRepository) UserService {
	return &service{userRepo: userRepo}
}

func (s *service) GetUsers(limit, offset int) ([]models.User, error) {
	users, err := s.userRepo.SearchUsers(limit, offset)
	if err != nil {
		return nil, err
	}
	return users, nil
}

func (s *service) CreateUser(user *models.User) (*models.User, error) {
	fmt.Println("USER: ", user)
	res, err := s.userRepo.Insert(user)
	if err != nil {
		return nil, err
	}
	return res, nil
}
