import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store'
import  {Provider} from 'react-redux'
import Form from './Form'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Provider store ={store}><Form /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
