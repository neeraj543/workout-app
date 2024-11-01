import React from 'react';
import { ProgressBar, Button } from 'react-bootstrap';

export default function ProgressSection(props) {
    const { progress, resetWorkouts } = props;

    return (
        <div className="text-center mb-4">
            <ProgressBar now={progress} label={`${Math.round(progress)}%`} className="my-3" />
            <Button variant="danger" onClick={resetWorkouts}>Reset All Workouts</Button>
        </div>
    );
}
