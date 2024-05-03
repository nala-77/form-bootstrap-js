
const tableBody = document.querySelector(".table tbody")


const addRow = (fname, lname, exp, elementIndex) => {
    
    tableBody.insertAdjacentHTML("beforeend",
    `<tr>
    <th scope="row">${elementIndex}</th>
    <td >${fname}</td>
    <td>${lname}</td>
    <td>${exp}</td>
    <td>      
    <button onclick="deletebtn(event)"  class="btn btn-danger .delete-button">Delete</button>
    </td>

  </tr>`  
) 
}

const submit = document.querySelector(".add-btn")



let elementIndex = 0;
submit.addEventListener("click", () => {
    const firstName = document.querySelector(".first-name")
    const lastName = document.querySelector(".last-name")
    const experts = document.querySelector(".expertation")
    
    
    addRow(firstName.value, lastName.value, experts.value, elementIndex);
    
    elementIndex += 1;
    
    firstName.value = " "
    lastName.value = " "
    experts.value = " "
})
const deletebtn = (event) => {
    event.target.parentElement.parentElement.remove();
};