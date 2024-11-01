import React, { useState, useEffect } from 'react';
import ProgressSection from '../components/ProgressSection';
import Section from '../components/Section';
import SectionCard from '../components/SectionCard';
import AddWorkoutModal from '../components/AddWorkoutModal';
import { Container, Row, Col, Button } from 'react-bootstrap';

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

    const totalExercises = workouts.reduce((sum, day) => sum + day.exercises.length, 0);
    const completedExercises = workouts.reduce((sum, day) => sum + day.completedExercises, 0);
    const progress = totalExercises > 0 ? (completedExercises / totalExercises) * 100 : 0;

    useEffect(() => {
        const lastReset = localStorage.getItem('lastReset');
        const today = new Date();
        const isMonday = today.getDay() === 1;

        if (isMonday && (!lastReset || new Date(lastReset).getDate() !== today.getDate())) {
            resetWorkouts();
            localStorage.setItem('lastReset', today);
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
        <Container className="mt-5">
            <ProgressSection progress={progress} resetWorkouts={resetWorkouts} />

            {workouts.map(day => (
                <Section key={day.day} title={day.day} isInitiallyOpen>
                    <Row>
                        {day.exercises.map((exercise, index) => (
                            <Col md={6} className="mb-3" key={index}>
                                <SectionCard
                                    title={exercise.name}
                                    type={exercise.type}
                                    benefits={`Reps: ${exercise.reps}, Sets: ${exercise.sets}, Duration: ${exercise.duration}`}
                                >
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
                                </SectionCard>
                            </Col>
                        ))}
                        <Button variant="primary" onClick={() => handleShowModal(day.day)} className="mt-3">
                            Add Workout
                        </Button>
                    </Row>
                </Section>
            ))}

            <AddWorkoutModal
                show={showModal}
                onClose={handleCloseModal}
                newWorkout={newWorkout}
                setNewWorkout={setNewWorkout}
                onAddWorkout={handleAddWorkout}
            />
        </Container>
    );
}
