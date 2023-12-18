<script>
    import { goto } from "$app/navigation";

    function goToDLogin(){
        goto('/driverlog')
    }

    function goToDRegister(){
        goto('/driverreg')
    }
</script>

<style>

    img{
        width: 100%;
    }

    .log{
        border-top: white;
        border-left: white;
        border-right: white;
        background-color: white;
        border-bottom: 4px solid #03B3B7;
        color: #03B3B7;
        width: 80%;
    }

    h2{
        color: #008285;
        text-align: center;
    }

    .button1{
        background-color: white;
        border: 1px solid white;
        width: 80%;
    }

    .button1:hover{
        border-bottom: 4px solid #03B3B7;
    }

    .button1::after{
        border: none;
    }

    p{
        text-align: center;
    }
</style>

<div class="row mt-5">
    <div class="col-1"></div>
    <div class="col-5">
        <img src="d1.jpeg" alt="">
    </div>
    <div class="col-5">
        <div class="row mt-5">
            <div class="col-3"></div>
            <div class="col-7">
                <h2>Welcome back!</h2>
                <p>Driver's login page</p>
            </div>
            <div class="col-2"></div>
        </div>
        <div class="row mt-5 pt-3 ml">
            <div class="col-4"></div>
            <div class="col-3">
                <button on:click={goToDRegister} class="button1">Register</button>
            </div>
            <div class="col-3">
                <button on:click={goToDLogin} class="log">Login</button>
            </div>
            <div class="col-2"></div>
        </div>
        <div class="row mt-5">
            <div class="row">
                <div class="col-2"></div>
                <div class="col-10">
                    <label class='form-label'>Mobile number</label>
                    <input type="email" class="form-control">
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-2"></div>
                <div class="col-10">
                    <button class="btn btn-primary form-control">Send OTP</button>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-2"></div>
                <div class="col-10">
                    <hr>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-2"></div>
                <div class="col-10">
                    <button class="btn form-control btn-light border"><i class="bi bi-google"></i>&nbsp; &nbsp; Continue with Google</button>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-2"></div>
                <div class="col-10">
                    <button class="btn form-control btn-light border"><i class="bi bi-facebook"></i> &nbsp; &nbsp; Continue with Facebook</button>
                </div>
            </div>
        </div>
    </div>
    <div class="col-1"></div>
</div>
