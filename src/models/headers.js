import axios from 'axios'
export default {
  state: { 
    focused:false,
    list:null
  },
  reducers: {
    'focused' (state, action) {
      return {
        focused:true,
        list:action.list
      }
    },
    'notFocused' (state, action) {
      return {
        focused:false,
        list:null
      }
    }
  },
  effects: {
    * headerSearch({payload},{call,put}){
      const lists = yield call(axios.get,'/api/list')
      yield put({type:'headers/focused',list:lists})
    }
  }
}