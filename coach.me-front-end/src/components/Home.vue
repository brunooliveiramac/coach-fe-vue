<template>
    <div>

      <div class="row">

        <input class="col-10 filter" type="search"/>

      </div>

      <div>  
          <card v-for="coach in getCoachList">
          </card> 
      </div>

      <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">
            <span slot="no-more"></span>
            <span slot="no-results"></span>
            <span slot="spinner">
                <spinner></spinner>
              </span>
      </infinite-loading>

    </div>
</template>

<script>
  
  import {mapActions, mapGetters} from 'vuex';

  import InfiniteLoading from 'vue-infinite-loading'
  import Spinner from '../components/shared/Spinner'
  import Card from '../components/shared/Card'

  export default {
      components: {
        'infinite-loading': InfiniteLoading,
        'spinner': Spinner,
        'card' : Card
      },
      computed: {
        ...mapGetters({
            getCoachList: 'getCoachList'
        })
      },
      methods: {
        ...mapActions([
            'getCoachesService'
        ]),
        onInfinite() {
            this.getCoachesService()
        }
      }
  }
</script>


<style>
 .filter {
    display: block;
    border: solid 2px #ddd;
    height: 40px;
    font-size: 18px;
    padding: 5px;
    margin: 50px auto;
  }
  .card-section {
    text-align: center;
    margin-bottom: 15px;
  }
</style>

