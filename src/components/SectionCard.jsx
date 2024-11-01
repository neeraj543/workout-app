import React from 'react';
import { Card, Button } from 'react-bootstrap';

export function SectionCard({ day, onAddWorkout }) {
    return (
        <Card className="p-3 text-center" style={{ width: '10rem' }}>
            <h5>{day}</h5>
            <Button variant="primary" className="mt-2" onClick={() => onAddWorkout(day)}>
                Add Workout
            </Button>
        </Card>
    );
}
