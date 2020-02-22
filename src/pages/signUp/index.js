import React, { Component } from 'react'
// import { connect } from 'dva'
import styles from './style.less'
import {Link} from 'umi'
export default class sign_up extends Component {
  
  render() {
    return (
      <div className = {styles.login}>
        <div className= {styles.logo}>
          <Link to = '/'>
          <img src="//cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png" alt=""/>
          </Link>
        </div>
        <div className= {styles.main}>
          <h4 className = {styles.title}>
            <Link to='/sign_in' >登录</Link>
            <b>·</b>
            <Link to='/sign_up' className = {styles.active}>注册</Link>
          </h4>
          <div className = {styles.signInContainer}>
            <form id = {styles.newUser}>
              <div className = {styles.user_name}> 
                <i>i</i> <input type="text" placeholder = '你的昵称'/>
              </div>
              <div className = {styles.user_phone}> 
                <i>i</i> <input type="text" placeholder = '手机号'/>
              </div>
              <div className = {styles.user_pwd}> 
                <i>i</i> <input type="password" placeholder = '设置密码' autoComplete = 'true'/>
              </div>

              <button className = {styles.signUpButton}>注册</button>
              <p className = {styles.signUpMsg}>
                点击 "注册" ,即表示您同意并愿意遵守简书<br/>
                 <a href="script:;">用户协议</a> 和 <a href="script:;">隐私政策</a>
              </p>
            </form>

            {/* 更多登录方式 */}
            <div className= {styles.moreSignIn}>
              <h6>社交账号直接注册</h6>
              <ul>
                <li>微信</li>
                <li>QQ</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
