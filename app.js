// function showRating(rating) {
//     let ratings = '';
//     for (let i = 0; i < Math.floor(rating); ++i) {
//         ratings += '*';
//         if (i !== Math.floor(rating) - 1) {
//             ratings += ' ';
//         }

//     }
//     if (!Number.isInteger(rating)) {
//         ratings += ' .';
//     }
//     return ratings;

// }

// console.log(showRating(3.5));

// /* code below is Practise */
// function showRating(rating) {
//     let ratings = '';
//     for (let i = 0; i < Math.floor(rating); ++i) {
//         ratings += '*';
//         if (i !== Math.floor(rating) -1) {
//             ratings += ' ';
//         }
//     }
//     if (!Number.isInteger(rating)) {
//         ratings += ' .'
//     }
//     return ratings;

// }
// console.log(showRating(2.5));

/* The code below is how you code numbers from the smallest to largest.*/
// function lowToHigh(arr) {
//     /* The '.sort()' function sorts the value 'alphabeticaly', to sort out your
//     numeric value, use the code below e.g;((a, b) => a, b) */
//     return arr.sort((a, b) => a - b);
// }
// console.log(lowToHigh([1, 5, 8, 10, 4]));

// function sortHighToLow(arr) {
//     /** the code below is how you sort-out objects
//      * Remember; you need to get the property ".price" your
//      * iterating over
//      */
//     return arr.sort((a, b) => b.price - a.price)
//     }
// console.log(
//   sortHighToLow([
//     { id: 1, price: 50 },
//     { id: 2, price: 0 },
//     { id: 3, price: 500 },
//   ])
// );

console.log('person1:shows ticket');
console.log('person2:shows ticket');

const promisWifeBringingTicket = new Promise((resoleve, reject) => {
    setTimer(() => {
        resoleve('ticket');
    }, 3000)
})

console.log(promisWifeBringingTicket)
