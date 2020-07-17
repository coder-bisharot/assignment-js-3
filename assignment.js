/* Assignment-3
  Name:Bisharot Ahmed
 email:ahamedbisharot@gmail.com
*/

// Problem number -1

function feetToMile(feet){
    if(feet > 0){
       var mile = feet / 5280;
    }
    else {
        console.log("This number is negative")
    }
    return mile;
}
var results = feetToMile(52800);
console.log(results);

// Problem number -2

function woodCalculator(chair, table, bed){
    if(chair < 0 || table < 0 || bed < 0){
        var totalWoodNeed = console.log(" This three things Length , Width & Height can't be Negative "); 
    }
    else{
        totalWoodNeed = chair + 3 * table + 5 * bed;
    }
    return totalWoodNeed;
}
var result = woodCalculator(10, 50, 70);
console.log(result);

// Problem number -3

function brickCalculator(numberOfBrick){
    var PartsOfFloor = numberOfBrick;
    if(PartsOfFloor <= 10){
        var totalNumberOfBrick = PartsOfFloor * 15 * 1000;
    }
    else if( PartsOfFloor > 10 && PartsOfFloor <=20){
        totalNumberOfBrick = (PartsOfFloor - 10) * 12 * 1000 + 10 * 15 * 1000;
    }
    else if(PartsOfFloor > 20){
        totalNumberOfBrick = 10 * 12 * 1000 + 10 * 15 * 1000 + (PartsOfFloor - 20) * 10 * 1000;
    }
    else{
        console.log("Given Number is Negative");
    }
    return totalNumberOfBrick;
}
var result = brickCalculator(9);
console.log(result);


// Problem number -4:

function tinyFriend(Name){
    let littleName = Name[0];
    for(let i = 0; i < Name.length; i++){
        let element = Name[i];
        if(element > littleName){
            littleName = element;
        }
    }
    return littleName;
}
let littleFriendName = tinyFriend(["Mahadi", "HasibKhan","ro", "Muktokhan", "AsanulHque", "mun", "AsadulZamman"]);
console.log(littleFriendName);