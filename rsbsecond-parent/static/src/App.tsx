import * as React from 'react';
import { Button } from 'antd'; //引入了ant design的按钮
import { Icon } from '@ant-design/compatible'; //引入了ant design的图标
import './App.css';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button type="primary">AntDesgin按钮</Button>
        <Icon style={{color:'green',fontSize:'24px',marginLeft:'50px'}} type="check-circle-o" />
      </div>
    );
  }
}

export default App;