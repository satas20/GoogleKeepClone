const notead=  $("#notepad");
const addButton=$("#addButton");
const colorSelect=$("#colorSelect");
const notes=$("#notes");
function updateStorage(){
  localStorage.setItem("notes", JSON.stringify(notes.html()));

}
function showNotes(){
  const storedNotes = localStorage.getItem("notes");
  if (storedNotes) {
    notes.html(JSON.parse(storedNotes));
  }

}

$(document).ready(function () {
  showNotes();
  // You need to call updateStorage after the page loads
  updateStorage();
});
addButton.on("click", function() {
    // Your code to execute when the button is clicked
    console.log("Textarea Value:", notead.val());
    var noteValue = notead.val();
    var colorValue = colorSelect.val();

      if (noteValue.trim() !== "") {
        // Create a new card element using jQuery
        const newNoteCard = $(
          `<div class="col mb-4">
           
          </div>`
        );
        const card=$(
            ` <div class="card" style="background-color: ${colorValue};">
              
            </div>`
          );
        const cardBody = $(
            `<div class="card-body">
            ${noteValue}
          </div>`
          );
        // Append the new card to the "notes" container
        const button = $(
          `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 24 24" class="">
          <path d="M 10 2 L 9 3 L 3 3 L 3 5 L 4.109375 5 L 5.8925781 20.255859 L 5.8925781 20.263672 C 6.023602 21.250335 6.8803207 22 7.875 22 L 16.123047 22 C 17.117726 22 17.974445 21.250322 18.105469 20.263672 L 18.107422 20.255859 L 19.890625 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 6.125 5 L 17.875 5 L 16.123047 20 L 7.875 20 L 6.125 5 z"></path>
          </svg>`
        );
                      

        card.append(cardBody);
        card.append(button);
        newNoteCard.append(card);
        notes.prepend(newNoteCard);
        

        // Clear the textarea after adding the note
        notead.val("");
        updateStorage();
      }
  });
notes.on("click",function(e)
{
  if(e.target.tagName== "svg")
  {
    console.log(e.target.tagName);
    e.target.parentElement.parentElement.remove();
    updateStorage();
  }
  
});