import axios from 'axios'

export default {
  state:{
    topic: [],
    list:[],
    writer: [],
    showBackTop:false,
    NavShow:true
  },
  reducers: {
    'homeData' (state,action) {
      // console.log(action)
      return {
        topic: action.homeData.topic,
        list:action.homeData.list,
        writer: action.homeData.writer,
        NavShow:true
      }
    },
    'changeNav' (state,action) {
      // console.log(action)
      return {
        topic: state.topic,
        list: state.list,
        writer: state.writer,
        navShow:action.NavShow
      }
    }
  },
  effects: {
    * changeHomeData({payload}, {put, take, call},) {
      yield console.log(payload) //这里的payload可以给后端传递对应的userId,添加到下面请求地址后面
      const homeDatas = yield call(axios.get,'/api/home')
      // yield console.log('homeDatas',homeDatas)
      yield put({type:'homeData',homeData:homeDatas.data.data})
      
    },
    // * changeNav ({payload}, {put}) {
    //   yield
    // }
  },
  subscriptions: {
    
    
  }
  
}