import { asyncRoutes, constantRoutes } from '@/router'
/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
}

const state = {
  routes: [],
  addRoutes: [],
  selfRoute: false
}
function addHidd(list) {
  const returnList = []
  for (const i in list) {
    if (list[i]['hidden'] === false) {
      list[i]['hidden'] === false
    } else if (list[i]['hidden'] === true) {
      delete list[i]['hidden']
    } else {
      list[i]['hidden'] = true
    }
    returnList.push(list[i])
  }
  return returnList
}
// addHidd(constantRoutes)
// addHidd(asyncRoutes)
const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  },
  SHOW_ROUTES: (state, routes) => {
    // state.addRoutes = addHidd(state.addRoutes)
    state.routes = addHidd(state.routes)
    state.selfRoute = !state.selfRoute
    console.log(state, routes, 'change')
  }
}

const actions = {
  generateRoutes({ commit }, roles) {
    return new Promise(resolve => {
      let accessedRoutes
      if (roles.includes('admin')) {
        accessedRoutes = asyncRoutes || []
      } else {
        accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
      }
      commit('SET_ROUTES', accessedRoutes)
      commit('SHOW_ROUTES')
      resolve(accessedRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
