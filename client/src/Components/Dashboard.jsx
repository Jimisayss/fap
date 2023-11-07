import React from 'react';
import './dashboard.css';

const DashboardWidget = ({ title, children }) => (
    <div className="dashboard-widget">
        <div className="widget-header">{title}</div>
        <div className="widget-content">{children}</div>
    </div>
);

const Dashboard = () => {
    return (
        <div className="dashboard">
            <DashboardWidget title="Current Balance">
                {/* Balance chart or figure goes here */}
            </DashboardWidget>

            <DashboardWidget title="Recent Transactions">
                {/* Transaction list or summary goes here */}
            </DashboardWidget>

            <DashboardWidget title="Budget Summary">
                {/* Budget chart or summary goes here */}
            </DashboardWidget>

            <DashboardWidget title="Financial Goals">
                {/* Goals progress or status goes here */}
            </DashboardWidget>

            {/* Add more widgets as needed */}
        </div>
    );
};

export default Dashboard;
