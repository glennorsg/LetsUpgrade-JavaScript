window.onload = function(){
    var buses =[];
    
    if(localStorage.getItem("buses") == null) {
        localStorage.setItem("buses", JSON.stringify(buses));
    }
};

function display(busArray){
    let tdata="";
    let busInfo;
    if(busArray == undefined){
        busInfo = JSON.parse(localStorage.getItem("buses"));
    }
    else {
        busInfo = busArray;
    }
    busInfo.forEach(function(bus,index){
        let row=`<tr> 
        <td>${index+1}</td>
        <td>${bus.name}</td>
        <td>${bus.source}</td>
        <td>${bus.dest}</td>
        <td>${bus.number}</td>
        <td>${bus.passenger}</td>
        <td>${bus.capacity}</td>
        </tr>`;
        tdata += row;
    });

    document.getElementById("tdata").innerHTML = tdata;
};

display();

function searchBySource(){
    let searchVal = document.getElementById("source").value;
    let busInfo = JSON.parse(localStorage.getItem("buses"));
    var newData = busInfo.filter(function(bus){
        return (
            bus.source.toUpperCase().indexOf(searchVal.toUpperCase()) != -1
        )
    });
    display(newData);
}

function searchByDestination(){
    let searchVal = document.getElementById("dest").value;
    let busInfo = JSON.parse(localStorage.getItem("buses"));
    var newData = busInfo.filter(function(bus){
        return (
            bus.dest.toUpperCase().indexOf(searchVal.toUpperCase()) != -1
        )
    });
    display(newData);
};

function addBus(e){
    e.preventDefault();
    let bus = {};
    let busInfo = document.getElementsByClassName("busInfo");
    bus.name = busInfo[0].value;
    bus.source = busInfo[1].value;
    bus.dest = busInfo[2].value;
    bus.number = busInfo[3].value;
    bus.passenger = busInfo[4].value;
    bus.capacity = busInfo[5].value;

    let busArray = JSON.parse(localStorage.getItem("buses"));
    busArray.push(bus);
    localStorage.setItem("buses", JSON.stringify(busArray));

    display();

    document.getElementsByClassName("busInfo").forEach(function(info){
        info.value = "";
    });
}
