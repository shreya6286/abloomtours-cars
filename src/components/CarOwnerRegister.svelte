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
    <div class="col-4">
        <img src="carown.jpeg" alt="">
    </div>
    <div class="col-6">
        <div class="row">
            <div class="col-2"></div>
            <div class="col-8">
                <h4>Welcome to abloomtours!</h4>
                <p>Car owner's registration page</p>
            </div>
            <div class="col-2"></div>
        </div>
        <div class="row mt-3 ml">
            <div class="col-3"></div>
            <div class="col-3">
                <button on:click={goToCRegister} class="reg">Register</button>
            </div>
            <div class="col-3">
                <button on:click={goToCLogin} class="button1">Login</button>
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
                    <label class='form-label'>Email address</label>
                    <input type="email" class="form-control">
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
                    <label class='form-label'>Car brand</label>
                    <select class="form-select">
                        <option selected>Choose car brand</option>
                        <option value="1">Maruti</option>
                        <option value="2">Honda</option>
                    </select>
                </div>
                <div class="col-5">
                    <label class='form-label'>Car type</label>
                    <select class="form-select">
                        <option selected>Choose car type</option>
                        <option value="1">Sedan</option>
                        <option value="2">Hatchback</option>
                        <option value="1">SUV</option>
                    </select>
                </div>
                <div class="col-1"></div>
            </div>
            <div class="row">
                <div class="col-1"></div>
                <div class="col-5">
                    <label for="city" class="form-label">City</label>
                    <input type="text" class="form-control" id="city">
                </div>
                <div class="col-5">
                    <label class='form-label'>State</label>
                    <input type="text" class="form-control">
                </div>
                <div class="col-1"></div>
            </div>
            <div class="row">
                <div class="col-1"></div>
                <div class="col-4">
                    <label for="city" class="form-label">Car model</label>
                    <input type="text" class="form-control pad" id="city">
                </div>
                <div class="col-3">
                    <label for="city" class="form-label">Registration number</label>
                    <input type="text" class="form-control pad" id="city">
                </div>
                <div class="col-3">
                    <label class='form-label'>Seating capacity</label>
                    <input type="number" class="form-control pad" min="0">
                </div>
            </div>
            <div class="row">
                <div class="col-1"></div>
                <div class="col-10">
                    <label for="address" class="form-label">Address</label>
                    <textarea type="text" class="form-control" id="address"></textarea>
                </div>
                <div class="col-1"></div>
            </div>
            <div class="row mt-4">
                <div class="col-1"></div>
                <div class="col-5">
                    <button class="btn btn-primary form-control">Submit</button>
                </div>
                <div class="col-5">
                    <button class="btn form-control btn-light border"><i class="bi bi-google"></i>&nbsp; &nbsp; Continue with Google</button>
                </div>
            </div>
        </div>
    </div>
    <div class="col-1"></div>
</div>