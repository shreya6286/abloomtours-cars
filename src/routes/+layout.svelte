<script>
import logo from '../assets/logo.png';
import { goto } from '$app/navigation';

function logIn() {
        goto('/cust-log');
    }

function goToRegister(){
	goto('/cust-reg')
}
</script>

<style>
	.topbar {
    background-color: #2471A3;
    color: #fff;
    padding: 5px 20px;
    padding-bottom: 0;
    }

	img{
		width: 90%;
		max-height: 70%;
	}
</style>

<div class='container-fluid p-0'>
	<div class='row topbar'>
		<div class='col-5'>
			<div class="row">
				<div class="col-4">
					<a class='pt-2' href={'/'}>
						<img style='height: 50px' src="logo.png">
					</a>
				</div>
				<div class="col-9 ml">
					
				</div>
			</div>
		</div>
		<div class='col-3'>
		</div>
		<div class='right pt-2 col-4'>
			<button class='btn btn-sm btn-light' on:click={goToRegister}>
				Register
			</button>
			<button class='btn btn-sm btn-warning' on:click={logIn}>
				Login
			</button>
		</div>
	</div>
	<slot >
	</slot>
</div>
