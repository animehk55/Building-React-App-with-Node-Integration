import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Header = () => <h2>hi Header you are too cute </h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>Hello Survey how are u</h2>;
const Landing = () => <h2>Hello landinging</h2>
const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                    <Route exact path="/" component={Landing} />        { /** exact={true}  or exact both will ork same */}
                    <Route exact={true} path="/survey" component={Dashboard} />
                    <Route path="/survey/new" component={SurveyNew} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;