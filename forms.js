//get the element form to js
let form = document.getElementById("myForm");
//get the table element to js
let table = document.getElementById("mytable")
 //add an event listener
form.addEventListener("submit", function (event) {
    //prevent the page from refreshing
  event.preventDefault();
  // get form data
  let first_name = document.getElementById("first_name").value;
  let last_name = document.getElementById("last_name").value;
  let email = document.getElementById("email").value;
  //check if someone has inputted data
  if (first_name.length===0 || last_name===0 || email===0){
    document.getElementById('error').innerHTML="insert all inputs"
  }else{
      //create a new row and cell
  let newrow = table.insertRow();
  // insert cells for each piece of data
  let firstnamecell = newrow.insertCell(0);
  let lastnamecell = newrow.insertCell(1);
  let emailaddresscell = newrow.insertCell(2);
  //Input data into the cells
  firstnamecell.textContent = first_name;
  lastnamecell.textContent = last_name;
  emailaddresscell.textContent = email;
  //reset form:
  form.reset();
  }
  });
