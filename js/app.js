let company = {
    name: `company one`,
    yearlyRevenue: 120000,
    ceo: `ceo One`,
    numberOfemployees: 12,
    managers: [
        {
            name: 'manager one',
            salary: 75000,
            isSenior: false
        },
        {
            name: `manager two`,
            salary: 65000,
            isSenior: false
        },
        {
            name: `manager three`,
            salary: 140000,
            isOld: true
        }
    ]
}


if (company[`yearlyRevenue`]>= 1000000){
    console.log(`Congrats, you've been productive`);
    console.log(company[`name`]);
    console.log(company[`ceo`]);
    console.log(company[`numberOfemployees`]);
} else {
    console.log(`We're not doing as well`)
}

let counter = 0;
while (counter < company[`managers`].length) {
    console.log(company[`managers`][counter][`name`]);
    console.log(company[`managers`][counter][`salary`]);
    if (company[`managers`][counter][`isOld`] === true) {
        console.log(`Thanks for your years of service`);
    }


    counter = counter +1;
}

for (let counter =0; counter < company[`managers`].length; counter++)  {
    console.log(company[`managers`][counter][`name`]);
    console.log(company[`managers`][counter][`salary`]); 
    if (company[`managers`][counter][`isOld`] === true) {
        console.log(`Thanks for your years of service`);
    }    
}

