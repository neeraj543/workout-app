import React from 'react';
import { Button, Card } from 'react-bootstrap';

export default function DaySection(props) {
    const { day, onAddWorkout, onToggleComplete, onDeleteWorkout } = props;

    return (
        <Card className="mb-4 shadow-sm p-3">
            <h4>{day.day}</h4>
            {day.exercises.map((exercise, index) => (
                <Card key={index} className="p-2 mb-2">
                    <h5>{exercise.name}</h5>
                    <p>Type: {exercise.type}</p>
                    <p>Reps: {exercise.reps}</p>
                    <p>Sets: {exercise.sets}</p>
                    <p>Duration: {exercise.duration}</p>
                    <Button variant={exercise.completed ? "success" : "outline-secondary"} onClick={() => onToggleComplete(day.day, index)}>
                        {exercise.completed ? "Completed" : "Mark as Complete"}
                    </Button>
                    <Button variant="danger" onClick={() => onDeleteWorkout(day.day, index)} className="ms-2">Delete</Button>
                </Card>
            ))}
            <Button variant="primary" onClick={() => onAddWorkout(day.day)} className="mt-3">
                Add Workout
            </Button>
        </Card>
    );
}
