import request from '@/utils/request'

export function searchUser(name) {
  return request.instance({
    url: '/vue-element-admin/search/user',
    method: 'get',
    params: { name }
  })
}

export function transactionList(query) {
  return request.instance({
    url: '/vue-element-admin/transaction/list',
    method: 'get',
    params: query
  })
}
