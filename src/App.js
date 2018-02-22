import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LY from 'lvyii_storage'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resText: '',
      user: null,
      imagePath: ''
    }
  }
  
  sendReq = () => {
    console.log('sendReq')
    LY.Cloud.run('testHelloCloud').then((result) => {
      this.setState({resText: result})
    })
  }
  
  login = () => {
    console.log('login')
    LY.User.loginWithMobilePhone('13587369299', '321456').then((user) => {
      this.setState({user})
    })
  }
  
  uploadImg = (e) => {
    e.preventDefault()
    let target = e.target
    let file = target.files[0]
    console.log(file)
    let upfile = new LY.File(file.name, file)
    upfile.save().then((netFile) => {
      console.log('netFile', netFile)
      this.setState({imagePath: netFile.attributes.url})
    })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div onClick={this.sendReq}>request</div>
        <div>{this.state.resText}</div>
        <div onClick={this.login}>login</div>
        <div>{this.state.user ? this.state.user.username : ''}</div>
        <div>
          <img src={this.state.imagePath} />
          <input type="file" accept="image/*" onChange={this.uploadImg}/>
        </div>
      </div>
    );
  }
}

export default App;
