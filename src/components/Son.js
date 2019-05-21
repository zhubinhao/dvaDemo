import React from 'react';
class Son extends React.PureComponent {

  
  constructor(props){
    super(props)
    console.log(sessionStorage.getItem('HomeData'))
  }
  componentDidMount(){
    this.refs.children.title='hahah'

  }
  UNSAFE_componentWillReceiveProps (){
    console.log('在组件接收到新的props时执行。。')
  }
  child=(e,y)=>{
    // console.log(this.props)
    // this.props.refFn(e,y)
  }
    render() {
      return (
        <div>
          {this.props.title}
          <input ref='children' onClick={()=>this.props.onChange('1111')}/>
          <div ref={(div)=>this.child(div,111)} onClick={()=>this.props.onChange('1111')}>111</div>

        </div>
      );
    }
  }
  export default Son