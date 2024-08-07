import React, { useState } from "react";
import { useSearch } from "../components/SearchProvider";
import "../styles/personalinfo.css";
import { FiEdit } from "react-icons/fi";

export default function UsersPersonalInfo() {
  const { selectedResult } = useSearch();
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Nome */}
        <div className="input-table">
          <div className="input-group">
            <label htmlFor="fname">Nome</label>
            <input
              id="name"
              type="text"
              name="name"
              value={selectedResult.name}
              // onChange={handleChange}
              className={`input-box`}
              disabled={disabled}
            />
          </div>
        </div>
        {/* Email and Birth */}
        <div className="input-table">
          <div className="input-group">
            <label htmlFor="fname">Email</label>
            <input
              id="email"
              type="text"
              name="email"
              value={selectedResult.email}
              // onChange={handleChange}
              className={`input-box`}
              disabled={disabled}
            />
          </div>
          <div className="input-group">
            <label htmlFor="fname">Data de Nascimento</label>
            <input
              id="birth_date"
              type="date"
              name="birth_date"
              value={selectedResult.birth_date}
              // onChange={handleChange}
              className="input-box"
              disabled={disabled}
            />
          </div>
        </div>
        {/* Address and Number */}
        <div className="input-table">
          <div className="input-group">
            <label htmlFor="fname">Endereço</label>
            <input
              id="address"
              type="text"
              name="address"
              value={selectedResult.address}
              // onChange={handleChange}
              className="input-box"
              disabled={disabled}
            />
          </div>
          <div className="input-group">
            <label htmlFor="fname">Número</label>
            <input
              id="address_number"
              type="text"
              name="address_number"
              value={selectedResult.address_number}
              // onChange={handleNumberChange}
              className="input-box"
              disabled={disabled}
            />
          </div>
        </div>
        {/* CEP and Gender */}
        <div className="input-table">
          <div className="input-group">
            <label htmlFor="fname">CEP</label>
            <input
              id="cep"
              type="text"
              name="cep"
              value={selectedResult.cep || ""}
              // onChange={handleNumberChange}
              className="input-box"
              disabled={disabled}
            />
          </div>
          <div className="input-group">
            <label htmlFor="gender">Gênero</label>
            <select
              id="gender"
              name="gender"
              value={selectedResult.gender}
              // onChange={handleChange}
              className="input-box"
              disabled={disabled}
            >
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
              <option value="Neutro">Neutro</option>
            </select>
          </div>
        </div>
        {/* Profession and Doctor */}
        <div className="input-table">
          <div className="input-group">
            <label htmlFor="fname">Profissão</label>
            <input
              id="profession"
              type="text"
              name="profession"
              value={selectedResult.profession}
              // onChange={handleChange}
              className="input-box"
              disabled={disabled}
            />
          </div>
          <div className="input-group">
            <label htmlFor="fname">Médico</label>
            <input
              id="doctor"
              type="text"
              name="doctor"
              value={selectedResult.doctor}
              // onChange={handleChange}
              className="input-box"
              disabled={disabled}
            />
          </div>
        </div>
        {/* Weight, Height, IMC */}
        <div className="input-table">
          <div className="input-group">
            <label htmlFor="fname">Peso (kg)</label>
            <input
              id="weight"
              type="text"
              name="weight"
              value={selectedResult.weight}
              // onChange={onAmountChange}
              className="input-box"
              disabled={disabled}
            />
          </div>
          <div className="input-group">
            <label htmlFor="fname">Altura (m)</label>
            <input
              id="height"
              type="text"
              name="height"
              value={selectedResult.height}
              // onChange={onAmountChange}
              className="input-box"
              disabled={disabled}
            />
          </div>
          <div className="input-group">
            <label htmlFor="fname">IMC</label>
            <input
              id="imc"
              type="text"
              name="imc"
              value={selectedResult.imc}
              className={`input-box`}
              disabled={disabled}
            />
          </div>
        </div>
        {/* Polysonnography and Assessment date */}
        <div className="input-table">
          <div className="input-group">
            <label htmlFor="fname">Polissonografia Tipo</label>
            <input
              id="polysonnography"
              type="text"
              name="polysonnography"
              value={selectedResult.polysonnography}
              // onChange={handleChange}
              className="input-box"
              disabled={disabled}
            />
          </div>
          <div className="input-group">
            <label htmlFor="fname">Data da avaliação</label>
            <input
              id="assessment_date"
              type="date"
              name="assessment_date"
              value={selectedResult.assessment_date}
              // onChange={handleChange}
              className="input-box"
              disabled={disabled}
            />
          </div>
        </div>
        <button type="submit" className="button">
          <FiEdit />
          Editar
        </button>
      </form>
    </div>
  );
}
