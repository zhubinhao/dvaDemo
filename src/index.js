import dva from 'dva';
import './index.scss';
import Promise from 'babel-polyfill';
import createHistory from 'history/createBrowserHistory';
// 1. Initialize
// const app = dva();
const app = dva({
    history: createHistory(),
    onError(err, dispatch) {
      console.error(err);
    },
});
if (!window.Promise) { 
  window.Promise = Promise;
}
window._app = app;
// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/globle').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
