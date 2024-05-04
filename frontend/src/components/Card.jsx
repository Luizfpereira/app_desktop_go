import React, { useState } from 'react';
import '../styles/card.css';
import { DownOutlined } from '@ant-design/icons';

function showInfo() {

    return (
        <div>
            <p>INFO</p>
            <p>INFO</p>
        </div>
    )
}


export default function Card(props) {
    const { name, age, email, address, city, state } = props.user;
    const [shouldDisplay, setShouldDisplay] = useState(false);

    function expandBox() {
        var box = document.querySelector('.card-frame');
        box.classList.toggle('card-frame-expanded');

        setShouldDisplay(!shouldDisplay)
    }

    // name: "José",
    // age: 32,
    // email: "jose@example.com",
    // address: "Avenida dos Pássaros, 852",
    // city: "Aracaju",
    // state: "SE"

    return (
        <>
            <div className='card-frame'>
                <div className='container-left'>
                    <div className='top'>
                        {name}
                    </div>
                    <div className='bottom'>
                        {!shouldDisplay ? (
                            <>
                                <p>{age} anos</p>
                            </>
                        ) : (
                            <>
                                <div>
                                    <p className='internal-info'><span style={{ fontWeight: 'bold' }}>Idade: </span>{age}</p>
                                    <p className='internal-info'><span style={{ fontWeight: 'bold' }}>Email: </span>{email}</p>
                                    <p className='internal-info'><span style={{ fontWeight: 'bold' }}>Endereço: </span>{address}</p>
                                    <p className='internal-info'><span style={{ fontWeight: 'bold' }}>Cidade: </span>{city}</p>
                                    <p className='internal-info'><span style={{ fontWeight: 'bold' }}>Estado: </span>{state}</p>
                                </div>
                            </>
                        )}

                    </div>
                </div>
                <div className='container-right'>
                    <i><DownOutlined
                        onClick={expandBox}
                    />
                    </i>
                </div>
            </div>
        </>
    )
}


