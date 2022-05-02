// write js code here corresponding to index.html
// You should add submit event on the form
var form=document.querySelector("#masaiForm");
form.addEventListener("submit",matchmake)

var table=JSON.parse(localStorage.getItem("schedule")) || [];

function matchmake(){
    event.preventDefault();
    
 var obj={

    matchN : form.matchNum.value,
    teamA:form.teamA.value,
    teamB:form.teamB.value,
    date:form.date.value,
    venue:form.venue.value
 }

 table.push(obj);

 localStorage.setItem("schedule",JSON.stringify(table));

}