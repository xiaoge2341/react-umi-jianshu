import axios from 'axios'

export default {
  state: { 
    focused:false,
    list:null,
    mouseIn:false,
    totalPage:1,
    page:1
  },
  reducers: {
    'focused' (state, action) {
      
      return {
        focused:true,
        list:action.list,
        mouseIn:true,
        page:1,
        totalPage:action.totalPage,
      }
    },
    'notFocused' (state, action) {
      return {
        focused:false,
        list:state.list,
        mouseIn:true,
        page:1,
        totalPage:state.totalPage,
      }
    },
    'mouseEnter' (state, action) {
      // console.log('action',action)
      // console.log('state',state)

      return {
        mouseIn: true,
        list: state.list,
        focused: false,
        totalPage:state.totalPage,
        page:1
      }
    },
    'mouseOut' (state, action) {
      return {
        mouseIn: false,
        list: null,
        focused: false
      }
    },
    'pageChange' (state,action) {
      // console.log(state)
      //控制页码page的变化，因为从1开始计数，所以总页数要-1
      if(state.page>state.totalPage-1) {
        return {
          list:state.list,
          mouseIn: true,
          page:1,
          totalPage:state.totalPage,
        }
      }else{
        return {
          list:state.list,
          mouseIn: true,
          totalPage:state.totalPage,
          page:state.page+1
        }
      }
    }
  },
  effects: {
    * headerSearch({payload}, {call,put,take,takeEvery}){
      const lists = yield call(axios.get,'/api/list')

      const totalPage =yield Math.ceil(lists.data.data.length/10)
      yield put({type:'headers/focused',list:lists,totalPage:totalPage})
      yield take({type:'headers/mouseEnter',list:lists,totalPage:totalPage})
      yield take({type:'headers/notFocused',list:lists,totalPage:totalPage})
      yield take({type:'headers/pageChange',totalPage:totalPage,list:lists})
    },

    // * mouseChange({payload}, {call, put}) {
    //   const lists = yield call(axios.get,'/api/list')
    //   const totalPage =yield Math.ceil(lists.data.data.length/10)
    //   yield put({type:'headers/mouseEnter',list:lists,totalPage:totalPage})
    // },

    // * listChange({payload}, {call, put}) {
    //   const lists = yield call(axios.get,'/api/list')
    //   const totalPage =yield Math.ceil(lists.data.data.length/10)
    //   yield put({type:'headers/pageChange',totalPage:totalPage,list:lists})
    // }
  }
}