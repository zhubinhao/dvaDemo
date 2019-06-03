import React, { Component } from 'react';
import {  Link } from 'dva/router';
import classnames from 'classnames';

import styles from './index.scss';

export default class index extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render() {
        const {routes,location}=this.props
        return (
            <div className={styles.menu}>
                <img src="" alt=""/>
                 <div>
                   {routes.map((res)=>(
                       <Link key={res.path} 
                            to={res.path} 
                            className={classnames(styles.item,{[styles.active]:res.path===location.pathname} )} 
                            >
                            {res.name}
                        </Link>
                   ))}
                 </div>
                <img src="" alt=""/>
            </div>
        )
    }
}
