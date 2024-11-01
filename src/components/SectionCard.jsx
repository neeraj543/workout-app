import React from 'react';
import { Card } from 'react-bootstrap';

export default function SectionCard(props) {
    const { title, type, benefits, children } = props;

    return (
        <Card className="p-3 shadow-sm h-100">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{type}</Card.Subtitle>
                <Card.Text>{benefits}</Card.Text>
                {children}
            </Card.Body>
        </Card>
    );
}
