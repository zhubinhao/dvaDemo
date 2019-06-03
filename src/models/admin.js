import {RouteConfig} from '../utils/router';
import {getlist,comment} from '../services/admin'

export default {
    namespace: 'admin',
    state: {
        text:"this is the home model",
        routes:[],
        path:"212",
        activeKey1:'wosja',
        dateList:[]
    },
    subscriptions: {
      setup({dispatch,history}){
          history.listen(({pathname}) => {
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
        *change({payload},{ call,put}){
          yield put({type:'save1',payload:{activeKey1:111}})
        },
        *getDate({ payload }, { call,put }){
          const {data}= yield call(getlist,payload)
          yield put({type:'save',payload:{dateList:data.result.list}})
       },
       *setDate({ payload }, { call,put }){
          const {data}= yield call(comment,payload)
          console.log(data)
          // yield put({type:'save',payload:{dateList:data.result.list}})
       }
    },
  //用来保存更新state值 上面的put方法调用这里的方法
    reducers: {
        save(state,  { payload }) {
            return { ...state, ...payload };
          },
          save1(state,  { payload }) {
              return {  ...payload };
          },
          'delete'(state, { payload }) {
            return { ...state, ...payload }
        }
          
    },
  
  };
  