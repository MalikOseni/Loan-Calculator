// Select the 'result' element from the HTML document
const resultEl = document.getElementById('result');

// Define a function to update the monthly payment of a loan
const updateLoan = () => {
  // Retrieve the loan amount, interest rate, and payment plan values from the HTML document
  const loanAmountEl = document.getElementById('loan-amount').value;
  const interestRateEl = document.getElementById('interest-rate').value;
  const paymentPlanEl = document.getElementById('payment-plan').value;
    
  // Calculate the interest using the formula (loanAmountEl * (interestRateEl * 0.01)) / paymentPlanEl
  let interest = (loanAmountEl * (interestRateEl * 0.01)) / paymentPlanEl;

  // Calculate the monthly payment by adding the interest to the loan amount divided by the payment plan
  let monthpayment = (loanAmountEl / paymentPlanEl + interest);

  // Display the monthly payment on the HTML document with three decimal places of precision
  resultEl.innerText = monthpayment.toFixed(3);
}

// Call the updateLoan function once to update the monthly payment when the page loads
updateLoan();
