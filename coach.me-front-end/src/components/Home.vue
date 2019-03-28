<template>
    <div>

      <div class="row">

        <input type="search" class="col-10 filter"
          placeholder="Type here to search..." 
          v-model="question" v-on:keyup.esc="cancel" />
        
        <a  href="#" v-if="question" v-on:click="cancel">
          <i class="fa fa-times"></i>
        </a>

      </div>

      <div style="padding: 8px; color: rgb(129, 134, 136)" 
           v-html="answer" class="h4"></div>

      <div> 
            <card v-for="coach in getCoachList" :name="coach.name"></card> 
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

      data: function (){
          return {
            question: '',
            answer: '',
            result: '',
            url: '/coaches/all'
          }
      },
      watch: {
        'question': function (newQuestion) {
          this.answer = '<i class="fa fa-pencil"></i>  Waiting...'
          this.getResult()
        }
      },
      methods: {
        ...mapActions([
            'getCoachesService',
            'getCoachesServiceFilter',
            'getCoachesServiceFilterSearchBar'
        ]),
        getResult: _.debounce(
          function () {
            if (this.question) {
              this.answer = '<i class="fa fa-search"></i> Searching...'
              var searchUrl = this.url + 'posts?&search=' + this.question
              this.getCoachesServiceFilterSearchBar({name:this.question, mainSkills:this.question})
            } else {
              this.answer = ''
              this.getCoachesServiceFilterSearchBar({name:this.question, mainSkills:this.question})
            }
          },
          // This is the number of milliseconds we wait for the user to stop typing.
          500
        ),
        cancel: function () {
          this.question = ''
        },
        onInfinite($state) {
          this.getCoachesServiceFilter({name:this.question, mainSkills:this.question, loading:$state})
        }
      },
      components: {
        'infinite-loading': InfiniteLoading,
        'spinner': Spinner,
        'card' : Card
      },
      computed: {
        ...mapGetters({
            getCoachList: 'getCoachList'
        })
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

