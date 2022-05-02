// write js code here corresponding to matches.html
var table=JSON.parse(localStorage.getItem("schedule"))

var fav=JSON.parse(localStorage.getItem("favourites")) || [];

displayData(table);

function displayData(data){
    document.querySelector("tbody").innerHTML="";

    data.forEach(function(elem){

        var row=document.createElement("tr");


        var td1=document.createElement("td");
        td1.innerText=elem.matchN;

        var td2=document.createElement("td");
        td2.innerText=elem.teamA

        var td3=document.createElement("td");
        td3.innerText=elem.teamB

        var td4=document.createElement("td");
        td4.innerText=elem.date

        var td5=document.createElement("td");
        td5.innerText=elem.venue

        var td6=document.createElement("td");
        td6.innerText="Add to favorite";
        td6.style.color="red";
        td6.style.cursor="pointer";
        td6.addEventListener("click",favorite(elem));

        row.append(td1,td2,td3,td4,td5,td6);

        document.querySelector("tbody").append(row);
    })
}

function favorite(arg){
    fav.push(arg);
    localStorage.setItem("favourites",JSON.stringify(fav));

}

function filterV(){
    var selected = document.querySelector("#filterVenue").value;
    table.filter(function(elem){
        if(elem.venue==selected){
            return elem;
        }
    })
    displayData(table);

    
 
}