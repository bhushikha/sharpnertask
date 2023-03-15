// Get the form and input fields
const form = document.getElementById('addForm');
const itemInput = document.getElementById('item');
const descriptionInput = document.getElementById('description');

// Add submit event listener to the form
form.addEventListener('submit', addItem);

// Add item to list
function addItem(e) {
  e.preventDefault();

  // Get input value
  const newItem = itemInput.value;
  const newDescription = descriptionInput.value;

  // Create new li element
  const li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(newItem));
  
  // Create description element
  const desc = document.createElement('p');
  desc.className = 'item-description';
  desc.appendChild(document.createTextNode(newDescription));
  li.appendChild(desc);

  // Create delete button element
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  deleteBtn.appendChild(document.createTextNode('X'));
  li.appendChild(deleteBtn);

  // Add li element to list
  items.appendChild(li);
}
// Get the filter input field
const filterInput = document.getElementById('filter');

// Add keyup event listener to the filter input field
filterInput.addEventListener('keyup', filterItems);

// Filter items
function filterItems() {
  // Get filter input value
  const filterValue = filterInput.value.toLowerCase();

  // Get all list items
  const items = document.querySelectorAll('.list-group-item');

  // Loop through list items
  items.forEach((item) => {
    // Get item name and description
    const itemName = item.firstChild.textContent.toLowerCase();
    const itemDesc = item.querySelector('.item-description').textContent.toLowerCase();

    // Check if filter value is found in item name or description
    if (itemName.indexOf(filterValue) > -1 || itemDesc.indexOf(filterValue) > -1) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
}