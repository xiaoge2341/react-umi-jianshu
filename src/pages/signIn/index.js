import React, { Component } from 'react'
import { connect } from 'dva'
import styles from './style.less'
import {Link} from 'umi'
import router from 'umi/router'
 class sign_in extends Component {
  
  render() {
    let {  dispatch, } = this.props
      
    return (
      <div className = {styles.login}>
        <div className= {styles.logo}>
          <Link to = '/'>
          <img src="//cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png" alt=""/>
          </Link>
        </div>
        <div className= {styles.main}>
          <h4 className = {styles.title}>
            <Link to='sign_in' className = {styles.active}>登录</Link>
            <b>·</b>
            <Link to = 'sign_up'>注册</Link>
          </h4>
          <div className = {styles.signInContainer}>
            <form id = {styles.newsession}>
              <div className = {styles.sessionName}> 
                <i>i</i> <input ref='sessionName' type="text" placeholder = '手机号或邮箱'/>
              </div>
              <div className = {styles.sessionPwd}> 
                <i>i</i> <input ref='sessionPwd' type="password" placeholder = '密码' autoComplete='true'/>
              </div>
              {/* {console.log(this.refs)} */}
              <div className = {styles.remember}>
                <input type="checkbox" /> 记住我
              </div>
              <div className = {styles.forget}>
                <a href="script:;">登录遇到问题?</a>
              </div>
              
              <button className = {styles.signInButton}
                onClick = {() => {
                  dispatch({type:'signIn/signInSaga',userInput:this.refs})
                  // loginJudge()
                  // login && login ? router.push('/') : alert('登录失败')
                  
                }}
              >登录</button>
            </form>

            {/* 更多登录方式 */}
            <div className= {styles.moreSignIn}>
              <h6>社交账号登录</h6>
              <ul>
                <li>微博</li>
                <li>微信</li>
                <li>QQ</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // componentDidMount(login){
    
  // }
  componentWillUpdate({login}) {
    // console.log(login)
    localStorage.setItem('login',login)
    login ? router.push('/') : alert('登录失败')
  }
}

const mapState = (state) => {
  // console.log(state)
  return {
    login:state.signIn.login
  }
}

export default connect(mapState)(sign_in)