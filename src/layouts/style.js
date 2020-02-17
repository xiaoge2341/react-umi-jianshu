import styled from 'styled-components'
import logoPic from './../assets/logo.jpg'

export  const HeaderWrapper = styled.div`
    position: fixed;
    top:0;
    width:100%;
    background:#fff;
    height:58px;
    border-bottom: 1px solid #f0f0f0;
`;
export  const Logo = styled.a`
    position:absolute;
    display:block;
    top:0;
    left:0;
    height:56px;
    width:100px;
    background:url(${logoPic});
    background-size:contain;
`;
export const Nav = styled.div`
    position:relative;
    padding: 0 220px 0 100px;
    box-sizing: border-box;
    width:100%;
    height:100%;
    margin:0 auto;
   
`;

export const NavItem = styled.div`
    float: left;
    line-height: 56px;
    padding:0 15px;
    font-size:17px;
    color:#333;
    cursor:pointer;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color:#969696;
    }
    &.active {
        color: #ea6f5a;
    }
`;

//下面的.iconfont是子类选择器，&.focused是同级类
  //.iconfont用于SearchWrapper的子类，&.focused于.iconfont同属于Navsearch组件，表示有.iconfont的组件同时可以加上&.focused
export const SearchWrapper = styled.div`
    position: relative;
    float: left;
    
    .iconfont {
        position: absolute;
        right: 5px;
        bottom 5px;
        width: 30px;
        line-height: 30px;
        text-align: center;
        border-radius:15px;
        cursor:pointer;
        &.focused {
            background: #777;
            color:#fff;
        }
    }
`;

//第一句transition实现简单过渡效果
  //原理，onfocus,onblur时this.state.focused设置为true,false,
    //应用样式focused,在最下边
    // .attrs({
    //     placeholder:'搜索'
    // })
export const NavSearch = styled.input`
    transition: width .3s ease 0s;
    width: 160px;
    height: 38px;
    margin-top: 9px;
    padding: 0 30px 0 20px;
    margin-left: 20px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background:#eee;
    color:#777;
    font-size: 14px;
    &::placeholder {
        color:#999;
    }
    &.focused {
        width:240px;
    }
`
export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 56px;
    width:240px;
    background:#fff;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0,0,0,.2)
    
`;
export const SearchInfoTitle = styled.div`
    margin: 20px 0 15px 0;
    line-height: 20px;
    font-size: 15px;
    color:#969696;
    
`;
export const SearchInfoSwitch = styled.span`
    float: right;
    display:block;
    font-size: 14px;
    cursor:pointer;
    .spin{
        float:left;
        position:relative;
        display:block;
        margin: -1px -10px 0 0;
        transition: transform .5s ease 0s;
        transform-origin:center center;
        transform: rotate(0deg);
        
    }
`;
export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    padding: 0 5px;
    margin: 0 10px 10px 0;
    line-height: 20px;
    font-size: 12px;
    color: #333;
    border: 1px solid #ddd;
    border-radius: 2px;
`;

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
    
`;

export const Button = styled.div`
    float: left;
    margin-top: 9px;
    margin-right: 20px;
    padding:0 20px;
    line-height: 38px;
    border-radius: 19px;
    border:1px solid #ec6149;
    font-size: 14px;
    cursor:pointer;
    &.reg {
        color: #ec6149;
    }
    &.writting {
        
        color: #fff;
        background: #ec6149;
    }
`;



