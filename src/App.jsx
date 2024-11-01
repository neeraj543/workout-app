import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import HomePage from './pages/HomePage';
import WorkoutPage from './pages/WorkoutPage';
import WorkoutDescriptionPage from './pages/WorkoutDescriptionPage';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    const [currentPage, setCurrentPage] = useState('home');

    return (
        <div>
            <Tabs activeKey={currentPage} onSelect={(page) => setCurrentPage(page)} className="mb-3">
                <Tab eventKey="home" title="Home">
                    {currentPage === 'home' && <HomePage />}
                </Tab>

                <Tab eventKey="description" title="Workout Descriptions">
                    {currentPage === 'description' && <WorkoutDescriptionPage />}
                </Tab>
                <Tab eventKey="workout" title="Workout Tracker">
                    {currentPage === 'workout' && <WorkoutPage />}
                </Tab>
            </Tabs>
        </div>
    );
}
