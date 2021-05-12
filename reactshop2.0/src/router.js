import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
// import { PrivateRoute } from './routes/pravite'
import asyncComponent from './components/async/AsyncComponent.js'
// import IndexComponent from './pages/home/index/index'
import config from './assets/js/conf/config'

const HomeComponent = asyncComponent(() => import('./pages/home/home/index'))

console.log('config：', config);
export default class RouterComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <React.Fragment>
                        <Switch>
                            <Route path={ config.path + "home" } component={ HomeComponent }></Route>
                            <Redirect to={ config.path + "home/index" }></Redirect>
                        </Switch>
                    </React.Fragment>
                </Router>
            </React.Fragment>
        )
    }
}
