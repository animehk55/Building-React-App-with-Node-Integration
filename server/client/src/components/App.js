import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './subComponents/Header';
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>Hello Survey how are u</h2>;
const Landing = () => <h2>Hello landinging</h2>

class App extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }
       render(){
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
    }
};

export default connect(null, actions)(App);