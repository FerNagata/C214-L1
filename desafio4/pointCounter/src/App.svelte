<script>
	import Button, { Label } from '@smui/button';
	import Dialog, { Title, Content, Actions } from '@smui/dialog'

	let pontos1 = 0;
	let pontos2 = 0;
	let maximo = 0;
	let open = false;
	let timeGanhador = '';

	function reiniciar(){
		pontos1 = 0;
		pontos2 = 0;
	}

	function ganhador(){
		open = true;
		if(pontos1 >= maximo){
			timeGanhador = 'time 1';
		}else if(pontos2 >= maximo){
			timeGanhador = 'time 2';
		}
	}

</script>

<main>
	

	<h1> Contador de Pontos </h1>
	<div>
		Digite quantos pontos são necessários para ganhar: <input type="number" bind:value={maximo}>
	</div>

	<Button on:click={() => pontos1++} touch variant="raised">
		<Label> Ponto time 1</Label>
	</Button>
	<Button on:click={() => pontos2++} touch variant="raised">
		<Label> Ponto time 2</Label>
	</Button>

	<h2> Pontuação </h2>
	<pre class="status">Time 1: {pontos1}</pre>
	<pre class="status">Time 2: {pontos2}</pre>

	<Button on:click={reiniciar} variant="raised">
		<Label> Reiniciar </Label>
	</Button>
	
	{#if (pontos1 >= maximo || pontos2 >= maximo) && maximo !== 0 && maximo !== null}
		{ganhador()}
		<Dialog
		bind:open
		aria-labelledby="simple-title"
		aria-describedby="simple-content"
		>
		<Title id="simple-title">Parabéns {timeGanhador} !!</Title>
		<Actions>
			<Button on:click={reiniciar}>
			<Label>Reiniciar</Label>
			</Button>
		</Actions>
		</Dialog>
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	div{
		margin: 20px;
	}

	h2{
		text-decoration: underline;
	}
	pre{
		font-size: 20px;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>