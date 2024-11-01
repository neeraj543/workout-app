import React, { useState, useEffect } from 'react';
import { ProgressBar, Button, Modal, Form, Row, Col, Card } from 'react-bootstrap';
import { Section } from '../components/Section';

const initialWorkouts = [
    { day: "Monday", exercises: [], completedExercises: 0 },
    { day: "Tuesday", exercises: [], completedExercises: 0 },
    { day: "Wednesday", exercises: [], completedExercises: 0 },
    { day: "Thursday", exercises: [], completedExercises: 0 },
    { day: "Friday", exercises: [], completedExercises: 0 },
    { day: "Saturday", exercises: [], completedExercises: 0 },
    { day: "Sunday", exercises: [], completedExercises: 0 }
];

export default function WorkoutPage() {
    const [workouts, setWorkouts] = useState(initialWorkouts);
    const [showModal, setShowModal] = useState(false);
    const [newWorkout, setNewWorkout] = useState({ name: '', type: '', reps: '', sets: '', duration: '', completed: false });
    const [selectedDay, setSelectedDay] = useState(null);

    // Calculate progress
    const totalExercises = workouts.reduce((sum, day) => sum + day.exercises.length, 0);
    const completedExercises = workouts.reduce((sum, day) => sum + day.completedExercises, 0);
    const progress = totalExercises > 0 ? (completedExercises / totalExercises) * 100 : 0;

    // Check if it's Monday and reset workouts if it's a new week
    useEffect(() => {
        const lastReset = localStorage.getItem('lastReset');
        const today = new Date();
        const isMonday = today.getDay() === 1; // 1 = Monday

        if (isMonday && (!lastReset || new Date(lastReset).getDate() !== today.getDate())) {
            resetWorkouts(); // Reset if it's Monday and a new week
            localStorage.setItem('lastReset', today); // Update last reset date
        }
    }, []);

    const handleShowModal = (day) => {
        setSelectedDay(day);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setNewWorkout({ name: '', type: '', reps: '', sets: '', duration: '', completed: false });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewWorkout({ ...newWorkout, [name]: value });
    };

    const handleAddWorkout = () => {
        setWorkouts(workouts.map(day => {
            if (day.day === selectedDay) {
                const updatedExercises = [...day.exercises, newWorkout];
                return {
                    ...day,
                    exercises: updatedExercises,
                    completedExercises: updatedExercises.filter(ex => ex.completed).length
                };
            }
            return day;
        }));
        handleCloseModal();
    };

    const toggleComplete = (dayName, index) => {
        setWorkouts(workouts.map(day => {
            if (day.day === dayName) {
                const updatedExercises = day.exercises.map((exercise, i) => {
                    if (i === index) {
                        return { ...exercise, completed: !exercise.completed };
                    }
                    return exercise;
                });
                return {
                    ...day,
                    exercises: updatedExercises,
                    completedExercises: updatedExercises.filter(ex => ex.completed).length
                };
            }
            return day;
        }));
    };

    const deleteWorkout = (dayName, index) => {
        setWorkouts(workouts.map(day => {
            if (day.day === dayName) {
                const updatedExercises = day.exercises.filter((_, i) => i !== index);
                return {
                    ...day,
                    exercises: updatedExercises,
                    completedExercises: updatedExercises.filter(ex => ex.completed).length
                };
            }
            return day;
        }));
    };

    const resetWorkouts = () => {
        setWorkouts(initialWorkouts);
    };

    return (
        <div className="container mt-5">
            <Row>
                <Col md={4}>
                    <Card className="p-3 mb-4 shadow-sm">
                        <h2 className="text-center">Workout Tracker</h2>
                        <ProgressBar now={progress} label={`${Math.round(progress)}%`} className="my-3" />
                        <Button variant="danger" onClick={resetWorkouts} className="w-100">Reset All Workouts</Button>
                    </Card>
                </Col>

                <Col md={8}>
                    <Card className="p-3 shadow-sm">
                        {workouts.map(day => (
                            <Section key={day.day} title={day.day}>
                                {day.exercises.map((exercise, index) => (
                                    <div key={index} className="card p-2 mb-2 shadow-sm" style={{ width: '100%' }}>
                                        <h5>{exercise.name}</h5>
                                        <p>Type: {exercise.type}</p>
                                        <p>Reps: {exercise.reps}</p>
                                        <p>Sets: {exercise.sets}</p>
                                        <p>Duration: {exercise.duration}</p>
                                        <Button
                                            variant={exercise.completed ? "success" : "outline-secondary"}
                                            onClick={() => toggleComplete(day.day, index)}
                                            className="me-2"
                                        >
                                            {exercise.completed ? "Completed" : "Mark as Complete"}
                                        </Button>
                                        <Button
                                            variant="danger"
                                            onClick={() => deleteWorkout(day.day, index)}
                                        >
                                            Delete
                                        </Button>
                                    </div>
                                ))}
                                <Button variant="primary" onClick={() => handleShowModal(day.day)} className="mt-3">
                                    Add Workout
                                </Button>
                            </Section>
                        ))}
                    </Card>
                </Col>
            </Row>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Workout for {selectedDay}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formWorkoutName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" value={newWorkout.name} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="formWorkoutType">
                            <Form.Label>Type</Form.Label>
                            <Form.Control type="text" name="type" value={newWorkout.type} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="formWorkoutReps">
                            <Form.Label>Reps</Form.Label>
                            <Form.Control type="number" name="reps" value={newWorkout.reps} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="formWorkoutSets">
                            <Form.Label>Sets</Form.Label>
                            <Form.Control type="number" name="sets" value={newWorkout.sets} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="formWorkoutDuration">
                            <Form.Label>Duration</Form.Label>
                            <Form.Control type="text" name="duration" value={newWorkout.duration} onChange={handleInputChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                    <Button variant="primary" onClick={handleAddWorkout}>Add Workout</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
