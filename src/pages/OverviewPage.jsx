import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import OverviewStatCard from '../components/OverviewCard';
import CompletionRate from '../components/CompletionRate';
import Section from '../components/Section';

export default function OverviewPage(props) {
    const { workouts } = props;

    // Calculate total exercises and completed exercises
    const totalExercises = workouts.reduce((sum, day) => sum + day.exercises.length, 0);
    const completedExercises = workouts.reduce((sum, day) => sum + day.completedExercises, 0);
    const completionRate = totalExercises > 0 ? (completedExercises / totalExercises) * 100 : 0;


    return (
        <Container className="mt-5">
            <Section title="Workout Overview" isInitiallyOpen>
                <Row>
                    <Col md={4} className="mb-4">
                        <OverviewStatCard title="Total Workouts" value={totalExercises} />
                    </Col>
                    <Col md={4} className="mb-4">
                        <OverviewStatCard title="Completed Workouts" value={completedExercises} />
                    </Col>
                    <Col md={4} className="mb-4">
                        <CompletionRate completionRate={completionRate} />
                    </Col>
                </Row>
            </Section>
        </Container>
    );
}
