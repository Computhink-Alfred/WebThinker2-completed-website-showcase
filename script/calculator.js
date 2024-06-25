// Code a function called `check`
// It will take in a parameter with the name `units`
let check = (units) => {
	if (units === "metric") {
		const heightM = Number($('#height-m').val());
		const weightM = Number($('#weight-m').val());
		calculate(units, heightM, weightM);
	} else if (units === "imperial") {
		const heightI = Number($('#height-i').val());
		const weightI = Number($('#weight-i').val());
		calculate(units, heightI, weightI);
	}
}

let calculate = (unit, height, weight) => {
	let bmi = 0;
	let $ele = $('#results');

	// Reset the class list
	$ele.removeClass('bg-danger bg-success bg-warning').addClass('d-none');

	// Remove all elements from results
	$ele.html('');

	// Calculate the BMI
	if (unit === 'metric') bmi = weight / (height * height);
	else if (unit === 'imperial') bmi = 703 * weight / (height * height);

	// Print the results
	$ele.append('<p class="mb-0">BMI: ' + bmi.toFixed(1) + '</p>');

	// Format the results and some personalised text
	if (bmi < 18.5) {
		$ele.append('<p class="mb-0">Hello skinny, eat more to grow well.</p>');
		$ele.addClass('bg-danger');
	} else if (bmi < 25) {
		$ele.append('<p class="mb-0">Hello healthy, You are doing well.</p>');
		$ele.addClass('bg-success');
	} else if (bmi < 30) {
		$ele.append('<p class="mb-0">Hello fatty wannabe, you shoud start shaking off with workout!</p>');
		$ele.addClass('bg-warning');
	} else  {
		$ele.append('<p class="mb-0">Hello fatty, shaking it off for a healthier and longer life.</p>');
		$ele.addClass('bg-danger');
	}

	// Show the results
	$ele.removeClass('d-none');
}