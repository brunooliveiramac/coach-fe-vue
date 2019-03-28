import Axios from 'axios'

const coache = {
  getCoaches () {
    return Axios.get('/coaches/all')
  },
  getCoachesFilter (payload) {
    return Axios.get('/coaches/filter',{
      params: {
        name: payload.name,
        mainSkills: payload.mainSkills
      }
    })
  }
}

export default coache
