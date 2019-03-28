import coacheService from '../api/coache'

export default {

  save({ commit }, payload) {
    //HTTP CALLS, ASSYNC CODE
    //COMMIT WHEN PROMISSE FINISHES
    commit('save', payload);
  },

  getCoachesServiceFilter: function ({ commit, dispatch, state }, payload) {
      console.log('Action')
      return coacheService.getCoachesFilter(payload).then((response) => {
        if (response.data.length) {
          let coaches = response.data
          let oldList = state.coaches;
          oldList.push(...coaches);
          commit('coaches', oldList);
          payload.loading.loaded();
        } else {
          payload.loading.complete();
        }
    }).catch((err) => {
      console.log(err);
    })
  },

  getCoachesServiceFilterSearchBar: function ({ commit, dispatch, state }, payload) {
    console.log('Action')
    return coacheService.getCoachesFilter(payload).then((response) => {
        let coaches = response.data
        commit('coaches', coaches);
  }).catch((err) => {
    console.log(err);
  })
}
}
