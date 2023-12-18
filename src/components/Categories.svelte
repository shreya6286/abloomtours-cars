<script>
    import { space } from "svelte/internal";


    let cars = [{pic: "car1.jpg", name: "Audi A4 2017", type: "Automatic", fuel: "Diesel", seats: "5 seats", time: "Available from 4 June", city: "Bangalore", rating: "4.64", cost: "₹478/hr"},
    {pic: "car2.jpeg", name: "KIA Seltos 2022", type: "Manual", fuel: "Petrol", seats: "5 seats", time: "Available from 20 May", city: "Pune", rating: "4.48", cost: "₹278/hr"},
    {pic: "car3.jpeg", name: "Mahindra XUV500 2018", type: "Automatic", fuel: "Diesel", seats: "7 seats", time: "Available from 16 May", city: "Delhi NCR", rating: "4.40", cost: "₹278/hr"},
    {pic: "car4.png", name: "MG Motors Hector 2022", type: "Manual", fuel: "Petrol", seats: "5 seats", time: "Available from 16 May", city: "Mumbai", rating: "4.66", cost: "₹350/hr"},
    {pic: "car5.jpg", name: "Hyundai I20 2023", type: "Automatic", fuel: "Petrol", seats: "5 seats", time: "Available from 16 May", city: "Chennai", rating: "", cost: "₹222/hr"},
    {pic: "car6.jpeg", name: "Suzuki BALENO 2021", type: "Manual", fuel: "Petrol", seats: "5 seats", time: "Available from 16 May", city: "Hydrabad", rating: "4.04", cost: "₹210/hr"},
    {pic: "car7.jpeg", name: "Honda CRV 2015", type: "Automatic", fuel: "Petrol", seats: "7 seats", time: "Available from 26 May", city: "Chandigarh", rating: "4.76", cost: "₹272/hr"},
    {pic: "car8.jpeg", name: "Hyundai Creta 2017", type: "Manual", fuel: "Petrol", seats: "5 seats", time: "Available from 16 May", city: "Kolkata", rating: "4.44", cost: "₹187/hr"},
]
</script>

<style>
    .flex1{
        display: flex;
        flex-wrap: wrap;
        overflow-y: hidden;
        overflow-x: auto;
        padding: 60px;
    }
    img{
        height: 160px;
    }
    .citybtn{
        width: 100%;
    }
</style>

<menu>
    <div class="row">
        <div class="col-1"></div>
        <div class="col-10 flex1">
            {#each cars as car}
                <div class="card m-4" style="width: 18rem;">
                    <img src={car.pic} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 style="color: #FFC300;"><i class="bi bi-star-fill"></i></h5>
                        <h5 class="roboto">{car.name}</h5>
                        <p class="card-text">{car.type} • {car.fuel} • {car.seats}</p>
                        <hr>
                        <p class="mt-4">{car.time}</p>
                        <div class="row mt-3">
                            <div class="col-6"><h4>{car.cost}</h4></div>
                            <div class="col-6"><a href="#" class="btn btn-primary citybtn">{car.city}</a></div>
                        </div>                  
                    </div>
                </div>
              
            {/each}
        </div>
        <div class="col-1"></div>
    </div>
</menu>
