import React, { Component } from 'react'
import styles from './index.less'
import { connect } from 'dva'
import Left from './components/left'
import Right from './components/right'
 class detail extends Component {
   constructor(){
     super()
     this.backTop = this.backTop.bind(this)
   }
  backTop(){
    window.scrollTo(0,0)
  }
  render() {
    // console.log(this.props)
    let {list,writer} = this.props.details
    let {showBackTop} = this.props
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
  // componentWillMount() {
  //   // let {dispatch} = this.props
    
  // }
}

const mapDispatchToProps = (dispatch) => {
  dispatch({type:'details/changeHomeData'})
  return {

  }
}
const mapStateToProps = (state) => {
  // console.log(state.router.location.query.userId)
  
  return {
    details:state.details,
    showBackTop: state.home.showBackTop
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(detail)