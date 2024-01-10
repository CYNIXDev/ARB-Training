let items=document.querySelectorAll('.items')
let sub_items=document.querySelectorAll('.sub-items')
let back_button=document.querySelectorAll('.back-button')
console.log(back_button)
for (let i=0; i<items.length; i++) {
    items[i].addEventListener('click', () =>{
        items[i].classList.add('display-set')
        sub_items[i].classList.add('sub-items-set')
    });
}
for (let i=0; i<back_button.length; i++) {
    back_button[i].addEventListener('click', () =>{
        sub_items[i].classList.remove('sub-items-set')
        items[i].classList.remove('display-set')
    });
}


  // Function to parse the date from the text
function parseDateFromText(dateText) {
    // Assuming the date format is YYYY-MM-DD
    const parts = dateText.split('/');
    return new Date(parts[0], parts[1] - 1, parts[2]); // Month is 0-based
}

  // Function to compare the parsed date with the current date
function compareDates() {
    // Get the date text from the HTML element
    let dateText = document.querySelector('.button-57').getAttribute("value")
    console.log(dateText)

    // Parse the date from the text
    const targetDate = parseDateFromText(dateText);

    // Get the current date
    const currentDate = new Date();

    // Compare the dates
    if (targetDate > currentDate) {
      console.log('The target date is in the future.');
    } else if (targetDate < currentDate) {
      console.log('The target date is in the past.');
    } else {
      console.log('The target date is today.');
    }
  }

 // Call the compareDates function
compareDates();









// const items_card = document.querySelector(".item")

// function callme(){
//     items_card.setAttribute('class', 'item .all-module-select')
// }
// items_card.addEventListener('click', callme())
//////////////////////////////////////////////////////////////////////////////////////////////
//function handleItemClick(index) {
//     var items = document.querySelectorAll('.item');
    
//     // Reset background color for all items
//     items.forEach(function(item) {
//         item.setAttribute('class','item')
//     });

//     // Change the background color of the clicked item
//     items[index+1].style.display='block'
//     items[index].style.display='none'
// }

// document.getElementById("container").addEventListener("click", function (event) {
//     // Check if the clicked element or its parent has the class "item"
//     var clickedItem = event.target.closest('.item');
//     if (clickedItem) {
//         // Get the index of the clicked item
//         var index = Array.from(clickedItem.parentNode.children).indexOf(clickedItem);
//         handleItemClick(index);
//     }
// });