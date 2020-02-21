import React, { Component } from 'react'
import styles from './../index.less'
import {connect} from 'dva'


 class left extends Component {
  render() {
    let {list,writer} = this.props.details
    let {userId} = this.props

    return (
         <div className={styles.detailLeft}>
          <h1 className={styles.title}>{list[0].listTitle}</h1>
          {
            writer.map((value,index) => {
              if(value.id === userId) {
                return (
                  <div className={styles.writerMessage} key={index}>
                    <img src= {value.face} alt=""/>
                    <p className = {styles.writer}>
                      {value.name}
                      <img src="https://upload.jianshu.io/user_badge/ec7b4a53-cd02-46ad-b136-dfa3751cff1e" alt=""/>
                      <span>关注</span>
                    </p>
                    <p className = {styles.contentMessage}>
                      <i className='iconfont'>&#xe609;17</i> 
                      2019.04.16 18:21:16 字数:{value.letter} 阅读:2962
                    </p>
                  </div>
                )
              }
              return true;
            })
          }
          
          {
            list.map((value,index) => {
              if(value.id === userId) {
                return (
                  <section key={index}>
                  <p>{value.listContent}</p>
                  <p>{value.listContent}</p>
                  <p>{value.listContent}</p>
                  <img src={value.listImg} alt=""/>
                  <p>
                    总结：
                  </p>
                  <p>有些男人，会对你说很多甜言蜜语，可他的心里却没有你的位置。所以说，再多的情话也是没有意义的，证明不了一个人的真心。</p>
                  <p>做出来的事情，是骗不了人的，可以看出他是真心爱你还是假装爱你。</p>
                  <p>误会，会影响两个人的感情，会拉远两个人的距离。多一些理解，少一些不信任，你们会越爱越深，会有一个好的结局。</p>
      1
                <div className = {styles.cl}>
                  <i></i> {value.listLike}人点赞> <i></i>
                </div>
                </section>
                )
              }
              return true;
            })
             
          }
         
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
export default connect(mapStateToProps)(left)