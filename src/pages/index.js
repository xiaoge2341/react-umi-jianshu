import React, { Component } from 'react'
// import axios from 'axios'
import styles from './index.less';
import Writer from './components/Writer'
import List from './components/List'
import Recommend from './components/Recommend'
import Topic from './components/Topic'
import { connect } from 'dva';

// import { formatMessage } from 'umi-plugin-locale';

class Home extends Component {
  constructor() {
    super();
    this.backTop = this.backTop.bind(this)
  }
  backTop(){
    window.scrollTo(0,0)
  }
  
  render() {
    let { backTop, } = this
    let {showBackTop} = this.props
    // console.log(showBackTop)
    return (
      <div className={styles.HomeWrapper}>
        
        <div className={styles.HomeLeft}>
          <img className={styles.banner_img} src="https://upload.jianshu.io/admin_banners/web_images/4894/23ecc55accf5c6a6c9910be966c125853d1f04a5.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
          <Topic />
          <List />
        </div>
        <div className={styles.HomeRight}>
          <Recommend />
          <Writer />
        </div>

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
      
    );
  }
  // componentDidMount(){
  //   // let {dispatch} = this.props
  //   axios.get('/api/home')
  //   .then((res)=>{
  //     const result = res.data.data
  //     this.props.changeHomeData (result) 
  //     // dispatch({type:'home/homeData'})
  //   })
  // }
}
const mapDispatchToProps = (dispatch) => {
  dispatch({type:'home/changeHomeData'})
  // changeHomeData(result){
  //   console.log(result)
  //   dispatch({type:'home/homeData',result:result})
  // }
  return {}
}
const mapStateToProps = (state) => {
  // console.log(state)
  return {
    showBackTop: state.home.showBackTop
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
