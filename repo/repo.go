package repo

import (
	"respirar/models"

	"gorm.io/gorm"
)

type UserRepo struct {
	conn *gorm.DB
}

type UserRepository interface {
	SearchUsers(limit, offset int) ([]models.User, error)
}

func NewUsersRepo(conn *gorm.DB) UserRepository {
	return &UserRepo{conn: conn}
}

func (r *UserRepo) SearchUsers(limit, offset int) ([]models.User, error) {
	var users []models.User
	result := r.conn.Find(&users).Limit(limit)
	if result.Error != nil {
		return nil, result.Error
	}
	return users, nil
}
