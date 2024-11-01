import React from 'react';
import Section from '../components/Section';
import SectionCard from '../components/SectionCard';
import { Container, Row, Col } from 'react-bootstrap';

const workoutDescriptions = [
    { name: "Push-Ups", type: "Kracht", benefits: "Versterkt de bovenlichaamspieren, met focus op borst, schouders, en triceps." },
    { name: "Sit-Ups", type: "Core", benefits: "Richt zich op de buikspieren en verbetert de kernstabiliteit." },
    { name: "Squats", type: "Kracht", benefits: "Bouwt kracht in het onderlichaam op, met focus op quadriceps, hamstrings en bilspieren." },
    { name: "Plank", type: "Core", benefits: "Verbetert kernstabiliteit en uithoudingsvermogen." },
    { name: "Hardlopen", type: "Cardio", benefits: "Verbetert cardiovasculaire gezondheid en uithoudingsvermogen." },
    { name: "Jumping Jacks", type: "Cardio", benefits: "Verhoogt de hartslag en bevordert algehele lichaamstraining." },
    { name: "Lunges", type: "Kracht", benefits: "Richt zich op benen en bilspieren, verbetert balans en flexibiliteit." },
    { name: "Bicep Curls", type: "Kracht", benefits: "Versterkt de biceps en verbetert de spiertonus in het bovenlichaam." },
    { name: "Burpees", type: "Hele Lichaam", benefits: "Combineert kracht en cardio, verbetert de algehele fitheid." },
    { name: "Mountain Climbers", type: "Cardio/Core", benefits: "Versterkt de kern, benen en verbetert cardiovasculair uithoudingsvermogen." }
];

export default function WorkoutDescriptionPage() {
    return (
        <Container className="mt-5">
            <Section title="Verschillende Soorten Oefeningen" isInitiallyOpen>
                <Row>
                    {workoutDescriptions.map((workout, index) => (
                        <Col md={6} className="mb-4" key={index}>
                            <SectionCard
                                title={workout.name}
                                type={workout.type}
                                benefits={workout.benefits}
                            />
                        </Col>
                    ))}
                </Row>
            </Section>
        </Container>
    );
}
