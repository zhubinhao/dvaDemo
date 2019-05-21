import {RouteConfig} from '../utils/router';

export default {

    namespace: 'indexPage',
    state: {
        text:"this is the home model",
        routes:[]
    },
  
    subscriptions: {
        setup({dispatch, history}){ // 订阅，可以监听服务器连接，键盘输入，路由，状态等的变化
        }
    },
  
    effects: {
        *getRouter({ payload }, { call,put }){
            let routes=RouteConfig[0].routes
            yield put({ type: 'save' , payload:{routes:routes} });
        }
    },
  //用来保存更新state值 上面的put方法调用这里的方法
    reducers: {
        save(state,  { payload }) {
            return { ...state, ...payload };
          },
    },
  
  };
  