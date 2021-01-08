// import logo from './logo.svg';
import React from 'react'
// import Button from '@alifd/next/lib/button'
import './App.css';
import { inject, observer } from 'mobx-react'
// import About from './src/list.js'
// import Test from './test'
import Add from './page/add'
import List1 from './page/list'
// import { BrowserRouter as Router, Route } from 'react-router-dom'


@inject('listStroe')
@observer
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      list : this.props.listStroe.list
    }
  }
  addItem = async (v)=>{
    await this.props.listStroe.add(v)
    this.setState({list: [...this.props.listStroe.list]})
  }
  delItem = (i)=>{
    console.log(i);
    this.props.listStroe.del(i)
    this.setState({list: [...this.props.listStroe.list]})
  }
  render() {
    const { list } = this.state
    return <div className="App">
      <header className="App-header">
        <Add enterChange={this.addItem}></Add>
        <List1 list={list} onDel={this.delItem}> </List1>

        {/* <Button type='primary' onClick={this.handleClick}>222</Button>
        <About /> */}
        {/* <Router>
          <Route path="about" component={About}></Route>
        </Router> */}
      </header>
    </div>

  }
}

export default App;
