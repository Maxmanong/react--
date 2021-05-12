
import React from 'react'
import Css from '../../../assets/css/home/index/index.css'
export default class IndexComponent extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="app">
                    Home首页
                    <div className={Css['header']}>头部</div>
                </div>
            </React.Fragment>
        )
    }
}