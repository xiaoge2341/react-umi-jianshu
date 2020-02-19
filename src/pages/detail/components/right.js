import React, { Component } from 'react'
import styles from './../index.less'
import { connect } from 'dva'
 class right extends Component {
  render() {
    let {writer} = this.props.details
    let {userId} = this.props
    return (
      <div className={styles.detailRight}>
          <div className= {styles.ad}>
            广告
          </div>
          {
            writer.map((value,index) => {
              if(value.id === userId) {
                return (
                <aside className = {styles.writerWorks} key = {index}>
                    <img src={value.face} alt=""/>
                    <p className = {styles.writer}>
                      {value.name}
                      <img src="https://upload.jianshu.io/user_badge/ec7b4a53-cd02-46ad-b136-dfa3751cff1e" alt=""/>
                      <span>关注</span>
                    </p>
                    <p className = {styles.contentMessage}>
                      总资产1832(约170.83元)
                    </p>
                    <hr/>
                  <div className = {styles.works}>
                    <h3>这四件事，烂在肚子里也不要说出去，容易惹祸上身</h3>
                    <span>阅读 368</span>
                  </div>
                  <div className = {styles.works}>
                    <h3>这四件事，烂在肚子里也不要说出去，容易惹祸上身</h3>
                    <span>阅读 368</span>
                  </div>
                </aside>
                )
              }
              return true;
            })
          }
          

          <aside className = {styles.recommend}>
            <h3><span></span>推荐阅读</h3>
            <div className = {styles.recommendContent}>
              <a href="script:;">豆瓣9.2分，今年最牛逼的电影，没白等！</a>
              <p>阅读108,408</p>
            </div>
            <div className = {styles.recommendContent}>
              <a href="script:;">冬的守候</a>
              <p>阅读1626</p>
            </div>
          </aside>
        </div>
    )
  }
}
const mapStateToProps = (state) => {
  // console.log(state)
  return {
    details:state.details,
    userId:state.router.location.query.userId
  }
}
export default connect(mapStateToProps)(right)