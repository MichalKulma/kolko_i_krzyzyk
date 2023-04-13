var licznik=0
var kolor="green"

var plansza=[
    [],
    [],
    []
]


function znak(id){
    licznik++
    
var znaczek


var intId=parseInt(id)-1


    if(licznik%2==0){
        znaczek="O"
}
else znaczek="X"
    
if(kolor=="green"){
kolor="blue"
}
else if(kolor=="blue"){
    kolor="green"
}

if(intId<3) plansza[0][intId] =znaczek
if(intId<6 && intId>2) plansza[1][intId%3] =znaczek
if(intId>=6) plansza[2][intId%3] =znaczek


document.getElementById(id).removeAttribute("onclick")
   // document.getElementById(id).innerHTML=znaczek
    document.getElementById(id).style.backgroundColor=kolor

console.log(plansza)
czyWygrana()
generujPlansze()
}

function czyWygrana(){
    for(let i=0;i<=2;i++){
        if(plansza[i][0]==plansza[i][1] && plansza[i][0]==plansza[i][2] && plansza[i][0]!=undefined){
            console.log("koniec")
    blokujPlansze()
        }
    }

    for(let i=0;i<=2;i++){
        if(plansza[0][i]==plansza[1][i] && plansza[0][i]==plansza[2][i] && plansza[0][i]!=undefined){
            console.log("koniec")
            blokujPlansze()
        }
         if(plansza[0][2]==plansza[1][1] && plansza[1][1]==plansza[2][0] && plansza[2][0]!=undefined){
             console.log("koniec")
             blokujPlansze()
         }
         if(plansza[0][0]==plansza[1][1] && plansza[1][1]==plansza[2][2] && plansza[2][2]!=undefined){
            console.log("koniec")
            blokujPlansze()
         }
    }
    
}

function blokujPlansze(){
    
    for(let i=1;i<=9;i++){
        document.getElementById(i.toString()).removeAttribute("onclick")
    }
}


function generujPlansze(){
    var licznik2=1
    for(let i=0;i<=2;i++){

        for(let j=0;j<=2;j++){
            console.log(plansza[i][j])

            if(plansza[i][j]!=undefined){
            document.getElementById(licznik2.toString()).innerHTML=plansza[i][j]
        }
        licznik2++
    }
}
}