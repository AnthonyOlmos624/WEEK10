 //JavaScript to handle form submission

 // Add an event listener for the form submission
 document.getElementById('gameForm').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const rated = document.getElementById('rated').value;
    const genre = document.getElementById('genre').value;

    // Create a new table row
    const table = document.getElementById('gameTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // Insert new cells for the row
    const nameCell = newRow.insertCell(0);
    const positionCell = newRow.insertCell(1);
    const departmentCell = newRow.insertCell(2);

    // Add text to the cells
    nameCell.textContent = name;
    positionCell.textContent = rated;
    departmentCell.textContent = genre;

    // Clear the form fields
    document.getElementById('gameForm').reset();
});