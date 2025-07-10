# Exercise 14 - Fibonacci

Create a function that returns a specific member of the Fibonacci sequence:

> A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers.
> In this exercise, the Fibonacci sequence used is 1, 1, 2, 3, 5, 8, etc.
> To learn more about Fibonacci sequences, go to: <https://en.wikipedia.org/wiki/Fibonacci_sequence>

```javascript
fibonacci(4); // returns the 4th member of the series: 3  (1, 1, 2, 3)
fibonacci(6); // returns 8
```

1. Takes a number as an argument
2. Generates the fibonacci sequence starting at 1, going up to the argument

-

function
if (i < 2) return i;
let sequence = [0, 1];
for (let i = 2; i <= n; i++)
let nextNum = sequence[i - 1] + sequence[i - 2];
sequence.push(nextNum);

return sequence[n];
