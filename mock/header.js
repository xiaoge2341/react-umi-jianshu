import Mock from 'mockjs'
// module.exports = {'/api/list': Mock.mock({
//   'list|5-10': [{
//     'id|+1':1,
//     name:'@cname@city'
//   }]
// })
// }
export  default  {
  '/api/list' : Mock.mock({

    'data|25-55': [{
      name: '@cname@city',
    }]
  
  })
  
}
