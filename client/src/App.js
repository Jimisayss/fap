import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Dashboard from './Components/Dashboard';
import CurrentBalance from './Components/CurrentBalance';
import RecentTransactions from './Components/RecentTransactions';
// ... import other components

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/current-balance" element={<CurrentBalance />} />
                <Route path="/recent-transactions" element={<RecentTransactions />} />
                {/* Define routes for other components */}
            </Routes>
        </Router>
    );
}

export default App;
