function makeDiagonalRed(table) {
let index = 0;
for(let row of table.rows) {
  table.rows[index].cells[index].style.backgroundColor = "red";
  index ++;
}
}
