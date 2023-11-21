import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Logo from "../logo/Logo"
import './Form.css'

const Formulario = () => {

    const [contrasena, setContrasena] = useState("");
    const [confirmarContrasena, setConfirmarContrasena] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (contrasena === "") {
            alert("La contraseña es obligatoria");
            return;
        }

        if (contrasena !== confirmarContrasena) {
            alert("Las contraseñas no coinciden");
            return;
        }

        alert(`Usuario creado con exito`);

    };

    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                <Logo />
            </div>

            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="nombre">
                    <Form.Label></Form.Label>
                    <Form.Control type="text" placeholder="Nombre" required />
                </Form.Group> <br />
                <Form.Group controlId="apellido">
                    <Form.Label></Form.Label>
                    <Form.Control type="text" placeholder="Apellido" required />
                </Form.Group><br />
                <Form.Group controlId="telefono">
                    <Form.Label></Form.Label>
                    <Form.Control type="text" placeholder="Teléfono" required />
                </Form.Group><br />
                <Form.Group controlId="email">
                    <Form.Label></Form.Label>
                    <Form.Control type="email" placeholder="Email" required />
                </Form.Group><br />
                <Form.Group controlId="contrasena">
                    <Form.Label></Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" value={contrasena} onChange={(event) => setContrasena(event.target.value)} />
                </Form.Group><br />
                <Form.Group controlId="confirmar-contrasena">
                    <Form.Label></Form.Label>
                    <Form.Control type="password" placeholder="Confirmar contraseña" value={confirmarContrasena} onChange={(event) => setConfirmarContrasena(event.target.value)} />
                </Form.Group><br />
                <Button type="submit" variant="primary">Enviar</Button>
            </Form>
        </div>
    );
};

export default Formulario;
