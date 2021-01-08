import React from 'react'
import { inject, observer } from 'mobx-react'
import { List, Box, Button, Divider } from '@alifd/next'
import './list.css'

@inject('listStroe')
@observer
class List1 extends React.Component {

  constructor() {
    super()
  }
  del = (i)=>{
    this.props.onDel(i)
  }
  render() {
    const list = this.props.list
    return <div style={{ width: 288 }} className='renderList'>
      <List
        size="small"
        header={<div>TODO List</div>}
        dataSource={list}
        renderItem={(item, i) => <List.Item key={i} title={item} extra={
          <Box direction="row" align="center" style={{ whiteSpace: 'nowrap', height: '100%', paddingLeft: 100 }}>
          <Button text type="primary">编辑</Button>
          <Divider direction="ver" />
          <Button text type="primary" onClick={()=>this.del(i)}>删除</Button>
        </Box>
        }></List.Item>}
      />
    </div>
  }
}

export default List1