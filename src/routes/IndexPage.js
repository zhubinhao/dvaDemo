import React,{Component} from 'react';
import { connect } from 'dva';
import {  Route ,Redirect} from 'dva/router';
import dynamic from 'dva/dynamic';
import store from 'store'

class IndexPage extends Component {
  constructor(props){
    super(props)
     this.props.dispatch({ type: 'indexPage/getRouter',payload:this.props })
    store.set("name","woshi")
  }
  render(){
    const {routes} = this.props.indexPage
    const app = window._app
    const {globle} = this.props
    return (
        <div>
           {routes.map((router)=>(
               <Route
               path={router.path}
               key={router.path}

               component={dynamic({
                app,
                models: ()=>router.model ,
                 component: () => router.component().then((res)=>{
                  if(router.isAuthority&&!globle.userInfo.id){
                     return ()=><Redirect to='/login' />
                  }
                  const Component = res.default||res
                  return props=> <Component {...props} app={app} />
                }),
               })}
             />
            ))}
        </div>
  );
}
}


export default connect(({indexPage,globle})=>({
  indexPage,globle
}))(IndexPage);
