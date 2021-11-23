let changeColor = () => {
    let p = document.getElementById("blue-text");
    p.style.color = "green";
    p.innerHTML = "New content"
  }
  
  let changeText = () => {
    let div = document.getElementById("mouse-location");
    div.innerHTML = "Cursor in the box"
  }
  
  let resetText = () => {
    let div = document.getElementById("mouse-location");
    div.innerHTML = "Cursor is not inside the div"
  }
  
  let addIngredient = () => {
    let ul = document.getElementById("ingredients");
    let random = document.createElement("li");
    let ingredint = document.getElementById("newIngredient").value;
    console.log(ingredint);
    random.appendChild(document.createTextNode(ingredint));
    ul.appendChild(random);
  }