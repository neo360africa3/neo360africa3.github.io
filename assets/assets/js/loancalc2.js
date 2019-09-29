let store2 = {
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