var store = {
	amountSlider: document.querySelector("#amount-range"),
	amountElement: document.querySelector("#range-slider-amount"),
	amountPreview: document.querySelector(".amount-preview"),
	termSlider: document.querySelector("#term-range"),
	termAmount: document.querySelector("#range-slider-term"),
	termPreview: document.querySelector(".term-preview"),
	monthlyPreview: document.querySelector(".monthly-preview"),
	interest2: 15
};



(function attachEvent(store){
	listenToAmountRange2(store)
	listenToTermRange2(store)
	

	//Default run
	updateMonthly2()
})(store)

function listenToAmountRange2({ amountSlider }){
	amountSlider.oninput = ({ target }) => updateAmount(target.value)
}

function listenToTermRange2({ termSlider }){
	termSlider.oninput = ({ target }) => updateTerm(target.value)
}



function updateAmount(newAmount){
	let { amountElement, amountPreview } = store, value = "₦" + numberWithCommas(newAmount)
	updateMonthly2()
}

function updateTerm(newTerm){
	let { termAmount, termPreview } = store, value = newTerm +"Month"
	updateMonthly2()
}

function updateMonthly2(){
	console.log("hi")
	
	let { termSlider, amountSlider, monthlyPreview } = store
	
	let monthlyRepayments2 = "" + calculateMonthly({ interest2: store.interest2, term: +termSlider.value, amount: +amountSlider.value })
	updateElement2(monthlyPreview, "" + numberWithCommas(+monthlyRepayments2.split(".")[0] + 1))
}




function calculateMonthly({ interest2, term, amount }){


	let monthlypercent= 0.5 * term,

	monthlyInterest = (interest2  / term) + monthlypercent ,

	interestValue = (monthlyInterest / 100) * amount,

	transactionfee= (1.6 / 100) * amount 


	return interestValue - transactionfee
}

function changeMax({ amountSlider }, newAmount){
	let min = amountSlider.getAttribute("min")
	amountSlider.value = min
	updateAmount(min)
	amountSlider.setAttribute("max", newAmount)
}

/* Helpers */

function numberWithCommas(num) {
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function updateElement2(element, value){
	element.innerText = value
}





/* file2 */




var store2 = {
		amountSlider2: document.querySelector("#amount-range2"),
		amountElement2: document.querySelector("#range-slider-amount2"),
		amountPreview2: document.querySelector(".amount-preview2"),
		termSlider2: document.querySelector("#term-range2"),
		termAmount2: document.querySelector("#range-slider-term2"),
		termPreview2: document.querySelector(".term-preview2"),
		monthlyPreview2: document.querySelector(".monthly-preview2"),
		interest: 17
	};



	(function attachEvent(store2){
		listenToAmountRange(store2)
		listenToTermRange(store2)
		

		//Default run
		updateMonthly()
	})(store2)

	function listenToAmountRange({ amountSlider2 }){
		amountSlider2.oninput = ({ target }) => updateAmount2(target.value)
	}

	function listenToTermRange({ termSlider2 }){
		termSlider2.oninput = ({ target }) => updateTerm2(target.value)
	}



	function updateAmount2(newAmount){
		let { amountElement2, amountPreview2 } = store2, value = "₦" + numberWithCommas2(newAmount)
		updateMonthly()
	}

	function updateTerm2(newTerm){
		let { termAmount2, termPreview2 } = store2, value = newTerm +"Month"
		updateMonthly()
	}

	function updateMonthly(){
		console.log("hi2")
		let { termSlider2, amountSlider2, monthlyPreview2 } = store2
		let monthlyRepayments = "" + calculateMonthly2({ interest: store2.interest, term: +termSlider2.value, amount: +amountSlider2.value })
		updateElement3(monthlyPreview2, "" + numberWithCommas2(+monthlyRepayments.split(".")[0] + 1))
	}




	function calculateMonthly2({ interest, term, amount }){


		let monthlypercent= 0.5 * term,

		monthlyInterest = (interest  / term) + monthlypercent ,

		interestValue = (monthlyInterest / 100) * amount,

		transactionfee= (1.6 / 100) * amount 


		return interestValue - transactionfee
	}



	/* Helpers */

	function numberWithCommas2(num) {
		return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	function updateElement3(element, value){
		element.innerText = value
	}