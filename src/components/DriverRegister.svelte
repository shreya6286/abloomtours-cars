<script>
    import { goto } from "$app/navigation";
    import { callServerApi } from "../services/DataService";

    let index = 0;

    function goToDLogin(){
        goto('/driverlog')
    }

    function goToDRegister(){
        goto('/driverreg')
    }

    function onSubmit() {
        index = 1;
    }
</script>

<style>

    img{
        width: 100%;
    }

    .reg{
        border-top: white;
        border-left: white;
        border-right: white;
        background-color: white;
        border-bottom: 4px solid #6d65cc;
        color: #6d65cc;
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
        border-bottom: 4px solid #6d65cc;
    }

    .button1::after{
        border: none;
    }

</style>

<div class="row mt-5">
    <div class="col-1"></div>
    <div class="col-5">
        <img src="d1.jpeg" alt="">
    </div>
    <div class="col-5">
        <div class="row">
            <div class="col-2"></div>
            <div class="col-8">
                <h4>Welcome to abloomtours!</h4>
                <p>Driver's registration page</p>
            </div>
            <div class="col-2"></div>
        </div>
        {#if index === 0} 
        <div class="row mt-4 ml">
            <div class="col-3"></div>
            <div class="col-3">
                <button on:click={goToDRegister} class="reg">Register</button>
            </div>
            <div class="col-3">
                <button on:click={goToDLogin} class="button1">Login</button>
            </div>
            <div class="col-3"></div>
        </div>
        <div class="row mt-4 ml">
            <div class="row">
                <div class="col-1"></div>
                <div class="col-5">
                    <label class='form-label'>First name</label>
                    <input type="text" class="form-control">
                </div>
                <div class="col-5">
                    <label class='form-label'>Last name</label>
                    <input type="text" class="form-control">
                </div>
                <div class="col-1"></div>
            </div>
            <div class="row">
                <div class="col-1"></div>
                <div class="col-5">
                    <label for="experience" class="form-label">Years of experience</label>
                    <input type="number" class="form-control" id="experience" min="0">
                </div>
                <div class="col-5">
                    <label class='form-label'>Mobile number</label>
                    <input type="email" class="form-control">
                </div>
                <div class="col-1"></div>
            </div>
            <div class="row">
                <div class="col-1"></div>
                <div class="col-5">
                    <label for="birthday" class="form-label">Date of birth</label>
                    <input type="date" id="birthday" name="birthday" class="form-control">
                </div>
                <div class="col-5">
                    <label for="gender" class="form-label">Select gender</label>
                    <select class="form-select" id="gender">
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                        <option value="3">Others</option>
                    </select>
                </div>
                <div class="col-1"></div>
            </div>
            <div class="row">
                <div class="col-1"></div>
                <div class="col-10">
                    <label class='form-label'>Email address</label>
                    <input type="email" class="form-control">
                </div>
                <div class="col-1"></div>
            </div>
            <div class="row">
                <div class="col-1"></div>
                <div class="col-10">
                    <label for="address" class="form-label">Address</label>
                    <textarea type="text" class="form-control" id="address"></textarea>
                </div>
                <div class="col-1"></div>
            </div>
            <div class="row">
                <div class="col-1"></div>
                <div class="col-3">
                    <label for="city" class="form-label">City</label>
                    <input type="text" class="form-control" id="city">
                </div>
                <div class="col-4">
                    <label for="city" class="form-label">State</label>
                    <input type="text" class="form-control" id="city">
                </div>
                <div class="col-3">
                    <label class='form-label'>Pincode</label>
                    <input type="text" class="form-control">
                </div>
                <div class="col-1"></div>
            </div>
            <div class="row mt-4">
                <div class="col-1"></div>
                <div class="col-5">
                    <button class="btn btn-primary form-control" on:click={onSubmit}>Submit</button>
                </div>
                <div class="col-5">
                    <button class="btn form-control btn-light border"><i class="bi bi-google"></i>&nbsp; &nbsp; Continue with Google</button>
                </div>
            </div>
            <!-- <div class="row mt-4">
                <div class="col-2"></div>
                <div class="col-10">
                    <button class="btn form-control btn-light border"><i class="bi bi-facebook"></i> &nbsp; &nbsp; Continue with Facebook</button>
                </div>
            </div> -->
        </div>
        {:else if index === 1}
            <h1>OTP</h1>
        {:else if index === 2}
            <h1>Success</h1>
        {/if}
    </div>
    <div class="col-1"></div>
</div>