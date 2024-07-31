import React, { useState } from "react";
import "../styles/insert.css";
import { CreateUser } from "../../wailsjs/go/main/App";

export default function InsertUser() {
  const [inputs, setInputs] = useState({});
  const [disabled, setDisabled] = useState(true);
  const [empty, setEmpty] = useState({ name: false, email: false });
  const [errorMessages, setErrorMessages] = useState([]);

  function convertDatesToISOFormat(dates) {
    return dates.map((date) => {
      if (date) {
        const newDate = new Date(date);
        return newDate.toISOString();
      }
      return date;
    });
  }

  const handleChange = (event) => {
    const name = event.target.name;
    let value = event.target.value;
    if (Number(value)) {
      value = Number(value);
    }
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleNumberChange = (event) => {
    const name = event.target.name;
    let value = event.target.value;
    if (!isNaN(value) || value === "") {
      value = Number(value);
      setInputs((values) => ({
        ...values,
        [name]: value === "" ? null : Number(value),
      }));
    }
  };

  const onAmountChange = (event) => {
    const amount = event.target.value;
    const name = event.target.name;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      setInputs((values) => {
        const newInputs = { ...values, [name]: amount };

        if (newInputs.weight > 0 && newInputs.height > 0) {
          setDisabled(false);
          let imc =
            Math.round(
              (newInputs.weight / Math.pow(newInputs.height, 2)) * 100
            ) / 100;
          return { ...newInputs, imc: imc };
        } else {
          setDisabled(true);
          return { ...newInputs, imc: 0 };
        }
      });
    }
  };

  function validateFields() {
    const errors = [];

    let emptyFields = {
      name: false,
      email: false,
    };

    if (!inputs.name) {
      errors.push("Nome é requerido");
      emptyFields.name = true;
    }

    if (!inputs.email) {
      errors.push("Email é requerido");
      emptyFields.email = true;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(inputs.email)
    ) {
      errors.push("Email inválido");
    }

    setEmpty(emptyFields);

    if (errors.length > 0) {
      throw new Error(errors.join("; "));
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      validateFields();
      const dates = [inputs.birth_date, inputs.assessment_date];
      const isoDates = convertDatesToISOFormat(dates);
      const updatedInputs = {
        ...inputs,
        birth_date: isoDates[0],
        assessment_date: isoDates[1],
      };
      CreateUser(updatedInputs);
      setInputs({});
      setErrorMessages([]);
    } catch (err) {
      const errorMessages = err.message.split("; ");
      setErrorMessages(errorMessages);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Display Error Messages */}
        {errorMessages.length > 0 && (
          <div className="error-messages">
            <ul>
              {errorMessages.map((error, index) => (
                <li key={index}>* {error}</li>
              ))}
            </ul>
          </div>
        )}
        {/* Nome */}
        <div className="input-table">
          <div className="input-group">
            <label htmlFor="fname">Nome *</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Digite seu nome completo"
              value={inputs.name || ""}
              onChange={handleChange}
              className={`input-box ${empty.name === true ? "empty" : ""}`}
            />
          </div>
        </div>
        {/* Email and Birth */}
        <div className="input-table">
          <div className="input-group">
            <label htmlFor="fname">Email *</label>
            <input
              id="email"
              type="text"
              name="email"
              placeholder="Ex.: seuemail@exemplo.com"
              value={inputs.email || ""}
              onChange={handleChange}
              className={`input-box ${empty.email === true ? "empty" : ""}`}
            />
          </div>
          <div className="input-group">
            <label htmlFor="fname">Data de Nascimento</label>
            <input
              id="birth_date"
              type="date"
              name="birth_date"
              placeholder="Somente números"
              value={inputs.birth_date || ""}
              onChange={handleChange}
              className="input-box"
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
              placeholder="Digite seu endereço"
              value={inputs.address || ""}
              onChange={handleChange}
              className="input-box"
            />
          </div>
          <div className="input-group">
            <label htmlFor="fname">Número</label>
            <input
              id="address_number"
              type="text"
              name="address_number"
              placeholder="Número do endereço"
              value={inputs.address_number || ""}
              onChange={handleNumberChange}
              className="input-box"
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
              placeholder="Somente números"
              value={inputs.cep || ""}
              onChange={handleNumberChange}
              className="input-box"
            />
          </div>
          <div className="input-group">
            <label htmlFor="gender">Gênero</label>
            <select
              id="gender"
              name="gender"
              value={inputs.gender || ""}
              onChange={handleChange}
              className="input-box"
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
              placeholder="Sua profissão"
              value={inputs.profession || ""}
              onChange={handleChange}
              className="input-box"
            />
          </div>
          <div className="input-group">
            <label htmlFor="fname">Médico</label>
            <input
              id="doctor"
              type="text"
              name="doctor"
              placeholder="Seu médico"
              value={inputs.doctor || ""}
              onChange={handleChange}
              className="input-box"
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
              placeholder="Ex.: 75.3"
              value={inputs.weight || ""}
              onChange={onAmountChange}
              className="input-box"
            />
          </div>
          <div className="input-group">
            <label htmlFor="fname">Altura (m)</label>
            <input
              id="height"
              type="text"
              name="height"
              placeholder="Ex.: 1.75"
              value={inputs.height || ""}
              onChange={onAmountChange}
              className="input-box"
            />
          </div>
          <div className="input-group">
            <label htmlFor="fname">IMC</label>
            <input
              id="imc"
              type="text"
              name="imc"
              placeholder="Calculado automaticamente"
              value={inputs.imc || ""}
              className={`input-box ${disabled === true ? "disabled" : ""}`}
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
              placeholder="Tipo da Polissonografia"
              value={inputs.polysonnography || ""}
              onChange={handleChange}
              className="input-box"
            />
          </div>
          <div className="input-group">
            <label htmlFor="fname">Data da avaliação</label>
            <input
              id="assessment_date"
              type="date"
              name="assessment_date"
              placeholder="Somente números"
              value={inputs.assessment_date || ""}
              onChange={handleChange}
              className="input-box"
            />
          </div>
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}
