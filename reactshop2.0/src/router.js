import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
// import { PrivateRoute } from './routes/pravite'
import asyncComponent from './components/async/AsyncComponent.js'
// import IndexComponent from './pages/home/index/index'
const IndexComponent = asyncComponent(() => import('./pages/home/index/index'))
export default class RouterComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <React.Fragment>
                        <Switch>
                            <Route exact path="/" component={IndexComponent}></Route>
                        </Switch>
                    </React.Fragment>
                </Router>
            </React.Fragment>
        )
    }
}
