//The client wants to hire a carpet company to install carpet around their house. These variables indicate how big the clients house is
//how long they want the workers to work and what they are willing to spend

var client = {
    squareFt: 2000,
    patchSqFt: 1000,
    hours: 8,
    days: 30,
    amountToSpend: 25000
    
};

//Below we have the three companies the client is considering and what their set amounts are. Patch work, base price and demo is per
//square feet

var company1 = {
    carpetCompany: "Ruggieri Bros",
    paidHrs: 45,
    patchWork: 2,
    basePrice: 7,
    demo: .75,
};

var company2 = {
    carpetCompany: "Business Interiors",
    paidHrs: 50,
    patchWork: 3,
    basePrice: 3,
    demo: 1.50
};

var company3 = {
    carpetCompany: "Rhode Island Flooring",
    paidHrs: 47,
    patchWork: 5,
    basePrice: 4,
    demo: 2
};

//Here we have an object calling the name value pairs for just the first company above. Don't mind the commented out paid name value pair in the equations1 object
var paid = client.hours * company1.paidHrs;
var equations1 = {
   // paid: client.hours * company1.paidHrs,
    overallPrice: [client.squareFt,client.patchSqFt, client.squareFt,client.days],
    companyPrice: [company1.basePrice, company1.patchWork, company1.demo, paid]
};
 
//This For loop multiplies each array index item and adds them up to show the total price of the company

var i;
var sum = 0;

for (i =0; i < equations1.overallPrice.length; i++) { sum += equations1.overallPrice[i] * equations1.companyPrice[i]}
console.log(sum);