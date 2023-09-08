if (document.readyState !== "loading") {
  console.log("Document is ready!");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is ready after waiting!");
    initializeCode();
  });
}

function initializeCode() {
  const myButton = document.getElementById("my-button");
  const addButton = document.getElementById("add-data");

  myButton.addEventListener("click", function () {
    console.log("Hello world");
    document.getElementsByClassName("pagetitle")[0].innerHTML = "Moi maailma";
  });

  addButton.addEventListener("click", function () {
    var ul = document.getElementById("List");
    var li = document.createElement("li");
    var message = document.getElementById("message").value;
    li.appendChild(document.createTextNode(message));
    ul.appendChild(li);
  });
}
