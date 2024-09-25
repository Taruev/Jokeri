
const newRowButton = document.getElementById('new-row-btn');
const jokeriTable = document.getElementById('jokeri-table');
const rowCountElement = document.getElementById('row-count');

let rowCount = 0; 

newRowButton.addEventListener('click', () => {
    addNewJokeriRow();
});

function addNewJokeriRow() {
    const newRow = jokeriTable.insertRow();

   
    for (let i = 0; i < 7; i++) {
   
        const newCell = newRow.insertCell();
        const randomNumber = Math.floor(Math.random() * 10); 
        newCell.textContent = randomNumber; 
    }

    rowCount++;
    rowCountElement.textContent = `Arvottuja rivejä: ${rowCount}`;
}
