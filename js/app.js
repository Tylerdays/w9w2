let company = {
    name: `company one`,
    yearlyRevenue: 120000,
    ceo: `ceo One`,
    numberOfemployees: 12

}

if (company[`yearlyRevenue`]>= 1000000){
    console.log(`Congrats, you've been productive`);
    console.log(company[`name`]);
    console.log(company[`ceo`]);
    console.log(company[`numberOfemployees`]);
} else {
    console.log(`We're not doing as well`)
}