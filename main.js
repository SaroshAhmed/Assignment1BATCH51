"use strict";
//Q1-2 save variable and print a message
var myname = "Sarosh";
//console.log("Hello ", Name, "Would you like to learn typescript today?" )
//Q3
//console.log(myname.toUpperCase(), myname.toLowerCase())
//Q4-Q5
var famous = "Agent Micheal Scarn";
var quote = '"you miss 100% of the shots you dont take"';
//console.log(famous, " once said in Michael Scott Paper Company ", quote)
//Q6
//console.log("WIHOUT SPACES", myname)
//console.log("WITH SPACES", "\t", myname, "\n")
//Q7-Q8
var add = 7 + 1;
var sub = 9 - 1;
var mul = 8 * 1;
var divide = 8 / 1;
//console.log ("7+1 = ", add, "\n","9-1= ",sub, "\n", "8*1= ",mul,"\n", "8/1=", divide)
//Q9
var favnum = 9;
//console.log("fav number is *drum rolls ",favnum)
//Q10
/*COMMENTS ADDED
IN BOTH LINES*/
//Q11
var bffs = ["hammad", "sohaib", "usama", "hamza"];
//console.log(bffs[0], "\n",bffs[1], "\n",bffs[2], "\n", bffs[3], "\n",)
//Q12
/*console.log("Message for", bffs[0],"stop watching Andrew Tate", "\n",
"Message for", bffs[1], "stop wining all the time", "\n","Message for",bffs[2],"You are anmic bro",
"\n","Message for", bffs[3], "Please take our business seriously")*/
//Q13
var cars = ["Tesla", "Ford GT"];
/*console.log("I want a ", cars[0],"because it is smart and a car towards a better future", "\n",
"I would like a ", cars[1], "it is just cool idk")*/
//Q14
var invites = ["Hira", "Mom", "Dad"];
/*console.log("Dear ", invites[0],"You are invited to my humble party held at my place", "\n",
"Dear ", invites[1],"You are invited to my humble party held at my place", "\n",
"Dear ", invites[2],"You are invited to my humble party held at my place", "\n")*/
//Q15
var invites = ["Hira", "Mom", "Dad"];
invites[0] = "Shazil";
/*console.log("unfortunately Hira wont be joining us \n","Dear ", invites[0],"You are invited to my humble party held at my place", "\n",
"Dear ", invites[1],"You are invited to my humble party held at my place", "\n",
"Dear ", invites[2],"You are invited to my humble party held at my place", "\n")*/
//Q16
var invites = ["Hira", "Mom", "Dad"];
invites[0] = "Shazil";
invites.push("Anas");
invites.splice(0, 0, "Sis");
/*function Invi(){
    for (var a = 0; a<invites.length; a++)
    console.log("Dear ", invites[a],"You are invited to my humble party held at my place, I have found 2 more tables",)
}
Invi()*/
//Q17
function Invi17() {
    for (var b = invites.length; b >= 2; b--)
        invites.splice(b, 1);
}
Invi17();
/*console.log("Since our reservation has been cancelled, I can invite only two people now! SORRY!",
        "The invited people are \n", "Dear ", invites,"You are invited to my humble party held at my place")
console.log(invites)*/
//Q18
var places = ["Russia", "Sweden", "Greenland", "Italy", "Vegas"];
//console.log(places)
var alphasorted = places.sort();
//console.log(alphasorted)
var alphareversed = places.reverse();
//console.log (alphareversed)
var alpharevrev = alphareversed.reverse();
//console.log (alpharevrev)
//Q19
//console.log(invites.length)
//Q20
var arrlist = ["Belarus", "Mongolia", "Ukraine", "Chechnia", "Poland"];
//console.log(arrlist)
//Q21-Q22
//let newobject = {Name: "Sarosh", Age:26, Designation:"CEO"}
//console.log(newobject)
//Q23
var cond = Boolean(8 > 9);
//console.log("Is 8 greater than 9?, I predict False", cond)
//Q24
//var condtwo = Boolean(newobject.Age===26) 
//console.log("Is my age 26?, I predict True", condtwo)
var Q24array = ["Milo", "Sarosh", "Acer", "Samsung"];
var condthree = Boolean(Q24array[0] != Q24array[2] && Q24array[2] != Q24array[1]);
//console.log(condthree)
//Q25
var alien_color_pass = "Blue";
if (alien_color_pass === "Blue") {
    //console.log("+100$, +5 street Cred")
}
else {
    //console.log("INCORRECT")
}
var alien_color_fail = "Blue";
if (alien_color_fail != "Blue") {
    //console.log("CORRECT")
}
else {
    //    console.log("FAIL")
}
//Q26
var alien_color_26 = "Green";
if (alien_color_26 === "Green") {
    //console.log("You earned 5 points")
}
else {
    //console.log("You earned 10 points")
}
//Q27
var alien_color_27 = "Red";
if (alien_color_27 === "Green") {
    // console.log("You earned 15 points")
}
else if (alien_color_27 === "Yellow") {
    //  console.log("You earned 25 points")
}
else if (alien_color_27 === "Red") {
    //  console.log("You earned 50 points")
}
else {
    // console.log("You earned 0 points")
}
//Q28 & Q31
var age_28 = 2;
/*if (age_28<2){
    console.log("Person is a baby")
}
else if (age_28===2||age_28<4){
    console.log("Person is a toddler")
}
else if (age_28===4||age_28<13){
    console.log("Person is a kid")
}
else if (age_28===13||age_28<20){
    console.log("Person is a teen")
}
else if (age_28===20||age_28<65){
    console.log("Person is a adult")
}
else if (age_28===65||age_28<100){
    console.log("Person is a old")
}
else{
    console.log("RIP")
}*/
//Q29
var fav_fruits = ["apple", "orange", "grapes"];
/*if (fav_fruits[0]!="grapes"){
    if(fav_fruits[0]==="apple"){
    if(fav_fruits[1]==="orange"){
    if(fav_fruits[2]==="grapes"){}}
    console.log("you like dem apples")
}}
else{
    console.log("you dont like fruits")
}*/
//Q30
/*var greetings = ["admin", "sarosh", "hira", "milo", "hamza"]
console.log("Greetings Greetings ADMIN, would you like a status report")
for (var c=1; c<greetings.length; c++){
    
    console.log("Greetings ", greetings[c], " welcome to the website")
}*/
//Q32
/*var current_user = ["Sarosh", "Milo", "Hamza", "Hira","Shazil"]
var new_user = ["SAROSh", "Basit", "Hira", "Milo", "Hammad"]
for (var d = 0; d<current_user.length; d++){
    current_user[d].toUpperCase
    for (var e = 0; e< new_user.length; e++){
        new_user[e].toUpperCase
        if (current_user[d]===new_user[e]){
            console.log("User ", new_user[e], " already exists")
        }
        
    }
}*/
//Q33
/*var ordinal = [1,2,3,4,5,6,7,8,9]
for (var f = 0; f<ordinal.length; f++){
    if (ordinal[f]===1){
        console.log(ordinal[f],"st")
    }
    else if (ordinal[f]===2){
        console.log(ordinal[f],"nd")
    }
    else if (ordinal[f]===3){
        console.log(ordinal[f],"rd")

    }
    else{
        console.log(ordinal[f], "th")
    }
}*/
//Q34
/*var pizza = ["pepperoni", "fajita", "cheese"]
for (var g = 0; g<pizza.length; g++){
    if (pizza[g]===pizza[0]){
        console.log("I love ", pizza[g], "as it has tons of pepporoni i guess")
    }
    else if (pizza[g]===pizza[1]){
        console.log("I love ", pizza[g], "as fajita is a traditional flavor and can never go wrong")
    }
    else if (pizza[g]===pizza[2]){
        console.log("I love ", pizza[g], "because who doses not love all cheese")
    }
}
console.log(" I LIKE PIZZA! I AM OBESE")*/
//Q35
/*var animals = ["cat", "dog", "Bakra"]
for (var h = 0; h<animals.length; h++){
    if (animals[h]===animals[0]){
        console.log("A ", animals[h], "makes a great pet, as I have one named Milo and he is da best boy")
    }
    else if (animals[h]===animals[1]){
        console.log("A ", animals[h], "is good pet too, they guard your home and provide unconditional love")
    }
    else if (animals[h]===animals[2]){
        console.log("A little ", animals[h], "is cute and a good pet, requires less maintenance")
    }
}
console.log(" THE ABOVE ANIMALS MAKES GREAT PET")*/
//Q36
/*function shirt(size:any, message:any){

return console.log("Size of shirt",size,"Message on Shirt",message)

}
shirt("XXL", "Hello")*/
//37
/*function make_shirt(sizes:any, messages:any){

    return console.log("Size of Shirt", sizes,"Message of shirt", messages)
}
for (var i = 1; i<4; i++){
    if(i==1){
        make_shirt("L", "I love Typescript")
    }
    if(i==2){
    make_shirt("M", "I Love Typescript")
    }
    if(i==3){
        make_shirt("XXL","Typescript ans Javascript are the same")
    }
}*/
//Q38-Q39
/*function describe_city(city:any, country:any, mess:any){
    return console.log(city, ",", country, "\n", mess)
    
}

for (var j = 0; j<3; j++){
    if (j==0){
        describe_city("Karachi", "Pakistan", "the heart of Pakistan, located at the sea port")
    }
    if (j==1){
        describe_city("Sydney", "Australia", "a beautiful city with beautiful people and scenic views")
        
    }
    if (j==2){
        describe_city("Vegas", "USA", "An exciting and adventerous place")
    }
}*/
//40
/*function make_album(artist:any, album:any, tracks:any){
    return console.log(artist," ",album, "No of tracks", tracks)
}
for (var k = 0; k<3; k++){
    if (k==0){
        make_album("Radiohead", "Amnesiac", 11)
    }
    if (k==1){
        make_album("Pink Floyd", "The Dark Side of the Moon", 8)
        
    }
    if (k==2){
        make_album("Daft Punk", "Random Access Memories", 6)
    }
}*/
//41
/*
var magicians = ["Copperfield", "Hodini","Angels"]
function show_magicians(){

for (var l = 0; l<3; l++)
    {
        console.log("Magicians = ", magicians[l])
        show_magicians()
    }
}*/
//Q42-Q43
/*var magicians_Q42 = ["Copperfield", "Hodini","Angels"]
function show_magicians_Q42(){
}
function great_magicians_Q42(message:any){
console.log(message)
}
for (var l = 0; l<3; l++)
    {   great_magicians_Q42("Great")
        console.log("Magicians = ", magicians_Q42[l])
        show_magicians_Q42()
    }*/
//Q44
/*
var item_arr = ["lettuce", "tomatoes", "onions"]
function sandwich(item:any){
    console.log("Order for sandwich with extra",item ,"Hurry!")
}
for (var m = 0; m<3; m++)
{
    sandwich(item_arr[m])
}*/
//Q45
var n = 0;
var opt_color = ["Red", "Green"];
var opt_fuel = ["Electric", "Petrol"];
const car = {
    car_name: "Tesla Model X",
    make: "Tesla",
    eng_num: 24154,
    details: function (color, fuel) {
        if (n == 0) {
            return console.log("Name:\n" + this.car_name + "Company:\n" + this.make + "EN No: " + this.eng_num + " color:\n"
                + opt_color[n] + "fuel type:\n" + opt_fuel[n]);
        }
        else if (n == 1) {
            return console.log("Name:\n" + this.car_name + "Company:\n" + this.make + "EN No: " + this.eng_num + " color:\n"
                + opt_color[n] + "fuel type:\n" + opt_fuel[n]);
        }
    }
};
car.details(opt_color, opt_fuel);
