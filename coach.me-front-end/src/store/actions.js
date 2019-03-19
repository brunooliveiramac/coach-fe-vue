import coacheService from '../api/coache'


export default {
  save({ commit }, payload) {
    //HTTP CALLS, ASSYNC CODE
    //COMMIT WHEN PROMISSE FINISHES
    commit('save', payload);
  },
  getCoachesService: function ({ commit, dispatch, state }) {
    return coacheService.getCoaches().then((response) => {
      let coaches = response.data
      console.log('Call', coaches)
      commit('coaches', coaches)
    }).catch(() => {
      console.log('Error')
    })
  }

}
