let pl = document.querySelector('#ploshad');
		let per = document.getElementById("perimetr");
		let dlin = document.querySelector('#dlina');
		let vys = document.getElementById("vysota");
		let res = document.getElementById("resultat");

		function newfunc() {
			let divka = document.getElementById("rect");
			divka.innerHTML = "Обработана события через атрибуты";
		}

		res.addEventListener('click', function() {
			console.log(dlin.value);
			


			pl.innerHTML =  (dlin.value * vys.value) 
			per.innerHTML = (dlin.value * 2) + (vys.value * 2)
		})