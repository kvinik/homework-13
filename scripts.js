/* 1. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს
 ერთ მთელ რიცხვს და დააბრუნებს true -ს თუ რიცხვი
  არის ლუწი ან false -ს თუ რიცხვი არის კენტი.*/

let number = getRandomNumbers();
function oddOrEven (number){
    if (number % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(oddOrEven(number));


/*2. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს
 ორ რიცხვს - მართკუთხედის გვერდების ზომებს და 
 დააბრუნებს მართკუთხედის ფართობს.*/
let rectangleWidth = getRandomNumbers(); 
let rectangleHeight = getRandomNumbers();
function areaOfRectangle (a , b){
    let area = a * b 
    return area;
}
console.log(areaOfRectangle(rectangleWidth ,rectangleHeight ));



 /*3. დაწერეთ ფუქცია, რომელიც პარამეტრად მიიღებს ერთ რიცხვს 
  კვადრატის გვერდის სიგრძეს და დააბრუნებს კვადრატის ფართობს.
   ფართობის გამოსათვლელად გამოიყენეთ #2 პუნქტში აღწერილი ფუნქცია.*/

let squareSide = getRandomNumbers();
function squareArea(a){
     return areaOfRectangle (a , a);
}
console.log(squareArea(squareSide))

/*4. დაწერეთ ფუნქცია getRandomNumbers, რომელიც Math.random() 
ფუნქციის გამოყენებით დააგენერირებს და დააბრუნებს 0-დან 100-მდე 
შემთხვევით რიცხვს.*/

function getRandomNumbers(){
    let randomNumber = Math.round(Math.random() * 100);
    return randomNumber;
}
/*5. დაწერეთ ფუნქცია getRandomNumbersFromRange, 
რომელიც მიიღებს ორ რიცხვს პარამეტრად (a, b)  და
 დააბრუნებს შემთხვევით რიცხვს a -დან b -მდე შუალედში.*/

let min = 0;
let max = 100;
function getRandomNumbersFromRange (min , max){
    return Math.floor(
        Math.random() * (max - min + 1) + min
      )
}
console.log (getRandomNumbersFromRange (min , max))

/*6. დაწერეთ ფუნქცია generateRandomNumbersArray,
 რომელიც მიიღებს ერთ პარამეტრს (n - ნატურალური რიცხვი) 
 და დააბრუნებს n სიგრძის მასივს, რომელშიც იქნება 0-დან 100-მდე 
 შემთხვევითი რიცხვები. შემთხვევითი რიცხვის მისაღებად გამოიყენეთ 
 უკვე დაწერილი ფუნქცია getRandomNumbersFromRange. ფუნქციის მიერ 
 დაბრუნებული მასივი შეინახეთ ცვლადში randomNumbers*/
let n = Math.round(Math.random() * 100)
function generateRandomNumbersArray (n){
    let numberArray= [];
    for(let i = 0 ; i < n ; i++ ){
        numberArray.push(getRandomNumbersFromRange (min , max));
    }
    return numberArray;
}

let randomNumbers = generateRandomNumbersArray (n);

console.log(randomNumbers)




 /*7. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს generateRandomNumbersArray 
 ფუნქციის მიერ დაბრუნებულ მასივს randomNumbers, ამ მასივში იპოვის 
 და დააბრუნებს უდიდეს რიცხვს.*/

function highNumberInArray(n){ 
    let highNumber= 0;
    for(let i = 0 ; i < n.length ; i++){
      if(n[i] > highNumber){
          highNumber = n[i] ;
      }
  }
  return highNumber;
}
console.log(highNumberInArray(randomNumbers))
/*8* დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს
 ნატურალურ რიცხვს და დააბრუნებს true -ს თუ რიცხვი არის მარტივი,
  ან false -ს თუ რიცხვი არ არის მარტივი. მარტივია რიცხვი, რომელიც 
  მხოლოდ 1-ზე და თავისთავზე იყოფა. მარტივი რიცხვებია: 2, 3, 5, 7, 11 და ა.შ.*/
function simpleNumber(n){
    
  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(let x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }

}
console.log(simpleNumber(Math.round(Math.random() * 100)))

/*9* დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ორ რიცხვს (a, b) 
და დააბრუნებს მასივს, რომელშიც მოქცეული იქნება a -დან b -მდე ყველა 
მარტივი რიცხვი. მაგალითად თუ პარამეტრად მიიღებს 0 -ს და 12 -ს უნდა 
დააბრუნოს [2,3,5,7,11]. მარტივი რიცხვის დასადგენად გამოიყენეთ წინა პუნქტში აღწერილი ფუნქცია.*/

function generateSimpleNumberArrays(a , b){
    let simpleNumberArray = [];
    if(a == 0) {
        a++;
    }
    for(let i = a ; i< b ; i++){
       if(simpleNumber(i) == true)
       simpleNumberArray.push(i);
    }
    return simpleNumberArray;
}
console.log(generateSimpleNumberArrays(0 , 63))