import { BasePage } from './components/BasePage';
import { HomePage } from './components/HomePage';
import { store } from './store';
import { Hello } from './components/Hello';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route path="/" component={HomePage} />
                <Route path="/hello" component={Hello} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);
