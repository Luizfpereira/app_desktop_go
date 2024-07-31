package models

import (
	"time"

	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	Name            *string    `json:"name" binding:"required" gorm:"not null"`
	Email           *string    `json:"email" binding:"required,email" gorm:"unique;not null"`
	BirthDate       *time.Time `json:"birth_date,omitempty"`
	Address         *string    `json:"address,omitempty"`
	AddressNumber   *int       `json:"address_number,omitempty"`
	Cep             *int       `json:"cep,omitempty"`
	Gender          *string    `json:"gender,omitempty"`
	Profession      *string    `json:"profession,omitempty"`
	Doctor          *string    `json:"doctor,omitempty"`
	Weight          *float32   `json:"weight,omitempty"`
	Heigth          *float32   `json:"height,omitempty"`
	Imc             *float32   `json:"imc,omitempty"`
	Polysomnography *string    `json:"polysomnography,omitempty"`
	AssessmentDate  *time.Time `json:"assessment_date,omitempty"`
}
