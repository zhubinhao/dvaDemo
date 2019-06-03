import React, { Component } from 'react'
import { connect } from 'dva';

import {Link} from 'dva/router'
import styles from './index.scss'
 class index extends Component {
    render() {
        return (
            <div className={styles.error}>
                <span>页面被狗狗叼走啦～～～</span>
                <Link to='/'>去主页</Link>
            </div>
        )
    }
}

export default connect(({indexPage})=>({
    indexPage
}))(index)