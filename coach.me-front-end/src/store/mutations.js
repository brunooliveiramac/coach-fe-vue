export default {
  save(state, payload){
    const job = {
      name: payload.name
    }
    state.jobs.push(job);
  },
  coaches(state, payload){
    state.coaches = payload;
  }
}
