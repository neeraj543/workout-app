import React, { useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';

export default function Section(props) {
    const { title, children, isInitiallyOpen } = props;
    const [isOpen, setIsOpen] = useState(isInitiallyOpen);

    return (
        <div className="mt-3 rounded shadow-sm" style={{ backgroundColor: "lavender" }}>
            <h2 className="text-center">
                {title}
                <Button variant="outline-primary" size="sm" className="ms-2 mt-1"
                        onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? "-" : "+"}
                </Button>
            </h2>
            <Container>
                <Row>
                    {isOpen && children}
                </Row>
            </Container>
        </div>
    );
}
