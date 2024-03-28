function sumSalary(salaries) {
  let summary = 0;
for (const property in salaries) {
    if ( typeof(salaries[property]) === 'number' && !isNaN(salaries[property]) && salaries[property] != Infinity && salaries[property] != -Infinity) {      
        summary += salaries[property]; 
    }
}
return summary
}
