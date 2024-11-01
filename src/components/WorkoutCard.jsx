import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function WorkoutCard({ exercise, toggleComplete, deleteWorkout }) {
    return (
        <Card className="p-2 mb-2 shadow-sm">
            <h5>{exercise.name}</h5>
            <p>Type: {exercise.type}</p>
            <p>Reps: {exercise.reps}</p>
            <p>Sets: {exercise.sets}</p>
            <p>Duration: {exercise.duration}</p>
            <Button variant={exercise.completed ? "success" : "outline-secondary"} onClick={toggleComplete}>
                {exercise.completed ? "Completed" : "Mark as Complete"}
            </Button>
            <Button variant="danger" onClick={deleteWorkout} className="ms-2">Delete</Button>
        </Card>
    );
}
