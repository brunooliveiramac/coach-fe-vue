export default {
  save(state, payload){
    const coache = {
      name: payload.name
    }
    state.coaches.push(coache);
  },
  coaches(state, payload){
    state.coaches = payload;
  },
  searching(state, payload){
    console.log(payload);
    state.searching = payload;
  }
}
