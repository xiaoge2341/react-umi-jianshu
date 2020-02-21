import axios from 'axios'

export default {
  state: {
    // userMsg:null,
    login:false
  },
  reducers: {
    'signIn' (state,action) {
      // console.log(action)
      return {
        login:action.login
      }
    }
  },
  effects: {
    * signInSaga ({payload,userInput},{put,call,take}) {
      const logins = yield call(axios,'/api/login')
      // yield console.log(logins,userInput)
      const islogin = yield logins.data.userName === userInput.sessionName.value && logins.data.pwd === userInput.sessionPwd.value
      // yield console.log(islogin)
      yield put({type:'signIn',login:islogin})
    }
  }
}