import React, { Component } from 'react'
import styles from './../index.less'
import { connect } from 'dva'
// @connect(mapStateToProps)

 class Topic extends Component {

  render() {
    let {topic} = this.props
    // console.log('topic props',topic)
    return (
      <div className = {styles.TopicWrapper}>
        {topic && topic.map(value => {
          return (
            
            <div className = {styles.TopicItem} key={value.id}>
            <img src={value.imgUrl} alt=""/>
            {value.title}
        </div>
          )
        })}
        {/* <div className = {styles.TopicItem}>
          <img src="//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png" alt=""/>
          社会热点
        </div> */}
        
        <div className = {styles.moreTopic}>
          
          更多热门专题&gt;
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  // console.log(state)
  return {
    topic : state.home.topic
  }
}
export default connect(mapStateToProps)(Topic)