import { of, range, interval, merge, asyncScheduler } from 'rxjs';
import { map, filter, tap, take, skip, mapTo } from 'rxjs/operators';

console.clear();

let isFizz = (i) => !(i % 3);
let isBuzz = (i) => !(i % 5);

// Attempt 6: Success
const source = range(1, 15, asyncScheduler);

const fizz = source.pipe(
  filter(isFizz),
  tap(x => console.log(`%cFizz ${x}`, 'font-weight: bold; color: red')),
  map(x => `%cFizz ${x}`)
);

const buzz = source.pipe(
  filter(isBuzz),
  tap(x => console.log(`%cBuzz ${x}`, 'font-weight: bold; color: green')),
  map(x => `%cBuzz ${x}`)
);

merge(fizz, buzz)
  .subscribe(x => {
    console.log(`${x}`, 'font-weight: bold; color: blue');
    console.log('');
  });

/* // Attempt 5: Partial
const source = range(1, 15);

const fizz = source.pipe(
  filter(isFizz),
  tap(x => console.log(`%cFizz ${x}`, 'font-weight: bold; color: red')),
  map(x => `%cFizz ${x}`)
);

const buzz = source.pipe(
  filter(isBuzz),
  tap(x => console.log(`%cBuzz ${x}`, 'font-weight: bold; color: green')),
  map(x => `%cBuzz ${x}`)
);

merge(fizz, buzz)
  .subscribe(x => {
    console.log(`${x}`, 'font-weight: bold; color: blue');
    console.log('');
  }); */

/* // Attempt 4: Success
const source = interval(10);

const fizz = source.pipe(
  filter(isFizz),
  // tap(x => console.log(`%cFizz ${x}`, 'font-weight: bold; color: red')),
  map(x => `%cFizz ${x}`)
);

const buzz = source.pipe(
  filter(isBuzz),
  // tap(x => console.log(`%cBuzz ${x}`, 'font-weight: bold; color: green')),
  map(x => `%cBuzz ${x}`)
);

merge(fizz, buzz)
  .pipe(take(20))
  .subscribe(x => console.log(`${x}`, 'font-weight: bold; color: blue')); */

/* // Attempt 3: Success
const source = interval(10);

source.pipe(
  skip(1),
  take(30),
  tap(x => isFizz(x) && console.log(`%cFizz ${x}`, 'font-weight: bold; color: red')),
  tap(x => isBuzz(x) && console.log(`%cBuzz ${x}`, 'font-weight: bold; color: green'))
).subscribe(); */

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