package service

import (
	"respirar/models"
	"respirar/repo"
)

type service struct {
	userRepo repo.UserRepository
}

type UserService interface {
	GetUsers(limit, offset int) ([]models.User, error)
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
