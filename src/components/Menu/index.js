import React, { Component } from 'react'
import {  Link } from 'dva/router';

import styles from './index.scss'

export default class index extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render() {
        const {routes}=this.props
        return (
            <div className={styles.menu}>
                <img src="" alt=""/>
                 <div>
                   {routes.map((res)=>(
                       <Link key={res.path} to={res.path} className={styles.item} >{res.name}</Link>
                   ))}
                 </div>
                <img src="" alt=""/>
            </div>
        )
    }
}
