document.getElementById('employeeForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const empname = document.getElementById('empname').value.trim();
    const empemail = document.getElementById('empemail').value.trim();
    const empnumber = document.getElementById('empnumber').value.trim();
    const empaddress = document.getElementById('empaddress').value.trim();
    const empsalary = document.getElementById('empsalary').value.trim();

    if (!empname || !empemail || !empnumber || !empaddress || !empsalary) {
        alert("Please fill all the fields.");
        return;
    }

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
      <strong>🎉 Employee Registered Successfully!</strong><br><br>
      <strong>Name:</strong> ${empname}<br>
      <strong>Email:</strong> ${empemail}<br>
      <strong>Phone:</strong> ${empnumber}<br>
      <strong>Address:</strong> ${empaddress}<br>
      <strong>Salary:</strong> ₹${empsalary};`


    document.getElementById('employeeForm').reset();

    console.log (empname) ;
    console.log (empemail) ;
    console.log (empnumber) ;
    console.log (empaddress) ;
    console.log (empsalary) ;
    
});
