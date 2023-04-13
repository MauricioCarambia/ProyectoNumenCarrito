import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { FloatingLabel } from "react-bootstrap";

function FormContacto() {
    return (
        <>
            <div>
                <Form >
                <Row className="g-3">
                <Col md>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Nombre"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="Nombre" />
                    </FloatingLabel>
                    </Col>
                    <Col md>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Apellido"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="Apellido" />
                    </FloatingLabel>
                    </Col>
                    </Row>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email"
                        className="mb-3"
                    >
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingTextarea2" label="Motivo de la consulta" className="mb-3">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                </Form>
            <div className="mb-5">
                <Button as="input" type="submit" value="Submit"  size="lg"/>{' '}
            </div>
            </div>
        </>
    );
}

export default FormContacto;