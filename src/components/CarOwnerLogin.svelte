<script>
    import { goto } from "$app/navigation";

    function goToCLogin(){
        goto('/carownlog')
    }

    function goToCRegister(){
        goto('/carownreg')
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

    h4{
        color: #235204;
        text-align: center;
    }

    p{
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

</style>

<div class="row mt-5">
    <div class="col-1"></div>
    <div class="col-4">
        <img src="carown.jpeg" alt="">
    </div>
    <div class="col-6">
        <div class="row">
            <div class="col-2"></div>
            <div class="col-8">
                <h4>Welcome to abloomtours!</h4>
                <p>Car owner's login page</p>
            </div>
            <div class="col-2"></div>
        </div>
        <div class="row mt-3">
            <div class="col-3"></div>
            <div class="col-3">
                <button on:click={goToCRegister} class="button1">Register</button>
            </div>
            <div class="col-3">
                <button on:click={goToCLogin} class="log">Login</button>
            </div>
            <div class="col-3"></div>
        </div>
        <div class="row mt-5 pt-5 ml">
            <div class="row">
                <div class="col-2"></div>
                <div class="col-8">
                    <label class='form-label'>Mobile number</label>
                    <input type="email" class="form-control">
                </div>
                <div class="col-2"></div>
            </div>
            <div class="row mt-4">
                <div class="col-2"></div>
                <div class="col-8">
                    <button class="btn btn-primary form-control">Send OTP</button>
                </div>
                <div class="col-2"></div>
            </div>
            <div class="row mt-4">
                <div class="col-2"></div>
                <div class="col-8">
                    <hr>
                </div>
                <div class="col-2"></div>
            </div>
            <div class="row mt-4">
                <div class="col-2"></div>
                <div class="col-8">
                    <button class="btn form-control btn-light border"><i class="bi bi-google"></i>&nbsp; &nbsp; Continue with Google</button>
                </div>
                <div class="col-2"></div>
            </div>
            <div class="row mt-4">
                <div class="col-2"></div>
                <div class="col-8">
                    <button class="btn form-control btn-light border"><i class="bi bi-facebook"></i> &nbsp; &nbsp; Continue with Facebook</button>
                </div>
                <div class="col-2"></div>
            </div>
        </div>
    </div>
    <div class="col-1"></div>
</div>