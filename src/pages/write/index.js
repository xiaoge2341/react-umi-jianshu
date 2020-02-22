import React, { Component } from 'react'
import { connect } from 'dva'
import {Link} from 'umi'
import router from 'umi/router'
import styles from './style.less'
 class write extends Component {
  render() {
    let {login} = this.props
    console.log(localStorage.getItem('login'))
    
    return (
      <div className = {styles.write}>
        {
          localStorage.getItem('login') ? 
          <div><Link to = '/'>回首页</Link>write页面</div> : 
          <div>请登录

            {
              router.push('/'),alert('请登录')
            }
          </div>
        
        }
        
      </div>
    )
    
  }
  componentWillUpdate() {
    
    
  }
}


const mapState = (state) => {
  // console.log(state)
  return {
    login:state.signIn.login
  }
}

export default connect(mapState)(write)