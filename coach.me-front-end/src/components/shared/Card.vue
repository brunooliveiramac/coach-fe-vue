<template>
    <div class="row">

        <div class="col-sm-12">

            <div class="card-coach"> 
                    <div class="img-session">
                        <img  src="static/images/img_avatar.png" alt="Avatar" 
                        class="rounded col-sm-6" style="padding:10px">
                        <div style="display: flex;align-items: center;"> 
                            <span style="color:#00D48D; 
                            padding: 2px;
                            font-size: 16px;
                            letter-spacing: 1.1px;
                            font-weight: 700;
                            width: auto; 
                            margin: 0 auto">Free</span>
                        </div>    
                    </div>  
                    
  
                    <div class="card-item-session">

                        <div class="card-name">
                            <h3 style="margin-top: 10px">
                                <b>{{name}}</b>
                            </h3> 
                        </div>
                        <div class="evaluation-session">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>    
                        </div>    

                                <div style="padding: 15px;
                                            display: flex;
                                            flex-wrap: wrap; 
                                            text-align: center;
                                            justify-content: space-between;">
                                    <div class="small-card">
                                        <div class="card no-hover">
                                            <div class="card-body">
                                                <b style="color:#818688"> Carreira </b>
                                            </div>
                                        </div>
                                    </div>   
                                    <div class="small-card">
                                        <div class="card  no-hover">
                                            <div class="card-body">
                                            <b style="color:#818688"> Pessoal </b>
                                            </div>
                                        </div>
                                    </div>  
                                    <div class="small-card">
                                        <div class="card no-hover">
                                            <div class="card-body">
                                            <b style="color:#818688"> Acadêmico </b>
                                            </div>
                                        </div>
                                    </div> 
                                </div>

                                <div class="card-coach-description">
                                    <div>
                                        <p style="margin-left: 15px;  line-height: 1.8">  
                                            ellentesque vitae rhoncus metus. Vestibulum vitae dui ante. Donec gravida nulla vitae pulvinar pharetra. Etiam ut sollicitudin risus. Fusce viverra est eget ante porta, sit amet suscipit eros pharetra. Aliquam vitae ligula et augue ullamcorper congue vitae vel lectus. Phasellus commodo Donec gravida nulla vitae pulvinar pharetra. Etiam  Donec gravida nulla vitae pulvinar pharetra. Etiam  Donec gravida nulla vitae pulvinar pharetra. Etiam  Donec gravida nulla vitae pulvinar pharetra. Etiam  Donec gravida nulla vitae pulvinar pharetra. Etiam  Donec gravida nulla vitae pulvinar pharetra. Etiam  Donec gravida nulla vitae pulvinar pharetra. Etiam 
                                        </p> 
                                    </div>

                                    <div>
                                        <div>
                                            <p style="margin-left: 15px;margin-bottom: 15px; position: relative; color:#00aaf4; cursor: pointer">Leia mais</p> 
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
        name: "card",
        props: ['name']
    }
</script>

<style scoped>

    .card-body {
        padding: 0.5rem !important;
    }

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
      font-size: 22px;
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

    .card-name b {
        margin-left: 15px; 
        margin-right:10px; 
        float: left;
    }


    @media screen and (min-width: 740px) {
        .img-session{
            float: left;
        }
        .card-coach img{
            max-width: 190px;
            max-height: 190px;
            min-width: 190px;
            min-height: 190px;
        }
        
    }

   @media screen and (max-width: 739px) {
        .card-coach img{
            max-width: 190px;
            max-height: 190px;
            min-width: 190px;
            min-height: 190px;
            margin: 0 auto;
        }

        .evaluation-session {
            text-align: center;
        }

        .card-coach ul {
            text-align: center;
            width: 100%;
        }

        .card-item-session {
            display: block;
            margin: 0 auto;
            float: none;
            width: 90%;
        }

        .smartphone {
            margin: 0 auto;
        }
        .small-card {
            width: 100%;
            display: block;
        }

        .card-name {
            text-align: center;
        }

        .card-name b {
            float: none;
        }
}

</style>
