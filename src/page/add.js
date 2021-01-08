import React from 'react'
import { inject , observer } from 'mobx-react'
import Input  from '@alifd/next/lib/input/input'

@inject('listStroe')
@observer
class Add extends React.Component{
  enterDown = (e)=>{
    if(e.code === 'Enter'){
      this.props.enterChange(e.target.value)
    }
   
  }
  render(){
    return <Input
    hasClear
    defaultValue="clear by click"
    size="large"
    aria-label="input with config of hasClear"
    onKeyDown={this.enterDown} ></Input>
  }
}

export default Add