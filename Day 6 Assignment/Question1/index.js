let employees =[
    {
        name:"Glenn",
        age: 22,
        city: "Pune",
        salary: 21000.00
    },
    {
        name:"Siddharth",
        age: 25,
        city: "Nagpur",
        salary: 27000.00
    },
    {
        name:"Noella",
        age: 24,
        city: "Pune",
        salary: 21000.00
    },
    {
        name:"Khuzaan",
        age: 23,
        city: "Mumbai",
        salary: 24000.00
    },
    {
        name:"Mathew",
        age: 24,
        city: "Chennai",
        salary: 28000.00
    }
];

function display(empArray){
    let tdata="";
    empArray.forEach(function(emp,index){
        let row=`<tr> 
        <td>${index+1}</td>
        <td>${emp.name}</td>
        <td>${emp.age}</td>
        <td>${emp.city}</td>
        <td>${emp.salary}</td>
        <td><button onclick='deleteEmployee(${index})'>Delete</button></td>
        </tr>`;
        tdata += row;
    });

    document.getElementById("tdata").innerHTML = tdata;
};

display(employees);

function deleteEmployee(index){
    employees.splice(index,1);
    display(employees);
};
function searchByName(){
    let searchVal = document.getElementById("empName").value;

    var newData = employees.filter(function(emp){
        return (
            emp.name.toUpperCase().indexOf(searchVal.toUpperCase()) != -1
        )
    });
    display(newData);
}

function searchByCity(){
    let searchVal = document.getElementById("empCity").value;

    var newData = employees.filter(function(emp){
        return (
            emp.city.toUpperCase().indexOf(searchVal.toUpperCase()) != -1
        )
    });
    display(newData);
}

