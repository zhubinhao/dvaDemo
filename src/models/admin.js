import {RouteConfig} from '../utils/router';
import {getlist} from '../services/admin'
export default {
    namespace: 'admins',
    state: {
        text:"this is the home model",
        routes:[],
        path:"212",
        dateList:[1]
    },
    subscriptions: {
      setup({dispatch,history}){
          history.listen((location) => {
            dispatch({
                type:"save",
                payload:{path:location}
            })
          });
      },  
    },
    effects: {
        *getRouter({ payload }, { call,put }){
            let routes=RouteConfig[0].routes[2].routes
            yield put({ type: 'save' , payload:{routes:routes} });
        },
        *watchAndRefreshList({ payload }, { call,put }){
            yield call()
        },
        *getDate({ payload }, { call,put }){
            const {data}= yield call(getlist,payload)
            yield put({type:'save',payload:{dateList:data.result.list}})
        }
    },
  //用来保存更新state值 上面的put方法调用这里的方法
    reducers: {
      save(state,  { payload }) {
        return { ...state, ...payload };
      },
    },
  
  };
  