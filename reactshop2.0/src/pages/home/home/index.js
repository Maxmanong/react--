import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import asyncComponents from '../../../components/async/AsyncComponent'
import Css from '../../../assets/css/home/home/index.css'
import config from '../../../assets/js/conf/config'

const IndexComponent = asyncComponents(() => import('../index/index'))
const CartIndex = asyncComponents(() => import("../cart/index"))
const UserIndex = asyncComponents(() => import("../../user/index/index"))
export default class HomeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bHomeStyle: true,
            bCartStyle: false,
            bMystyle: false
        }
    }
    // componentWillMount() {
    //     this.handleNavStyle(this.props)
    // }

    componentDidMount() {}

    componentWillReceiveProps(newProps) {
        this.handleNavStyle(newProps)
    }
    // static getDerivedStateFromProps(oldVal, newVal) {}

    goPage(pUrl) {
        this.props.history.replace(config.path + pUrl)
    }
    handleNavStyle(props) {
        switch (props.location.pathname) {
            case config.path + 'home/index':
                this.setState({
                    bHomeStyle: true,
                    bCartStyle: false,
                    bMystyle: false
                })
                break;
                case config.path + 'home/cart':
                this.setState({
                    bHomeStyle: false,
                    bCartStyle: true,
                    bMystyle: false
                })
                break;
                case config.path + 'home/my':
                this.setState({
                    bHomeStyle: false,
                    bCartStyle: false,
                    bMystyle: true
                })
                break;
            default:
                break;
        }
    }
    render() {
        return (
            <div>
                <React.Fragment>
                    <Switch> 
                        <Route path={ config.path + "home/index" } component={ IndexComponent }></Route>
                        <Route path={ config.path + "home/cart" } component={ CartIndex }></Route>
                        <Route path={ config.path + "home/my" } component={ UserIndex }></Route>
                    </Switch>
                </React.Fragment>
                <div className={Css['bottom-nav']}>
                    <ul onClick={ this.goPage.bind(this, "home/index") }>
                        <li className={ this.state.bHomeStyle ? Css['home'] + " " + Css['active'] : Css['home'] }></li>
                        <li className={ this.state.bHomeStyle ? Css['text'] + " " + Css['active'] : Css['text'] }>首页</li>
                    </ul>
                    <ul onClick={ this.goPage.bind(this, "home/cart") }>
                        <li className={ this.state.bCartStyle ? Css['cart'] + " " + Css['active'] : Css['cart'] }></li>
                        <li className={ this.state.bCartStyle ? Css['text'] + " " + Css['active'] : Css['text'] }>购物车</li>
                    </ul>
                    <ul onClick={ this.goPage.bind(this, "home/my") }>
                        <li className={ this.state.bMystyle ? Css['my'] + " " + Css['active'] : Css['my'] }></li>
                        <li className={ this.state.bMystyle ? Css['text'] + " " + Css['active'] : Css['text'] }>我的</li>
                    </ul>
                </div>
            </div>
        )
    }
}