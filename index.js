document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector("form");
    const tableBody = document.querySelector("tbody");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      
      let name = document.getElementById("name").value;
      let DocID= document.getElementById("docID").value;
      let sp = document.getElementById("dept").value;
      let exp = document.getElementById("exp").value;
      let email = document.getElementById("email").value;
      let mbl = document.getElementById("mbl").value;
  
      if (name && DocID && sp && exp && email && mbl) {
        const newRow = document.createElement("tr");
  
        const newname = document.createElement("td");
        newname.textContent = name;
  
        const newDocID = document.createElement("td");
        newDocID.textContent = DocID;
  
        const newsp = document.createElement("td");
        newsp.textContent = sp;
  
        const newExp = document.createElement("td");
        newExp.textContent = exp;
  
        const newEmail = document.createElement("td");
        newEmail.textContent = email;
  
        const newMbl = document.createElement("td");
        newMbl.textContent = mbl;
  
        const newRole = document.createElement("td");
        newRole.textContent = getRole(exp);
  
        const newDelete = document.createElement("td");
        newDelete.style.backgroundColor = 'red';
        const deleteButton = document.createElement("button");
        deleteButton.textContent = 'Delete';
        deleteButton.style.backgroundColor='red';

        deleteButton.onclick = function() {
          const row = this.parentNode.parentNode;
          row.parentNode.removeChild(row);
        //   const  = this.parentNode.parentNode;
        };
        newDelete.appendChild(deleteButton);
  
        newRow.appendChild(newname);
        newRow.appendChild(newDocID);
        newRow.appendChild(newsp);
        newRow.appendChild(newExp);
        newRow.appendChild(newEmail);
        newRow.appendChild(newMbl);
        newRow.appendChild(newRole);
        newRow.appendChild(newDelete);
  
        tableBody.appendChild(newRow);
  
        document.getElementById("name").value = '';
        document.getElementById("docID").value = '';
        document.getElementById("exp").value = '';
        document.getElementById("exp").value = '';
        document.getElementById("email").value = '';
        document.getElementById("mbl").value = '';
      } else {
        alert('Please fill in all inputs');
      }
    });
  });
  function getRole(experience) {
    if (experience > 5) {
      return 'Senior';
    } else if (experience >= 2 && experience <= 5) {
      return 'Junior';
    } else {
      return 'Fresher';
    }
  }
  
  