 function setAlarm(employed,vacationing){
     if((employed===true) && (vacationing===false)){
         return true
     }else{
         return false
     }
}
console.log(setAlarm(true,true))
console.log(setAlarm(false,false))
console.log(setAlarm(false,true))
console.log(setAlarm(true,false))
/////////////////////////////////////
//Count Odd Numbers
////////////////////////////////////
function oddNumberberCount(oddNum){
    for(let i=1;i < oddNum; i++){
        if(i % 2 !== 0){
            console.log(i)
        }
    }
}
oddNumberberCount(7)
oddNumberberCount(16)
/////////////////////////////////////
//Disemvoweling Trolls
////////////////////////////////////
function trollsBeGone(str) {
  const noVowels = str.replace(/[aeiou]/gi, "");
  return noVowels
}


console.log(trollsBeGone("haleh bozorgnia"))
///////////////////////////////////
//Bank Account Summary
//////////////////////////////////
const bankInfo={
    savings:10,
    checking:30,
    moneyMarket:30,
    creditCard:40,
}
function bankAccountSummary(bankInfo){
    let total = bankInfo.savings + bankInfo.checking + bankInfo.moneyMarket + bankInfo.creditCard
    return total

}
let bankTotal= bankAccountSummary(bankInfo)
console.log(bankTotal)

function inTheRed(bankTotal){
    if(bankTotal<0){
        return true
    }else{
        return false
    }
}
console.log(inTheRed())
//////////////////////////
//MadLibs
//////////////////////////