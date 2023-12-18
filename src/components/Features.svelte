<style>
     .flex-w{
        display: flex;
        flex-wrap: wrap;
    }
    .flex1{
        display: flex;
        justify-content: center;
    }
    .mt1{
        margin-top: 65px;
    }
    .test{
        margin-top: 50px;
        background-color: white;
        margin-bottom: 50px;
        border-radius: 10px;
        box-shadow: 5px 5px 15px gainsboro;
    }
    .center{
        text-align: center;
    }
    button{
        background-color: #DCFF00;
        border-radius: 50px;
        width: 15%;
        padding: 10px;
        font-size: 20px;
    }
    .flex-l{
        display: flex;
        justify-content: right;
        align-items: center;
    }
    .flex-r{
        display: flex;
        justify-content: left;
        align-items: center;
    }
    button:hover{
        background-color: #aac403;
    }
    .highlight {
        font-weight: bolder;
        background: linear-gradient(104deg, rgba(130, 255, 173,0) 0.9%, rgba(130, 255, 173,1.25) 2.4%, rgba(130, 255, 173,0.5) 5.8%, rgba(130, 255, 173,0.1) 93%, rgba(130, 255, 173,0.7) 96%, rgba(130, 255, 1732,0) 98%), linear-gradient(183deg, rgba(130, 255, 173,0) 0%, rgba(130, 255, 173,0.3) 7.9%, rgba(130, 255, 173,0) 15%);
        padding: 0.6em 13.7px;
        -webkit-box-decoration-break: clone;
        margin: 0;
        text-align: center;
        border-radius: 7.5px;
        text-shadow: -12px 12px 9.8px rgba(130, 255, 173,0.7), 21px -18.1px 7.3px rgba(255, 255, 255,1), -18.1px -27.3px 30px rgba(255, 255, 255,1);
    }
    .bg{
        /* background-size: 50%; */
        background-color: #F5F5F5;
        background-image: url("bg.jpeg");
        background-repeat: no-repeat;
        /* background-image: url("bg1.jpeg");*/
        background-size: cover;
    }
</style>

<!-- <div class="row">
    <div class="col-2"></div>
    <div class="col-8 flex1">
        <h4>abloomtours following 3 working steps</h4>
        <div class="row">
            <div class="col-4 white-box"></div>
            <div class="col-4"></div>
            <div class="col-4 white-box"></div>
        </div>
    </div>
    <div class="col-2"></div>
</div> -->

<div class="row">
    <div class="col-1"></div>
    <div class="col-10">
        <img src="carrs.png" alt="" width="100%">
    </div>
    <div class="col-1"></div>
</div>

<div class="row mt1 bg">
    <div class="col-3 flex-l">
        <button class="btn"><i class="bi bi-arrow-left"></i></button>
    </div>
    <div class="col-6 p-5 test">
        <div class="row">
            <div class="col-4"></div>
            <div class="col-4">
                <h5 class="highlight"> What Our Client Says...</h5>
            </div>
            <div class="col-4"></div>
        </div>
        <div class="row">
            <div class="col-5"></div>
            <div class="col-2">
                <div class="flex1 mt-4">
                    <img src="man.png" alt="">
                </div>
            </div>
            <div class="col-5"></div>
        </div>
        <div class="row center mt-4">
            <h3>Rahul Bhatt</h3>
            <p>Pune, Maharashtra</p>
            <h4 class="mt-4"><i> Booked a car for a family trip <br>
                 which was very comfortable and in great condition <br>
                 Flattered with availability of well maintained cars. </i>
            </h4>
        </div>
    </div>
    <div class="col-3 flex-r">
        <button class="btn"><i class="bi bi-arrow-right"></i></button>
    </div>
</div>