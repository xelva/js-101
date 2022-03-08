//hello you 
const hello = name => {
    console.log(`Hello, ${name}!`);
}
hello('Mustache!');

//get tip
const tipAmount = (billAmount, serviceLevel) => {
    if (serviceLevel === 'good') {
        let getTip = billAmount * .2;
        
        return getTip;
    }

    else if (serviceLevel === 'fair') {
        let getTip = billAmount * .15;
        
        return getTip;
    }
    else {
        let getTip = billAmount * .1;
        
        return getTip;
    }
}

tipAmount(100, 'good');


//get total
const totalAmount = (bill, service) => {
    let totalHold = bill + tipAmount(bill, service);
    console.log(`Your total amount is: ${totalHold}`);
}
totalAmount(100, 'good');


//split total
function splitAmount(bill, service, _num) {
    let totalHold = bill + tipAmount(bill, service);
    let splitHold = totalHold / _num;
    console.log(`Your total amount per person is: ${splitHold}`);
}

splitAmount(100, 'good', 3);
