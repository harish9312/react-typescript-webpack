import { BasePage } from './components/BasePage';
import { HomePage } from './components/HomePage';
import { store } from './store';
import { Hello } from './components/Hello';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
    HashRouter,
    Route,
    Link
} from 'react-router-dom';
ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <div>
                <Route path="/" component={HomePage} />
                <Route path="/hello" component={Hello} />
            </div>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);
