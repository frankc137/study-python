/* TASK 15: Using Python or PHP or Java or Ruby or JavaScript
Write a program that takes input of someone's basic salary and benefits, adds them to fin
d the gross salary then uses  the gross salary to find the NHIF. 
To find the Kenya NHIF Rate using THIS LINK:  
Write a normal program but use functions if you feel comfortable. */

//function to calculate gross salary

function calculateGrossSalary(a, b) {
  let gross = a + b;
  return gross;
}

let basicSalary = Number(prompt("Enter your basic salary: "));
let benefits = Number(prompt("Enter your benefits: "));
let gross_salary = calculateGrossSalary(basicSalary, benefits);
alert(gross_salary);

//NHIF

function calculateNhif(x) {
  let nhif_contribution = 0;

  if (x > 0 && x <= 5999) {
    nhif_contribution = 150;
  } else if (x >= 6000 && x <= 7999) {
    nhif_contribution = 300;
  } else if (x >= 8000 && x <= 11999) {
    nhif_contribution = 400;
  } else if (x >= 12000 && x <= 14999) {
    nhif_contribution = 500;
  } else if (x >= 15000 && x <= 19999) {
    nhif_contribution = 600;
  } else if (x >= 20000 && x <= 24999) {
    nhif_contribution = 750;
  } else if (x >= 25000 && x <= 29999) {
    nhif_contribution = 850;
  } else if (x >= 30000 && x <= 34999) {
    nhif_contribution = 900;
  } else if (x >= 35000 && x <= 39999) {
    nhif_contribution = 950;
  } else if (x >= 40000 && x <= 44999) {
    nhif_contribution = 1000;
  } else if (x >= 45000 && x <= 49999) {
    nhif_contribution = 1100;
  } else if (x >= 50000 && x <= 59999) {
    nhif_contribution = 1200;
  } else if (x >= 60000 && x <= 69999) {
    nhif_contribution = 1300;
  } else if (x >= 70000 && x <= 79999) {
    nhif_contribution = 1400;
  } else if (x >= 80000 && x <= 89999) {
    nhif_contribution = 1500;
  } else if (x >= 90000 && x <= 99999) {
    nhif_contribution = 1600;
  } else {
    nhif_contribution = 1700;
  }
  return nhif_contribution;
}

let nhif = calculateNhif(gross_salary);
console.log(nhif);


//task 16: NSSF

function calculateNSSF(gross_salary) {
    let nssfContribution =0;
    if (a>=0 && a<= 18000){
        nssfContribution = a*0.06;
    }else {
        nssfContribution =(0.06)*18000
    }
    return nssfContribution;
}
    let NSSF=calculateNSSF(gross_salary)
    console.log("NSSF Contribution is: "+ NSSF)

    // task 17:  NHDF

 function calculateNDHF(gross){
    NHDF=0.015* gross
    return NHDF
 }
 let NHDF=calculateNhif(gross_salary)
 console.log("NHDF is: "+ NHDF)
 //console.log(`NHDF is: ${NHDF}`)

 // task 18: taxable income 

 function calculateTaxableIncome(gross,nssf,nhif,nhdf){
    let taxableIncome= gross-(nssf+nhif+nhdf)
    return taxableIncome
 }
 let taxableIncome=calculateTaxableIncome(gross_salary, NSSF, nhif, NHDF)
 console.log(`Taxable income is${taxableIncome}`)


//task 19: PAYEE

function calculatePAYEE(tax,relief=2400){
    let payee=0
    if (tax>=0 && tax<=24000){
        payee=0

    }else if(tax>24000 && tax<=32333){
        payee=(24000*0.1)+((tax-24000)*0.25)-relief;

    }else if(tax>32333 && tax<=500_000){
        payee=(24000*0.1)+(8333*0.25)+((tax-32333)*0.30)-relief;

    }else if(tax>500_000 && tax<=800_000){
        payee=((24000 * 0.1)+(8333 * 0.25)+(467667 * 0.30)+(tax-500_000)*0.325)-relief;

    }else {
        payee=(24000 * 0.1)+(8333 * 0.25)+(467667 * 0.30)+(300_000 * 0.325)+((tax-800_000) * 0.35)-relief;
    }
    return payee;
}
let     PAYEE= calculatePAYEE(taxableIncome)
console.log(`payee is ${PAYEE}`)

  // netpay
function calculateNetpay(){
  
}




