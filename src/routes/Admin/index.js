import React, { Component } from 'react'
import { connect } from 'dva'
// import Son from '../../components/Son'
 class Admin extends Component {
  constructor(props){
    super(props)
    this.state={
      title:'admin'
    }
    this.props.dispatch({
      type:"about/getDate",
      payload:{
        page:1
      }
    })
  }
  UNSAFE_componentWillMount(){
    // console.log('在组件DOM树渲染前调用。当进入这个组件时执行。')
  }
  componentDidMount(){
    // console.log('在组件DOM第一次渲染结束之后执行。')
    sessionStorage.setItem('HomeData',this.state.title)
    // console.log(this.textDiv)
  }
 
  onChange=(e)=>{
    
  }
  textDiv=(e,y)=>{
    // console.log(this.refs,y)
    // e.title = y
  }
  render() {
    return (
      <div >
       {this.state.title}
       <div onClick={()=>this.click(12)}  ref={()=>this.textDiv} >  点击HMR，即模块热替换，在修改代码后不需要刷新整 个页面，方便开发时的调试</div>
      </div>
    )
  }

  UNSAFE_componentWillReceiveProps (){
    // console.log('在组件接收到新的props时执行。。')
  }
  UNSAFE_componentWillUpdate (){
    // console.log('在组件接收到新的props或者state但还没有render时被调用。')
  }
  componentDidUpdate(){
    // console.log('在组件完成更新后执行，比如执行this.setState()之后，组件进行刷新。')
  }
  shouldComponentUpdate(nextProps,nextState){
     return nextState.title!==this.state.title
  }
  click(e){
    this.setState({
      title:1111
    })

  }
}
export default connect((about,globle)=>({
  about,globle
}))(Admin)