import React from 'react';
import {
    About,
    AdminQuestionCreate,
    AdminQuestions,
    Header,
    Questions,
    Register
} from './components';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from 'react-router-dom';
import './App.scss';
import { AdminRoute } from './routes';

export const App = () => {
    return (
        <Router basename="/react">
            <Header></Header>
            <div className="container">
                <Switch>
                    <Redirect exact from="/" to="/questions" />
                    <Route path="/register" component={Register} />
                    <Route path="/questions" component={Questions} />
                    <Route path="/about" component={About} />
                    <AdminRoute path="/admin/questions/create/:questionId?" component={AdminQuestionCreate} />
                    <AdminRoute path="/admin" component={AdminQuestions} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
