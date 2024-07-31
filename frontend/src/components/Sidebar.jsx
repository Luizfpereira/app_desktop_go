import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import "../styles/sidebar.css";
import PathConstants from "../routes/pathConstants";

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("Usuarios");
  const [activeSubItem, setActiveSubItem] = useState("Dados pessoais");
  const [shouldHide, setShouldHide] = useState(false);

  const handleItemClick = (item) => {
    setActiveItem(item);
    if (item == "Cadastrar") {
      setActiveSubItem("");
      setShouldHide(true);
    } else {
      setActiveSubItem("Dados pessoais");
      setShouldHide(false);
    }
  };

  var subitems = [
    { name: "Dados pessoais", path: PathConstants.USERS_PERSONAL_INFO },
    { name: "Anamnese", path: PathConstants.USERS_ANAMNESIS },
    { name: "Hábitos e comorbidades", path: PathConstants.USERS_HABITS },
    { name: "Cirurgias e medicamentos", path: PathConstants.USERS_SURGERIES },
    { name: "Exame do sono", path: PathConstants.USERS_EXAMS },
  ];

  return (
    <>
      <div className="sidebar">
        <div className={`select ${activeItem === "Usuarios" ? "active" : ""}`}>
          <div style={{ display: "block" }}>
            <div
              className="select-main"
              onClick={() => handleItemClick("Usuarios")}
              key={"Usuários"}
            >
              <Link
                to={PathConstants.USERS_PERSONAL_INFO}
                className="select-main"
              >
                <Icon icon="mdi:user" style={{ marginRight: "10px" }} />
                Usuários
              </Link>
            </div>
            <div className={`select-options ${shouldHide ? "hide" : ""}`}>
              {subitems.map((item) => (
                <SidebarOption
                  Name={item.name}
                  Path={item.path}
                  activeSubItem={activeSubItem}
                  setActiveSubItem={setActiveSubItem}
                />
              ))}
            </div>
          </div>
        </div>
        <div
          className={`select ${activeItem === "Cadastrar" ? "active" : ""}`}
          key={"Cadastrar"}
        >
          <Link
            to={PathConstants.INSERT_USER}
            className="select-main"
            onClick={() => handleItemClick("Cadastrar")}
          >
            <Icon icon="mdi:user" style={{ marginRight: "10px" }} />
            Cadastrar
          </Link>
        </div>
      </div>
    </>
  );
}

function SidebarOption(props) {
  const handleOptionClick = (item) => {
    props.setActiveSubItem(item);
  };

  return (
    <div
      className={`subitem ${props.activeSubItem === props.Name ? "active" : ""}`}
      onClick={() => handleOptionClick(props.Name)}
      key={props.Name}
    >
      <Link to={props.Path} className="select-main-reduced">
        {props.Name}
      </Link>
    </div>
  );
}
