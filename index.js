let names=["Guadalupe", "Ollie", "Aki"];
let giftType= "Surprise";


function writeCards(names, giftType) {
    const thankYouMessages = []
    for (let n = 0; n < names.length; n++) {
        let message = `Thank you, ${names[n]}, for the wonderful ${giftType} gift!`
        thankYouMessages.push(message)
    };
    return thankYouMessages
};

let positiveNumber= 10;
function countDown(positiveNumber){
    while (positiveNumber>=0){
        console.log (positiveNumber--);
    }
}
