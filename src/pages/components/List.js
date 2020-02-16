import React, { Component } from 'react'
import styles from './../index.less'
import { connect } from 'dva'
// import axios from 'axios'
 class List extends Component {
  render() {
    let {list} = this.props 
    // console.log(list)
    return (
      
    <div>
      {
        list.map((value,index) => {
          return (
      <div className = {styles.ListItem} key={index}>
        <div className={styles.listleft}>
          <h3>{value.title}</h3>
          <p className={styles.listContent}>{value.listContent}</p>
          <p className={styles.listMeta}>
            <span className ='iconfont'>&#xe609; {value.listRace}</span>
            <a className={styles.nickName} href="script:;">{value.listNickName}</a>
            <a href="script:;" className = 'iconfont'>&#xe66d; {value.listComment}</a>
            <span className = 'iconfont'>&#xe66e; {value.listLike}</span>
          </p>
        </div>
        
        <img className={styles.List_Img} src={value.listImg} alt=""/>
      </div>
        )
        })
      }
      
    </div>
    
    )
  }
}

const mapStateToProps = (state) => {
  // console.log('state', state)
  return {
    list:state.home.list
  }
}
export default connect(mapStateToProps)(List)