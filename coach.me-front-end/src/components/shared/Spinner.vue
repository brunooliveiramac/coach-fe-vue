<template>
  <div class="loader"></div>
</template>

<style lang="scss">
  .loader,
  .loader:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }
  .loader {
    margin: 0 auto;
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    border-top: 1.1em solid rgb(63, 219, 227);
    border-right: 1.1em solid rgb(26, 177, 207);
    border-bottom: 1.1em solid rgb(38, 70, 195);
    border-left: 1.1em solid #2c70ff;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load8 1.1s infinite linear;
    animation: load8 1.1s infinite linear;
    &.small {
      border-width: 3px;
      width: 2em;
      height: 2em;
    }
    &.medium {
      border-width: 4px;
      width: 4em;
      height: 4em;
    }

  }
  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

</style>
<script>
  export default {
    name: 'spinner'
  }
</script>
