<script>
    import { goto } from "$app/navigation";
    import { callServerApi } from "../../services/DataService";

    let carsCustomer = {};

    function goToLogin(){
        goto('/cust-log')
    }

    function goToRegister(){
        goto('/cust-reg')
    }

    async function saveCarsCustomer(){
        const result = await callServerApi("saveCarsCustomer", carsCustomer, {});
        console.log(result)
    }
</script>

<style>
    .reg1{
        border-top: white;
        border-left: white;
        border-right: white;
        background-color: white;
        border-bottom: 4px solid #6d65cc;
        color: #6d65cc;
        width: 80%;
    }

    h2{
        color: #574ebd;
        text-align: center;
    }

    .button1{
        background-color: white;
        border: 1px solid white;
        width: 80%;
    }

    .button1:hover{
        border-bottom: 4px solid #6d65cc;
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
                <button on:click={goToLogin} class="button1">Login</button>
            </div>
            <div class="col-2">
                <button class="reg1" on:click={goToRegister}>Register</button>
            </div>
            <div class="col-3"></div>
        </div>
        <div class="row mt-5 pt-4">
            <div class="col-2"></div>
            <div class="col-9">
                <h2>Welcome to abloomtours!</h2>
            </div>
            <div class="col-1"></div>
        </div>
        <div class="row mt-4 ml">
            <div class="row">
                <div class="col-6">
                    <label class='form-label'>First name</label>
                    <input type="text" class="form-control" bind:value={carsCustomer.first_name}>
                </div>
                <div class="col-6">
                    <label class='form-label'>Last name</label>
                    <input type="text" class="form-control" bind:value={carsCustomer.last_name}>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <label class='form-label'>Email address</label>
                    <input type="email" class="form-control" bind:value={carsCustomer.email_id}>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <label class='form-label'>Mobile number</label>
                    <input type="email" class="form-control" bind:value={carsCustomer.phone}>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-12">
                    <button class="btn btn-primary form-control" on:click={saveCarsCustomer}>Submit</button>
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