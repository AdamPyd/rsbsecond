import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import Login from './component/test/Login';
import { Router, Route } from 'react-router-dom';
import history from './router/history';
import requestConfig from './router/axiosRequestConfig'
import utils from './router/axiosUtil'

// import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './index.css';

class Model extends React.Component {
//   constructor(props: any) {
//     super(props);
//   }

  componentDidMount() {
    const loginStateConfig = requestConfig.loginStateConfig;
    const config = {
      param: { t: new Date().getTime() },
      callback: (response: any) => {
        if (response.data.code === 0) {
          history.push('/home');
        } else {
          history.push('/');
        }
      }
    }
    const finalConfig = { ...loginStateConfig, ...config };
    utils.axiosMethod(finalConfig);
  }

  render() {
    return (
      <div style={{ height: '100%' }}>
        <Route exact={true} path="/home" component={App} />
      </div>
    )
  }
}

ReactDOM.render(
  <Router history={history}>
      <App />
      <Model />
    </Router>,
  document.getElementById('root') as HTMLElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
