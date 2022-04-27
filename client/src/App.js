import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import ExerciseList from './components/Exercises/ExerciseList';
import EditExercise from './components/Exercises/EditExercise';
import CreateExercise from './components/Exercises/CreateExercise';
import CreateUser from './components/Users/CreateUser';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<ExerciseList />} />
                <Route path="/edit/:id" exact element={<EditExercise />} />
                <Route path="/create" exact element={<CreateExercise />} />
                <Route path="/user" exact element={<CreateUser />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
