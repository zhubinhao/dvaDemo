import {RouteConfig} from '../utils/router';

export default {

    namespace: 'indexPage',
    state: {
        routes:[]
    },
  
    subscriptions: {
        setup({dispatch, history}){ // 订阅，可以监听服务器连接，键盘输入，路由，状态等的变化
        }
    },
  
    effects: {
        *getRouter(_, { put }){
            let routes=RouteConfig[0].routes
            yield put({ type: 'save' , payload:{routes:routes} });
        }
    },
    reducers: {
        save(state,  { payload }) {
            return { ...state, ...payload };
          },
    },
  
  };
  