import React, { useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';

export function Section({ title, children, isInitiallyOpen = true }) {
    const [isOpen, setIsOpen] = useState(isInitiallyOpen);

    return (
        <div className="mt-3 rounded shadow-sm" style={{ backgroundColor: "lavender" }}>
            <h2 className="text-center">
                {title}
                <Button
                    variant="outline-primary"
                    size="sm"
                    className="ms-2 mt-1"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "-" : "+"}
                </Button>
            </h2>
            {isOpen && (
                <Container>
                    <Row>
                        {children}
                    </Row>
                </Container>
            )}
        </div>
    );
}
