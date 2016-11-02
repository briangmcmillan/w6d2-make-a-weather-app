import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, Link, browserHistory} from 'react-router'
import Current from '../components/Current'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Current}>
            {/* <Route path="page" component={Page} />
            <Route path="editor" component={Editor} /> */}
        </Route>
    </Router>

    , document.getElementById('weather')
)
