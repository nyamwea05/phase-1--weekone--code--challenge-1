const document= document.querySelector('form');
		const resultDiv = document.querySelector('#result');

		form.addEventListener('submit', event => {
			event.preventDefault();
			const marks = Number(document.querySelector('#marks').value);
			let grade;

			if (marks >= 80) {
				grade = 'A';
            } else if (marks >= 60) {
				grade = 'B';
			} else if (marks >= 50) {
				grade = 'C';
			} else if (marks >= 40) {
                grade = 'D';
			} else {
				grade = 'E';
			}

			resultDiv.textContent = `The grade for ${marks} marks is ${grade}.`;
			resultDiv.style.display = 'block';
		}); 

		//code challenge 2
		const forms= document.querySelector('forms');
		const pointsParagraph = document.querySelector('#points');

		forms.addEventListener('submit', event => {
			event.preventDefault();
			const speed = Number(document.querySelector('#speed').value);
			let points = 0;

			if (speed <= 70) {
				points = 0;
			} else {
				points = Math.floor((speed - 70) / 5);
				if (points >= 12) {
					pointsParagraph.textContent = 'License suspended';
				} else {
					pointsParagraph.textContent = points.toString();
				}
			}

			document.querySelector('.result').style.display = 'block';
		});


		//code challenge 3
		const form = document.querySelector('form');
		const grossSalary = document.querySelector('#gross-salary');
		const payee = document.querySelector('#payee');
		const nhif = document.querySelector('#nhif');
		const nssf = document.querySelector('#nssf');
		const netSalary = document.querySelector('#net-salary');
		const warning = document.querySelector('#warning');
