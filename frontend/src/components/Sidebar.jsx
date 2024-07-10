import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import '../styles/sidebar.css';
import PathConstants from "../routes/pathConstants";

export default function Sidebar() {
    const [activeItem, setActiveItem] = useState("Usuários");
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

    return (
        <>
            <div className="sidebar">
                <div
                    className={`select ${activeItem === "Usuários" ? "active" : ""}`}
                >
                    <div style={{ display: 'block' }}>
                        <div
                            className="select-main"
                            onClick={() => handleItemClick("Usuários")}
                        >

                            <Link to={PathConstants.USERS}>
                                <Icon icon="mdi:user" style={{ marginRight: '10px' }} />
                                Usuários
                            </Link>
                        </div>
                        <div
                            className={`select-options ${shouldHide ? "hide" : ""}`}
                        >
                            {
                                ["Dados pessoais", "Anamnese", "Hábitos e comorbidades", "Exame do sono"].map((name) => (
                                    <SidebarOption
                                        Name={name}
                                        activeSubItem={activeSubItem}
                                        setActiveSubItem={setActiveSubItem}
                                    />
                                ))
                            }
                        </div>
                    </div>

                </div>
                <div
                    className={`select ${activeItem === "Cadastrar" ? "active" : ""}`}
                    onClick={() => handleItemClick("Cadastrar")}
                >
                    <div className="select-main">
                        <Icon icon="basil:add-solid" style={{ marginRight: '10px' }} />
                        Cadastrar
                    </div>
                </div>
            </div>
        </>
    )
}

function SidebarOption(props) {
    const handleOptionClick = (item) => {
        props.setActiveSubItem(item);
    };

    return (
        <div
            className={`subitem ${props.activeSubItem === props.Name ? "active" : ""}`}
            onClick={() => handleOptionClick(props.Name)}
        >
            {props.Name}
        </div>
    );
}
