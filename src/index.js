// Caching DOM Elements
const cList = document.getElementById("commentList");
const cInput = document.getElementById("commentInput");
const cBtn = document.getElementById("addCommentBtn");

// Registering an anonymous event listener to the document.
document.addEventListener("click", (e) => {
  e.stopPropagation();
  document.body.classList.toggle("theme-dark");
});

// Registering an anonymous event listener to the input.
cInput.addEventListener("click", (e) => {
  e.stopPropagation();
});

// Registering an anonymous event listener to the
// list of comments.
cList.addEventListener("click", (e) => {
  e.stopPropagation();
  // Using the event object's "target" property
  // to apply styling to the *actual* element
  // that fired the event!
  e.target.classList.toggle("strikethrough");
});

// The function to handle adding new comments.
function addComment(e) {
  e.stopPropagation();
  const newComment = cInput.value;

  // This wasn't in the instructions, but
  // we added a guard against empty comments:
  if (newComment === "") return;

  cList.appendChild(document.createElement("li")).textContent = newComment;
  cInput.value = "";
  cInput.focus();
}

// Register the event listener.
cBtn.addEventListener("click", addComment);
