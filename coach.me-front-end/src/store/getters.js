export default {
  getCoachList(state) {
    return state.coaches;
  }, 
  searching(state) {
    console.log('GET: ' + state.searching);
    return state.searching;
  }
}
