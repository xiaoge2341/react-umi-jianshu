import React, { Component } from 'react'
import styles from './../index.less'
import { connect } from 'dva'
import Link from 'umi/link'

 class List extends Component {
  render() {
    let {list, dispatch, addList} = this.props 
    // console.log(this.props)
    // console.log('addList',addList)
    // console.log('list', list)
    list = addList ? list.concat(addList) : list
    return (
    <div>
      {
        list.map((value,index) => {
          return (
            <Link key={index} to={"/detail?userId="+value.id}>
            <div className = {styles.ListItem} >
              <div className={styles.listleft}>
                <h3>{value.listTitle}</h3>
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
            </Link>
        )
        })
      }
      <a href = 'script:;' className = {styles.learnMore}
        onClick = {()=>dispatch({type:'home/addList'})}
      >阅读更多</a>
      
    </div>
    
    )
  }
}

const mapStateToProps = (state) => {
  // console.log('state', state)
  return {
    list:state.home.list,
    addList: state.home.addList
  }
};


export default connect(mapStateToProps)(List)