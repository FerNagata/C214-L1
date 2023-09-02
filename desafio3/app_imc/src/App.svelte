<script>

	let peso = 0;
	let altura = 0;
	let imc = 0;
	let classificacao;

	function calcularIMC(){
		if(peso > 0 && altura > 0){
			imc = (peso / Math.pow(altura, 2)).toFixed(2);
			if (imc <= 18.5) {
				classificacao = 'abaixo do peso';
			} else if (imc >= 18.6 && imc <= 24.9) {
				classificacao = 'peso ideal (parabéns)';
			} else if (imc >= 25 && imc <= 29.9) {
				classificacao = 'levemente acima do peso';
			} else if (imc >= 30 && imc <= 34.9) {
				classificacao = 'obesidade grau I';
			} else if (imc >= 35 && imc <= 39.9) {
				classificacao = 'obesidade grau II (severa)';
			} else {
				classificacao = 'obesidade III (mórbida)';
			}


			document.getElementById("resultado").innerHTML = `Seu IMC é: ${imc}`
			document.getElementById("complemento").innerHTML = `Sua classificação: ${classificacao}`
			
		} else {
			imc = 0;
			document.getElementById("resultado").innerHTML = `Valor(es) inválido(s)`
		}


	}

	function limpar(){
		peso = 0;
		altura = 0;
		document.getElementById("resultado").innerHTML = ``
		document.getElementById("complemento").innerHTML = ``

	}


</script>

<main>
		<nav>
			<h1>Calculadora de IMC</h1>
			<!-- <button class="sobre"> Sobre o IMC </button> -->
		</nav>

		<div class="corpo">

			<label>
				Peso (kg): <input type="number" bind:value={peso}/>
			</label>
			<label>
				Altura(m): <input type="number" bind:value={altura}/>
			</label>
			<button on:click={calcularIMC}> Calcular IMC </button>
			<button on:click={limpar}> Novos valores </button>
			<h3 id="resultado"> </h3>
			<h3 id="complemento"> </h3>
		</div>

</main>

<style>
	*{
		align-items: center;
		text-align: center;
		text-align: 2rem;
	}
	nav{
		display: block;
		align-items: center;
		border-bottom: 2px solid #000;
		margin: 0 400px;
		text-align: center;
	}
	h1{
		font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
		font-size: 1.5rem;

	}
	.corpo{
		margin: 40px;
	}
	label{
		display:block;
		font-weight: bold;
		margin-bottom: 0.5rem;
	}
	input{
		text-align: left;
		padding: 0.25rem;
		border-radius: 5px;
	}
	button{
		border-radius: 5px;
		border-width: 2px;
		background-color: orange;
		font-weight: bold;
		border-color: orange;
		margin: 5px 10px;
	}
	button:hover{
		background-color: rgb(255, 191, 71);
		border-color: rgb(255, 191, 71);
		cursor: pointer;
	}
	#resultado{
		font-size: 1.2rem;
	}
	#complemento{
		font-size: 1.2rem;
	}
</style>