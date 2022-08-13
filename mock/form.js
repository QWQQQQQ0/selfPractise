const Mock = require('mockjs')
const { randArr } = require('./utils');
const formType = require('./formType.config')
module.exports = [
  {
    url: '/vue-self/form/list',
    type: 'get',
    response: (config) => {
      return {
        code: 20000,
        totalCount: 2000,
        data: Mock.mock({
          'formList|10': [{
            'formId|+1': (config.query.page * config.query.limit - config.query.limit),
            'formName': '@word',
            'controlList|2-20': [() => randArr(formType)[parseInt(Math.random() * formType.length)]],
            'formImg': '@image',
            'handleMethod': 2,
            createData: `@datetime('yyyy-MM-dd A HH:mm:ss')`
          }]

        }).formList
      }
    }
  },
]