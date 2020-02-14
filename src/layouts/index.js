
import React, {Component} from 'react'
import { connect } from 'dva'
import { GlobalstyleIcon } from './../assets/iconfont/iconfont.js'
import {
  HeaderWrapper,
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
  SearchInfoItem
} from './style'
  
 class BasicLayout extends Component {
   render(){
    let {dispatch, focused, list, mouseIn, page, totalPage} = this.props
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
        <HeaderWrapper>
          <Logo href='/'></Logo>
            <Nav>
              <NavItem className='left active'>首页</NavItem>
              <NavItem className='left'>下载App</NavItem>
              <NavItem className='right'>登录</NavItem>
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
              <Button className='reg'>注册</Button>
                <Button className='writting '>
                  <i className='iconfont'>&#xe608; </i> 
                    写文章
                </Button>
            </Addition>
        </HeaderWrapper>
        
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
    totalPage:state.headers.totalPage
  }
}
export default connect(mapStateToProps)(BasicLayout);
