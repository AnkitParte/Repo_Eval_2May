// write js code here corresponding to favourites.html
var allfav=JSON.parse(localStorage.getItem("favourites"))||[]

displayData(allfav);

function displayData(data){
    document.querySelector("tbody").innerHTML="";

    data.forEach(function(elem,index){
        //console.log(index);
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
        td6.innerText="Delete";
        td6.style.color="red";
        td6.style.cursor="pointer";
        td6.addEventListener("click",function(data,index){
            event.target.parentNode.remove();
            //deleteE(data,index)
        });

        row.append(td1,td2,td3,td4,td5,td6);

        document.querySelector("tbody").append(row);
    })
}
// function deleteE(arg,i){
//     arg.splice(i,1);
// }