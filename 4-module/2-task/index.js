function makeDiagonalRed(table) {
let index = 0;
for(let row of table.rows) {
  row.cells[index].style.backgroundColor = "red";
  index++;
}
}
