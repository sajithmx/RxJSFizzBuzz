import { of, range, interval } from 'rxjs'; 
import { map, filter, tap, take, skip } from 'rxjs/operators';

console.clear();

let isFizz = (i) => !(i%3);
let isBuzz = (i) => !(i%5); 

// Attempt 3: Success
const source = interval(10);

source.pipe(
  skip(1),
  take(30),
  tap(x => isFizz(x) && console.log(`%cFizz ${x}`, 'font-weight: bold; color: red')),
  tap(x => isBuzz(x) && console.log(`%cBuzz ${x}`, 'font-weight: bold; color: green'))
).subscribe();

/* // Attempt 2: Success
const source = range(1, 15);

source.pipe(
  tap(x => isFizz(x) && console.log(`%cFizz ${x}`, 'font-weight: bold; color: red')),
  tap(x => isBuzz(x) && console.log(`%cBuzz ${x}`, 'font-weight: bold; color: green'))
).subscribe(); */

/* 
// Attempt 1: Partial
const source = range(0, 10);

source.pipe(
  filter(isFizz),
  map(x => `Fizz ${x}`)
).subscribe(x => console.log(x));

source.pipe(
  filter(isBuzz),
  map(x => `Buzz ${x}`)
).subscribe(x => console.log(x)); */