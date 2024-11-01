import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

export default function AddWorkoutModal(props) {
    const { show, onClose, newWorkout, setNewWorkout, onAddWorkout } = props;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewWorkout({ ...newWorkout, [name]: value });
    };

    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Workout</Modal.Title>
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
                <Button variant="secondary" onClick={onClose}>Close</Button>
                <Button variant="primary" onClick={onAddWorkout}>Add Workout</Button>
            </Modal.Footer>
        </Modal>
    );
}
