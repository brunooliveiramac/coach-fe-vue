<template>
    <div class="row">

        <div class="col-sm-12">

            <div class="card-coach">
                    <div class="img-session">
                        <img  src="static/images/img_avatar.png" alt="Avatar" 
                        class="rounded col-sm-6" style="padding:10px">
                    </div>    

                        <div>
                            <h3 style="margin-top: 10px">
                                <b style="margin-left: 15px; margin-right:10px; float: left">John</b>
                            </h3> 
                        </div>
                        <div class="evaluation-session">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>    
                        </div>    

                    <div class="card-item-session">

                                <div style="padding:5px; text-align:center">
                                    <div class="small-card">
                                        <div class="card no-hover">
                                            <div class="card-body">
                                            <b style="color:#818688"> Carrer </b>
                                            </div>
                                        </div>
                                    </div>   
                                    <div class="small-card">
                                        <div class="card  no-hover">
                                            <div class="card-body">
                                            <b style="color:#818688"> Personal </b>
                                            </div>
                                        </div>
                                    </div>  
                                    <div class="small-card">
                                        <div class="card no-hover">
                                            <div class="card-body">
                                            <b style="color:#818688"> Academic </b>
                                            </div>
                                        </div>
                                    </div> 
                                </div>

                                <div class="card-coach-description">
                                    <div>
                                        <p style="margin-left: 15px;  line-height: 1.8">  
                                            ellentesque vitae rhoncus metus. Vestibulum vitae dui ante. Donec gravida nulla vitae pulvinar pharetra. Etiam ut sollicitudin risus. Fusce viverra est eget ante porta, sit amet suscipit eros pharetra. Aliquam vitae ligula et augue ullamcorper congue vitae vel lectus. Phasellus commodo
                                        </p> 
                                    </div>

                                    <div>
                                        <div>
                                            <p style="margin-left: 15px;margin-bottom: 15px; position: relative; color:#00aaf4; cursor: pointer">Read more</p> 
                                        </div>
                                    </div>
                                </div>
                        </div>
            </div> 
        </div>
  
    </div>

</template>

<script>
    export default {
        name: "card"
    }
</script>

<style scoped>

    .card-item-session {
        float: left;
        width: calc(100% - 230px);
    }
    .evaluation-session {
        padding: 5px;
    }
    .small-card {
      width: 26%;
      display: inline-block;
    }
    .checked {
      color: orange;
      font-size: 27px;
    }

    .card {
      background-color: #F8F8F8 !important;
    }

    .no-hover:hover {
      box-shadow: none !important;
    }
    
    .card-coach {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0);
      border-radius: 4px 4px 4px 4px;
      border: 1px solid #ddd;
      transition: 0.3s;
      width: 100%;
      display: inline-block;
      margin: 5px;
      background: #ffff;
    }
    
    .cards-info{
        width: 100%
    }
    .item {
        display: inline;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0);
        border-radius: 4px 4px 4px 4px;
        border: 1px solid #ddd;
        transition: 0.3s;
        margin: 5px;
    }
  
    .card:hover {
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    .container {
      padding: 2px 16px;
    }

    .card-coach-name {
      padding: 3px;
    }
    .card-coach ul {
        float: left;
    }

    .card-info {
        display: inline;
    }


    @media screen and (min-width: 740px) {
        .card-coach img{
            float: left;
            max-width: 210px;
            max-height: 210px;
            min-width: 210px;
            min-height: 210px;
        }

    }

   @media screen and (max-width: 739px) {
        .card-coach img{
            max-width: 210px;
            max-height: 210px;
            min-width: 210px;
            min-height: 210px;
            margin: 0 auto;
        }

        .card-coach ul {
            text-align: center;
            width: 100%;
        }

        .card-item-session {
            display: block;
            margin: 0 auto;
            float: none;
        }

        .smartphone {
            margin: 0 auto;
        }
        .small-card {
            width: 100%;
            display: block;
        }
}

</style>
