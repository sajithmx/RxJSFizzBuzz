import { of, range } from 'rxjs'; 
import { map, filter } from 'rxjs/operators';

console.clear();

let isFizz = (i) => !(i%3);
let isBuzz = (i) => !(i%5); 

const source = range(0, 10);

source.pipe(
  filter(isFizz),
  map(x => `Fizz ${x}`)
).subscribe(x => console.log(x));

source.pipe(
  filter(isBuzz),
  map(x => `Buzz ${x}`)
).subscribe(x => console.log(x));

/* source.pipe(
  filter(isFizz),
  map(x => `Fizz`)
).subscribe(x => console.log(x)); */

// source.subscribe(x => console.log(x));