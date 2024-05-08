package models

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Name       string `json:"name" binding:"required" gorm:"not null"`
	Age        int    `json:"age" binding:"required"`
	Email      string `json:"email" binding:"required,email" gorm:"unique;not null"`
	Address    string `json:"address"`
	City       string `json:"city"`
	State      string `json:"state"`
	Profession string `json:"profession"`
}
