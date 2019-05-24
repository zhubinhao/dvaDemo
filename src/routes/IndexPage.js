import React, { Component } from 'react';
import { connect } from 'dva';
import { Route, Redirect } from 'dva/router';
import dynamic from 'dva/dynamic';
import Menu from '../components/Menu'
import Right from '../components/Right'
import styles from './IndexPage.scss'
class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.props.dispatch({
      type: 'indexPage/getRouter',
    })
  }

  render() {
    const { routes } = this.props.indexPage
    const app = window._app
    return (
      <div className={styles.indexPage}>
        <Menu routes={routes} {...this.props} />
        <div className={styles.box}>
          <div className={styles.content}>
            {routes.map((router) => (
              <Route
                path={router.path}
                key={router.path}
                component={dynamic({
                  app,
                  models: () => router.model,
                  component: () => router.component()
                })}
              />
            ))}
            <Redirect to='/admin' />
          </div>
            <Right className={styles.right}/>

        </div>

      </div>
    );
  }
}


export default connect(({ indexPage }) => ({
  indexPage
}))(IndexPage);
