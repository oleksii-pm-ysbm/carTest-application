import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from "redux-promise";
import logo from './logo.svg';

import rootReducer from './reducers';
import 'bootstrap/dist/css/bootstrap.css'

import './index.css';

import CarsList from './components/cars-list';
import CarDetail from './components/car-detail';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class App extends Component {
    render() {
        return (
    <Provider store={createStoreWithMiddleware(rootReducer, composeWithDevTools())}>
        <BrowserRouter>
            <div className="container py-4">
                <img src={logo} className="App-logo" alt="logo" />
                <Switch>
                    <Route path="/cars/:id" component={CarDetail}/>
                    <Route path="/cars" component={CarsList}/>
                    <Route path="/" component={CarsList}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
        );
    }
}

export default App;