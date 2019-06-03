import React, { Component } from 'react'
import { connect } from 'dva'
import { Typography } from 'antd'
const { Paragraph } = Typography
// import Son from '../../components/Son'
 class Admin extends Component {
  constructor(props){
    super(props)
    this.state={
      title:'admin'
    }
    this.props.dispatch({
      type:"admin/getDate",
      payload:{
        page:1
      }
    })
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log(nextProps===this.props)
    return nextProps!==this.props
  }
  render() {
    return (
      <div >
       <div onClick={()=>this.click(12)}  ref='test' >  点击HMR，即模块热替换，在修改代码后不需要刷新整 个页面，方便开发时的调试</div>

        <Paragraph editable={{ onChange: this.onChange }}>{this.state.title}</Paragraph>

      </div>
    )
  }
  onChange=str=>{
    this.setState({
      title:'admin'
    })
  }
}
export default connect((admin,globle)=>({
  admin,globle
}))(Admin)