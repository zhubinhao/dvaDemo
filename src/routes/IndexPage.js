import React,{Component} from 'react';
import { connect } from 'dva';
import {  Route ,Redirect ,Switch} from 'dva/router';
import dynamic from 'dva/dynamic';
import Menu from '../components/Menu'
class IndexPage extends Component {
  constructor(props){
    super(props)
    this.state={}
    this.props.dispatch({
      type:'indexPage/getRouter',
    })
  }
  
  render(){
    const {routes} = this.props.indexPage
    const app = window._app
    return (
        <div>
          <Switch>
            <Menu routes={routes}/>
            {routes.map((router)=>(
                <Route
                path={router.path}
                key={router.path}
                component={dynamic({
                  app,
                  models: ()=>router.model ,
                  component: () => router.component()
                })}
              />
              ))}
              <Redirect to='/admin' />
           </Switch>
        </div>
  );
}
}


export default connect(({indexPage})=>({
  indexPage
}))(IndexPage);
