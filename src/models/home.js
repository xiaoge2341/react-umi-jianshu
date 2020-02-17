import axios from 'axios'
import { throttle } from 'redux-saga/effects'
export default {
  state:{
    topic: [],
    list:[],
    writer: [],
    showBackTop:false
  },
  reducers: {
    'homeData' (state,action) {
      // console.log(action)
      return {
        topic: action.homeData.topic,
        list:action.homeData.list,
        writer: action.homeData.writer
      }
    },
    'listData' (state, action) {
      // console.log(state,action)
      return { //因为第一次加载页面时state已经通过ajax给state初始，所以state里存着首页数据
        topic: state.topic,
        list:state.list,
        writer: state.writer,
        addList:action.listAdd.list
      }
    },
    'showBackTop' (state, action) {
      // console.log('state', state)
      return { //因为第一次加载页面时state已经通过ajax给state初始，所以state里存着首页数据
        topic: state.topic,
        list:state.list,
        writer: state.writer,
        addList:state.addList,
        showBackTop:action.showBackTop
      }
    }
  },
  effects: {
    * changeHomeData({payload}, {put, take, call}) {
      const homeDatas = yield call(axios.get,'/api/home')
      // yield console.log('homeDatas',homeDatas)
      yield put({type:'homeData',homeData:homeDatas.data.data})
      
    },
    * addList({payload}, {put, take, call}) {
      const listAdd = yield call(axios.get,'/api/homeList')
      // yield console.log(listAdd)
      yield put({type:'listData',listAdd:listAdd.data})
    },
    * changeWriter ({payload}, {put, take, call}) {
      // const Writers = yield 
    }
  },
  subscriptions: {

    setup({dispatch,history}){
      window.onscroll = () => {
        // console.log(window.scrollY)
        
          if(window.scrollY > 200) {
            // @throttle
            dispatch({type:'showBackTop',showBackTop:true})
          } else {
            dispatch({type:'showBackTop',showBackTop:false})
          }
      }
       
    }
  }
  
}