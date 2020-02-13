import Mock from 'mockjs'
module.exports = {'/api/list': Mock.mock({
  'list|1-10': [{
    'id|+1':1,
    name:'@cname@city'
  }]
})
}
