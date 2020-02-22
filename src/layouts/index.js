
import React, {Component} from 'react'
import { connect } from 'dva'
import Link from 'umi/link'
import styles from './index.less'
import Signin from '../pages/signIn/index'
import Signup from '../pages/signUp/index'
import Write from './../pages/write/index'
import router from 'umi/router'
import { GlobalstyleIcon } from './../assets/iconfont/iconfont.js'
// import SimpleLayout from './SimpleLayout'
import {
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
 

} from './style'

  
 class BasicLayout extends Component {
   render(){
    let {dispatch, focused, list, mouseIn, page, totalPage, headerTitle,headerWriter, location, navShow, login} = this.props
    // console.log(this.props)
    let userId = location.query.userId
   
    login = localStorage.getItem('login')

    //区分路由
    if(this.props.location.pathname === '/sign_in') {
      return <Signin></Signin>
    }else if(this.props.location.pathname === '/sign_up') {
      return <Signup></Signup>
    }else if(this.props.location.pathname === '/write') {
      return <Write></Write>
    }
    
    let navChange = navShow&&navShow ? styles.navChange : ''
    // console.log(navShow,navChange)
    const getListArea = () => {
      let data = list && list.data.data
      const pageList = []
      // console.log(data,list)
      if(focused || mouseIn) {
        let listNum = list && page<totalPage ? page*10 :data.length //如果list数量是23则前两次是page*10也就是0-10,10-20,第三次是data.length也就是20-23而不是20-30
        
        for(let i = (page-1)*10; i<listNum; i++) {
          data && pageList.push(
            <SearchInfoItem key = {data[i].name}>
                {data[i].name}
            </SearchInfoItem>
          )
        }

        const handlespin = () => {
          let originAngle = this.refs.spin.style.transform.replace(/[^0-9]/ig,' ')
          originAngle = originAngle ? parseInt(originAngle, 10) : '0';
          
          this.refs.spin.style.transform = 'rotate('+(originAngle+360)+'deg)'
        }

        return (
        <SearchInfo
          onMouseEnter = {()=>dispatch({type:'headers/mouseEnter'})}
          onMouseLeave = {()=>dispatch({type:'headers/mouseOut'})}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick = {()=>{
                dispatch({type:'headers/pageChange'});
                handlespin()
              }
              }
            >
              <i ref='spin' className='iconfont spin'>&#xe851;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <div>
            {pageList}
          </div>
        </SearchInfo>
        )
        
      }
    }

    return (
      <div>
        <GlobalstyleIcon />
        
      <header 
        className = {`${styles.header} ${navChange}`} 
      >
        <div className = {styles.HeaderWrapper}>
          <Logo href='/'></Logo>
            <Nav>
              <Link  to='/'>
                <NavItem className='left active'>首页</NavItem>
              </Link>
              <NavItem className='left'>下载App</NavItem>

              {
                login ? 
              <NavItem className='right'
                onClick = {()=>{
                  localStorage.removeItem('login')
                  dispatch({type:'signIn/signIn',login:false})
                  router.push('/')
                }}
              >退出</NavItem> : 
              <Link to = '/sign_in'><NavItem className='right'>登录</NavItem></Link>
              }
              
              

              <NavItem className='right'>
                <i className='iconfont'>&#xe636;</i>
              </NavItem>
              <SearchWrapper>
                  <NavSearch
                    placeholder='搜索'
                    className = {focused ? 'focused zoom' : ''}
                    onFocus = {()=>dispatch({type:'headers/headerSearch'})}
                    onBlur = {()=>dispatch({type:'headers/notFocused'})}
                  ></NavSearch>
                  <i 
                    className = {focused ? 'focused iconfont ' : 'iconfont zoom'}
                  >&#xe62b;</i>
                  {getListArea()}
              </SearchWrapper>
                          
            </Nav>
            <Addition>
              <Link to = '/sign_up'>
                <Button className='reg'>注册</Button>
              </Link>
              
              <Link to = '/write'>
                <Button className='writting '>
                  <i className='iconfont'>&#xe608; </i> 
                    写文章
                </Button>
              </Link>
                
            </Addition>
        </div>

        {
           headerTitle.map((value,index) => {
            // console.log(userId,value.id)
            if(userId === value.id) {
              return(
                <div className = {styles.DetailWraper} key={index}>
                  <div className = {styles.DetailTitle}>
                  {value.listTitle}
                  </div>

                 {/* 由于mock数据是topic,writer,list三部分，所以只能凑合这样遍历 */}

                  {
                    headerWriter.map((value,index) => {
                      if (userId === value.id) {
                        return (
                          <div className = {styles.DetailRight} key = {index}>
                            <img src={value.face} alt=""/>
                            <span>{value.name}</span>
                            <span className = {styles.attention}>关注</span>
                            <span className = {styles.admire}>赞赏支持</span>
                          </div>
                        )
                      }
                      return true;
                    })
                  }

                  
                </div>
              )
            }
            return true;
          })
        }
        
      </header>
        {/* detailWraper 详情页下滑显示 */}
        
        {this.props.children}

      </div>
    );
 }
}

const mapStateToProps = (state) => {
  // console.log('header state',state)
  return {
    focused:state.headers.focused,
    mouseIn:state.headers.mouseIn,
    list: state.headers.list,
    page: state.headers.page,
    totalPage:state.headers.totalPage,

    headerTitle: state.details.list, //下面这两是为了获取顶部导航的数据
    headerWriter: state.details.writer,

    //控制detail页鼠标滚轮上下滑的动作
    navShow: state.details.navShow,

    //控制登录按钮显示隐藏
    login: state.signIn.login
  }
}
export default connect(mapStateToProps)(BasicLayout);
