function highlight(table) {

const AGE_COLUMN = 1;
const GENDER_COLUMN = 2;
const STATUS_COLUMN = 3;

for (let row of table.rows) {
  if (row.cells[AGE_COLUMN].innerHTML < 18 ) {
    row.style.textDecoration = "line-through";
  }
  
  row.classList.add(row.cells[GENDER_COLUMN].innerHTML === "m" ? "male" : "female");
  
  if (row.cells[STATUS_COLUMN].hasAttribute("data-available" ) ) {
    row.classList.add(row.cells[STATUS_COLUMN].dataset.available === "true" ? "available" : "unavailable");
  } else {
    row.hidden = true;
  }

}

}
