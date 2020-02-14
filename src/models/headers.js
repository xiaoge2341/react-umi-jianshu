import axios from 'axios'

export default {
  state: { 
    focused:false,
    list:null,
    mouseIn:false,

  },
  reducers: {
    'focused' (state, action) {
      return {
        focused:true,
        list:action.list,
        mouseIn:true,
      }
    },
    'notFocused' (state, action) {
      return {
        focused:false,
        list:action.list,
        mouseIn:false
      }
    },
    'mouseEnter' (state, action) {
      return {
        mouseIn: true,
        list: action.list,
        focused: false,
      }
    },
    'mouseOut' (state, action) {
      return {
        mouseIn: false,
        list: null,
        focused: false
      }
    }
  },
  effects: {
    * headerSearch({payload}, {call,put,take}){
      const lists = yield call(axios.get,'/api/list')
      yield console.log('lists',lists)
      yield put({type:'headers/focused',list:lists})
      
      
    },
    * mouseChange({payload}, {call, put}) {
      const lists = yield call(axios.get,'/api/list')
      yield put({type:'headers/mouseEnter',list:lists})
    }
  }
}