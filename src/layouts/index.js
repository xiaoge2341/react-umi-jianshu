import styles from './index.less';
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
     
    let {dispatch,focused,list,mouseIn} = this.props
    console.log(list && list.data.data)

    
    const getListArea = () => {
      let data = list && list.data.data
      // const changeList = (data) => {
      //   totalPage: 
      // }
      // console.log(list)
      if(focused || mouseIn) {
        return (
        <SearchInfo
          onMouseEnter = {()=>dispatch({type:'headers/mouseChange'})}
          onMouseLeave = {()=>dispatch({type:'headers/mouseOut'})}
          
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick = {()=>dispatch({type:'headers/headerSearch'})}
            >
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <div>
            {data && data.map((value,index) => {
              return (
              <SearchInfoItem key = {index}>
                {value.name}
              </SearchInfoItem>
              )
            })}
            
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
                    className = {focused ? 'focused' : ''}
                    onFocus = {()=>dispatch({type:'headers/headerSearch'})}
                    onBlur = {()=>dispatch({type:'headers/notFocused'})}
                  ></NavSearch>
                  <i 
                    className = {focused ? 'focused iconfont' : 'iconfont'}
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
  console.log('header state',state)
  return {
    focused:state.headers.focused,
    mouseIn:state.headers.mouseIn,
    list: state.headers.list
  }
}
export default connect(mapStateToProps)(BasicLayout);
