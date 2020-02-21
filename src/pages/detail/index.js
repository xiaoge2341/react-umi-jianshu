import React, { Component } from 'react'
import styles from './index.less'
import { connect } from 'dva'
import Left from './components/left'
import Right from './components/right'



 class detail extends Component {
   constructor(props){
     super(props)
     this.backTop = this.backTop.bind(this)
      // console.log(props)
   }
  
  backTop(){
    window.scrollTo(0,0)
  }
  
  render() {
    // console.log(this.props)
    let {list,writer} = this.props.details
    let {showBackTop,} = this.props
    let {backTop} = this
    // console.log(list && writer == '')

    return (
      <div>
        {
          list && writer != '' ? 
          <div className={styles.detailPage}><Left /><Right/></div> : ' '
        }
        {
          showBackTop ?
          <div ref='backTop' 
          className={styles.backTop}
          onClick = {backTop}
          >
            回顶部
          </div> : ''
        }
      </div>
    )
  }
}

//注意！！！
  // mapDispatchToProps使用了dispatch之后，上面的render失去dispatch
const mapDispatchToProps = (dispatch,{history}) => { 
  window.onmousewheel = (e) => {
    console.log('detail',history)
    if(e.deltaY > 0 && history.location.pathname === '/detail') {
      //应用类，把作者信息换到顶部导航
      dispatch({type:'details/changeNav',NavShow:true})
    } else {
      // 取消类,把搜索导航显示
      dispatch({type:'details/changeNav',NavShow:false})
    }
  }
  // console.log(dispatch)
  dispatch({type:'details/changeHomeData',payload:{id:1,name:'go'}})
  return {
    
  }
}

const mapStateToProps = (state) => {
  // console.log(state)
  // console.log(state.router.location.query.userId)
  return {
    details:state.details,
    showBackTop: state.home.showBackTop
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(detail)