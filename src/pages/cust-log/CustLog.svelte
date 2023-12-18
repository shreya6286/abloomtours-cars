<script>
    import { goto } from "$app/navigation";

    function goToLogin(){
        goto('/cust-log')
    }

    function goToRegister(){
        goto('/cust-reg')
    }
</script>

<style>
    .log1{
        border-top: white;
        border-left: white;
        border-right: white;
        background-color: white;
        border-bottom: 4px solid #03B3B7;
        color: #03B3B7;
        width: 90%;
    }

    h2{
        color: #008285;
        text-align: center;
    }

    .button1{
        background-color: white;
        border: 1px solid white;
        width: 90%;
    }

    .button1:hover{
        border-bottom: 4px solid #03B3B7;
    }

    .button1::after{
        border: none;
    }

    .ml{
        margin-left: 90px;
    }

</style>

<div class="row mt-5">
    <div class="col-1"></div>
    <div class="col-6">
        <img src="login.png" alt="" width="95%">
    </div>
    <div class="col-4">
        <div class="row mt-4">
            <div class="col-5"></div>
            <div class="col-2">
                <button class="log1" on:click={goToLogin}>Login</button>
            </div>
            <div class="col-2">
                <button on:click={goToRegister} class="button1">Register</button>
            </div>
            <div class="col-3"></div>
        </div>
        <div class="row mt-5 pt-5">
            <div class="col-2"></div>
            <div class="col-9">
                <h2>Welcome back!</h2>
            </div>
            <div class="col-1"></div>
        </div>
        <div class="row mt-4 ml">
            <div class="row">
                <div class="col-12">
                    <label class='form-label'>Mobile number</label>
                    <input type="email" class="form-control">
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-12">
                    <button class="btn btn-primary form-control">Send OTP</button>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-12">
                    <hr>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-12">
                    <button class="btn form-control btn-light border"><i class="bi bi-google"></i>&nbsp; &nbsp; Continue with Google</button>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-12">
                    <button class="btn form-control btn-light border"><i class="bi bi-facebook"></i> &nbsp; &nbsp; Continue with Facebook</button>
                </div>
            </div>
        </div>
    </div>
    <div class="col-1"></div>
</div>