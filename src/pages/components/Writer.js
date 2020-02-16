import React, { Component } from 'react'
import styles from './../index.less'
import { connect } from 'dva'
 class Writer extends Component {
  render() {
    let { writer } = this.props
    return (
      <div>
        <ul className = {styles.writer}>
          <span className= {styles.intrWriter}>推荐作者</span>
          <span className = {styles.changeWriter}>
            <i className='iconfont'>&#xe851;</i> 
          换一批</span>
          {
            writer.map(value => {
              return (
                <li key={value.id}>
                  <img src={value.face} alt=""/>
                  <div className={styles.writerMessage}>
                    <p className={styles.writerName}>
                      {value.name}
                    <span>+关注</span>
                    </p>
                    <p className = {styles.write}>写了{value.letter}字 · {value.like}喜欢</p>
                  </div>
                </li>
          )
            })
          }
          
        </ul>
        <div className={styles.writerMore}>查看全部 &gt;</div>
      </div>
    )
  }
}

const matStateToProps = (state) => {
  return {
    writer:state.home.writer
  }
}
export default connect(matStateToProps)(Writer)