import Axios from 'axios'

const coache = {
  getCoaches () {
    return Axios.get('/coaches')
  }
}

export default coache
