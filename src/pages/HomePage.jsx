import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

export default function HomePage() {
    return (
        <Container
            fluid
            className="d-flex justify-content-center align-items-center"
            style={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
            }}
        >
            <Card className="text-center p-5 shadow-lg" style={{ maxWidth: '800px', width: '100%', border: 'none', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
                <h1 className="mb-4" style={{ color: '#007bff' }}>Welcome to Your Personal Workout Tracker</h1>

                <Row className="mb-4">
                    <Col md={6} className="d-flex flex-column justify-content-center">
                        <p style={{ fontSize: '1.2rem', color: '#333' }}>
                            Achieve your fitness goals with a structured and easy-to-follow workout planner. Track your progress, stay motivated, and push yourself to new limits.
                        </p>
                    </Col>
                    <Col md={6} className="d-flex flex-column justify-content-center">
                        <p style={{ fontSize: '1.2rem', color: '#333' }}>
                            Whether you’re a beginner or a pro, our app lets you add exercises, monitor your daily activities, and view your achievements.
                        </p>
                    </Col>
                </Row>

                <div className="mb-4" style={{ fontSize: '1rem', color: '#555' }}>
                    <ul className="text-left" style={{ listStyleType: 'none', paddingLeft: 0 }}>
                        <li>✔️ Easily add and manage your daily workouts.</li>
                        <li>✔️ Track your progress with a visual progress bar.</li>
                        <li>✔️ Mark exercises as complete and reset weekly.</li>
                        <li>✔️ Stay consistent and achieve your fitness goals!</li>
                    </ul>
                </div>
            </Card>
        </Container>
    );
}
