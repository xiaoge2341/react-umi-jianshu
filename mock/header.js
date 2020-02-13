import Mock from 'mockjs'
// module.exports = {'/api/list': Mock.mock({
//   'list|5-10': [{
//     'id|+1':1,
//     name:'@cname@city'
//   }]
// })
// }
export  default  {
  'GET /api/list' : Mock.mock({

    'data|5-10': [{
      name: '@cname',
      email: '@email',
      'value|1-100': 50,
      'type|0-2':1
    }]
  
  })
  
}
