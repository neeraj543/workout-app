// src/data.js

const workouts = [
    {
        day: "Monday",
        exercises: [
            { name: "Push-Ups", type: "Strength", reps: 15, sets: 3, completed: false },
            { name: "Running", type: "Cardio", duration: "30 mins", completed: true }
        ],
        completedExercises: 1 // Adjust based on completed items in exercises
    },
    {
        day: "Tuesday",
        exercises: [
            { name: "Squats", type: "Strength", reps: 20, sets: 3, completed: false },
            { name: "Plank", type: "Core", duration: "2 mins", completed: false }
        ],
        completedExercises: 0
    },
    {
        day: "Wednesday",
        exercises: [
            { name: "Lunges", type: "Strength", reps: 20, sets: 3, completed: true },
            { name: "Cycling", type: "Cardio", duration: "45 mins", completed: true }
        ],
        completedExercises: 2
    },
    {
        day: "Thursday",
        exercises: [],
        completedExercises: 0
    },
    {
        day: "Friday",
        exercises: [
            { name: "Bicep Curls", type: "Strength", reps: 12, sets: 4, completed: false },
            { name: "Jumping Jacks", type: "Cardio", duration: "10 mins", completed: true }
        ],
        completedExercises: 1
    },
    {
        day: "Saturday",
        exercises: [
            { name: "Deadlift", type: "Strength", reps: 10, sets: 3, completed: false }
        ],
        completedExercises: 0
    },
    {
        day: "Sunday",
        exercises: [
            { name: "Yoga", type: "Flexibility", duration: "30 mins", completed: true }
        ],
        completedExercises: 1
    }
];

export default workouts;
