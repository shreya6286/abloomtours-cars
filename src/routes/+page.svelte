<script>
	import Categories from '../components/Categories.svelte';
	import Features from '../components/Features.svelte';
	import Footer from '../components/Footer.svelte';
import banner from '../assets/banner1.jpg';
// import {opencage} from 'opencage-api-client';
import { onMount } from 'svelte';

onMount(() => {
    // getCurrentPos();
})

// async function getCurrentPos() {
//     const result = await opencage({ q: '37.4396, -122.1864', language: 'en' });
//     console.log(result);
// }
</script>

<style>
.xpedio-box {
        display: flex;
        height: 100vh;
        align-items: center;
        justify-content: center;
    }

.banner1 {
    background-image: url('../assets/banner1.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 400px;
}

.header1 {
    font-family: 'Roboto condensed';
    font-weight: 900;
    color: #fff;
    padding: 100px 0 0 100px;
}

.header2 {
    font-family: 'Roboto condensed';
    font-size: 16px;
    color: #fff;
    padding: 0 100px;
}

/* .offers-btn {
    border-radius: 15px;
    width: 200px;
    color: #fff;
    background-color: #AC01CA;
    border: 1px solid #AC01CA;
    /* box-shadow: 5px 5px 5px #555; */
/* } */

/* .offers-btn:hover {
    background-color: #E10781;
    border: 1px solid #E10781;
}  */


.summary h1{
    font-family: 'Roboto condensed';
    font-weight: 900;
    color: #000;
}

.summary h3{
    font-family: 'Roboto condensed';
    font-size: 16px;
    color: #000;
}

.summary .box {
    border-radius: 5px;
    background-color: #fff;
    /* opacity: 0.6; */
    padding: 15px;
    text-align: center;
}

a{
	text-decoration: none;
	font-size: 12px;
	color: black;
}

.flex1{
	display: flex;
	justify-content: center;
	padding: 5px;
}
.icons{
	font-size: 40px;
}

p{
	display: flex;
	justify-content: center;
}
.center{
	display: flex;
	justify-content: center;
}
.mb{
	margin-bottom: -40px;
}
</style>

<div >
	<div class='banner1'>
		<h1 class='header1'>
			Perfect car for your trip
		</h1>
		<label class='header2' style='color: #fff'>
			Every trip comes with exiciting offers. Book a trip and avail the offers 
		</label>
		<div class='row mt-3' style='padding-left: 100px'>
			<div class='col-12'>
			    <button class='btn btn-warning offers-btn' style="width: 17%; border-radius: 50px">
				    Know more about offers
			    </button>
			</div>
		</div>
		<div class='row summary' style='padding-left: 100px; padding-top: 50px'>
			<div class='box me-3 col-sm-2 col-8'>
				<h1 >
					250+
				</h1>
				<h3 >
					Registered cars
				</h3>
			</div>
			<div class='box me-3 col-sm-2 col-8 col-2'>
				<h1 >
					12K+
				</h1>
				<h3 >
					Successful travellers
				</h3>
			</div>
		</div>
	</div>
	<div class='row py-5 gray-bg'>
		<div class='col-12'>
			<div class='row'>
				<div class='col-2'>
				</div>
				<div class='col-8'>
					<div class='row  border shadow p-5 white-bg'>
						<div class='center col-12'>
							<h2 class='roboto-c'>
								Want to book a trip?
							</h2>
						</div>
						<div class='col-3'>
						<label class='form-label'>From location</label>
						<input class='form-control' type='text'>
						</div>
						<div class='col-3'>
						<label class='form-label'>To location</label>
						<input class='form-control' type='text'>
						</div>
						<div class='col-3'>
						<label class='form-label'>From date</label>
						<input class='form-control' type='date'>
						</div>
						<div class='col-3'>
						<label class='form-label'>To date</label>
						<input class='form-control' type='date'>
						</div>
						<div class='col-12'>
						<div class='center mt-3'>
							<button class='btn btn-sm btn-primary'>
								Book now
							</button>
						</div>
						</div>
					</div>
				</div>
				<div class='col-2'>
				</div>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="row mt-4 mb">
			<div class="col-2"></div>
			<div class="col-1 flex1">
				<a href=""><i class="bi bi-menu-app icons"></i><p>All</p></a>
			</div>
			<div class="col-1 flex1 center">
				<a href=""><i class="bi bi-hand-thumbs-up icons"></i><p>Luxury Car</p></a>
			</div>
			<div class="col-1 flex1">
				<a href=""><i class="bi bi-signpost-2 icons"></i><p>Road trip</p></a>
			</div>
			<div class="col-1 flex1 center">
				<a href=""><i class="bi bi-ev-front icons"></i><p>Automatic</p></a>
			</div>
			<div class="col-1 flex1 center">
				<a href=""><i class="bi bi-fuel-pump-diesel icons"></i><p>Diesel</p></a>
			</div>
			<div class="col-1 flex1">
				<a href=""><i class="bi bi-sunrise icons"></i><p>Sunroof</p></a>
			</div>
			<div class="col-1 flex1 center">
				<a href=""><i class="bi bi-speedometer icons"></i><p>Cruise Control</p></a>
			</div>
			<div class="col-1 flex1 center">
				<a href=""><i class="bi bi-camera icons"></i><p>360 deg cam</p></a>
			</div>
			<div class="col-2"></div>
		</div>
	</div>
	<div class="row">
		<Categories/>
	</div>
	<div class="row">
		<Features/>
	</div>
	<div class="row">
		<Footer/>
	</div>
</div>