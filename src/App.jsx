// src/App.jsx

import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import HomePage from './pages/HomePage';
import WorkoutPage from './pages/WorkoutPage';
import OverviewPage from './pages/OverviewPage';
import workoutsData from './data/data';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WorkoutDescriptionPage from "./pages/WorkoutDescriptionPage.jsx";

export default function App() {
    const [workouts, setWorkouts] = useState(workoutsData);
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
                    {currentPage === 'workout' && <WorkoutPage workouts={workouts} setWorkouts={setWorkouts} />}
                </Tab>
                <Tab eventKey="overview" title="Overview">
                    {currentPage === 'overview' && <OverviewPage workouts={workouts} />}
                </Tab>
            </Tabs>
        </div>
    );
}
