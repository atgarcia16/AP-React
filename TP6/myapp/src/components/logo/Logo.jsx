import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logoImg from '../../assets/Logo.png';
import logoReact from '../../assets/react.svg';

const Logo = () => {
    return (
        <div>
            <Container>
                <img
                    src={logoImg}
                    alt="Logo"
                    style={{ height: "40px", width: "auto" }}
                />

                <h2>Registro de Usuario</h2>

            </Container>
        </div>
    );
}

export default Logo;
