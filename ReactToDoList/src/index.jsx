import React from 'react'
import {Main} from './components/Main'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import { HashRouter } from "react-router-dom"
import './index.html'
import Obj from 'Obj'

console.log('Obj', Obj)

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Main/>
        </HashRouter>
    </Provider>,document.getElementById("root")
)