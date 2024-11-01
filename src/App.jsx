import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import HomePage from './pages/HomePage';
import WorkoutPage from './pages/WorkoutPage';
import 'normalize.css';                 // Import normalize.css for consistent styling
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS for styling

export default function App() {
    return (
        <div className="container mt-5">
            <Tabs defaultActiveKey="home" id="app-tabs" className="mb-3">
                <Tab eventKey="home" title="Home">
                    <HomePage />
                </Tab>
                <Tab eventKey="workout" title="Workout">
                    <WorkoutPage />
                </Tab>
            </Tabs>
        </div>
    );
}
