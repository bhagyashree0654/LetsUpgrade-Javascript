//blank array
window.onload = function () {
    let initBuses = [ ];
  
    if (localStorage.getItem("buses") == null) {
      localStorage.setItem("buses", JSON.stringify(initBuses));
    }
  };
  //display
  function display(superBusArray = undefined) {
    let tabledata = "";
    let buses;
    if (superBusArray == undefined) {
      buses = JSON.parse(localStorage.getItem("buses"));
    } else {
      buses = superBusArray;
    }
    buses.forEach(function (bus, index) {
      let currentrow = `<tr>
        <td>${index + 1}</td>
        <td>${bus.name}</td>
        <td>${bus.source}</td>
        <td>${bus.destination}</td>
        <td>${bus.busNo}</td>
        <td>${bus.capacity}</td>
        </tr>`;
      tabledata += currentrow;
    });
    document.getElementsByClassName("tbldata")[0].innerHTML = tabledata;
  }
  
//add bus details
function addBus(e){
    e.preventDefault();
  let bus = {};
  let name = document.getElementById("name").value;
  let source = document.getElementById("source").value;
  let destination = document.getElementById("destination").value;
  let busNo = document.getElementById("busNo").value;
  let capacity=document.getElementById("capacity").value;
  bus.name = name;
  bus.source=source;
  bus.destination=destination;
  bus.busNo=busNo;
  bus.capacity = Number(capacity);
  let buses = JSON.parse(localStorage.getItem("buses"));
  buses.push(bus);
  localStorage.setItem("buses", JSON.stringify(buses));

display();
document.getElementById("name").value="";
document.getElementById("source").value="";
document.getElementById("destination").value="";
document.getElementById("busNo").value="";
document.getElementById("capacity").value="";

}
display();
//search by source and destination
  function searchSourceToDestination() {
    let searchsrc = document.getElementById("searchSource").value;
    let searchdest = document.getElementById("searchDestination").value;
    let buses = JSON.parse(localStorage.getItem("buses"));
    let newdata = buses.filter(function (bus) {
      return (
        bus.source.toUpperCase().indexOf(searchsrc.toUpperCase()) != -1 &&  bus.destination.toUpperCase().indexOf(searchdest.toUpperCase()) != -1
      );
    });
  
    display(newdata);

  }