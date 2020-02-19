import axios from 'axios'

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
  },
  effects: {
    * changeHomeData({payload}, {put, take, call}) {
      const homeDatas = yield call(axios.get,'/api/home')
      // yield console.log('homeDatas',homeDatas)
      yield put({type:'homeData',homeData:homeDatas.data.data})
      
    },
    
  },
  subscriptions: {

  }
  
}