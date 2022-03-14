const inquirer = require("inquirer");
const shell = require("shelljs");
const anim = require("chalk-animation");

// Inroduction
anim.rainbow("Welcome to advanced calculator");
function main() {
  setTimeout(() => {
    console.log("\n");
    // first list
    inquirer
      .prompt([
        {
          type: "list",
          name: "Options",
          message: "What do you wnant to do?",
          choices: ["1) fibonacci", "2) prime", "3) AP", "4) palindrome" , "5) exit"] //options
        }
      ])
      .then((answer) => {
        switch (
          answer.Options //check for user intentions
        ) {
          case "1) fibonacci":
            fibonacci();
            break;
          case "2) prime":
            prime();
            break;
          case "3) AP":
            AP();
            break;
          case "4) palindrome":
            palindrome();
            break;
          case "5) exit":
            anim.rainbow("Thank you for using advanced calculator");
            setTimeout(() => {
              shell.exit(0);
            }, 1000);
        }
      });
  }, 1000);
}
main();

const fibonacci = () => {
  // second list
  inquirer
    .prompt([
      {
        type: "list",
        name: "Options",
        message: "What do you wnat to do?",
        choices: [
          "1) Sum of first n fibonacci numbers",
          "2) First n fibonacci",
          "3) All fibonacci betweeen 0 and n",
          "4) nth fibonacci number"
        ] //options
      },
      {
        name: "n",
        type: "input",
        message: "Value of n?"
      }
    ])
    .then((answer) => {
      function fibonacci(n) {
        /* Declare an array to store Fibonacci numbers. */
        let f = new Array(n + 2); // 1 extra to handle case, n = 0
        let i;
        /* 0th and 1st number of the series are 0 and 1*/
        f[0] = 0;
        f[1] = 1;
        for (i = 2; i <= n; i++) {
          /* Add the previous 2 numbers in the series
          and store it */
          f[i] = f[i - 1] + f[i - 2];
        }
        return f[n];
      }
      switch (
        answer.Options //check for user intentions
      ) {
        case "1) Sum of first n fibonacci numbers":
          // find sum of first n fibonacci numbers
          let sum = 0;
          let n = parseInt(answer.n);
          for (let i = 0; i < n; i++) {
            sum += fibonacci(i);
          }
          answerAndReturn(sum.toString());
          break;
        case "2) First n fibonacci":
          //find first n fibonacci numbers
          let fibonacciArray = [];
          let n1 = parseInt(answer.n);
          for (let i = 0; i < n1; i++) {
            fibonacciArray.push(fibonacci(i));
          }
          answerAndReturn(fibonacciArray.toString());
          break;
        case "3) All fibonacci betweeen 0 and n":
          //find all fibonacci numbers between 0 and n
          let fibonacciArray1 = [];
          let n2 = parseInt(answer.n);
          let i = 0;
          while (true) {
            let fn = fibonacci(i);
            if (fn > n2) break;
            fibonacciArray1.push(fn);
            i++;
          }
          answerAndReturn(fibonacciArray1.toString());
          break;
        case "4) nth fibonacci number":
          //find nth fibonacci number
          let n3 = parseInt(answer.n);
          answerAndReturn(fibonacci(n3).toString());
          break;
      }
    });
};

const prime = () => {
  // third list
  inquirer
    .prompt([
      {
        type: "list",
        name: "Options",
        message: "What do you wnat to do?",
        choices: [
          "1) Prime numbers between 0 and n",
          "2) nth prime number",
          "3) Is n prime number",
          "4) First n prime numbers",
          "5) Sum of first n prime numbers"
        ]
      },
      {
        name: "n",
        type: "input",
        message: "Value of n?"
      }
    ])
    .then((answer) => {
      function isPrime(n) {
        if (n <= 1) return false;
        for (let i = 2; i < n; i++) {
          if (n % i == 0) return false;
        }
        return true;
      }
      switch (
        answer.Options //check for user intentions
      ) {
        case "1) Prime numbers between 0 and n":
          //find all prime numbers between 0 and n
          let primeArray = [];
          let n = parseInt(answer.n);
          for (let i = 0; i <= n; i++) {
            if (isPrime(i)) primeArray.push(i);
          }
          answerAndReturn(primeArray.toString());
          break;
        case "2) nth prime number":
          //find nth prime number
          let n1 = parseInt(answer.n);
          let prime = 0;
          let i = 0;
          while (true) {
            if (isPrime(i)) prime++;
            if (prime == n1) {
              answerAndReturn(i.toString());
              break;
            }
            i++;
          }
          break;
        case "3) Is n prime number":
          //find if n is prime number
          let n2 = parseInt(answer.n);
          answerAndReturn(isPrime(n2).toString());
          break;
        case "4) First n prime numbers":
          //find first n prime numbers
          let primeArray1 = [];
          let n3 = parseInt(answer.n);
          var i1 = 0;
          while (true) {
            if (isPrime(i1)) primeArray1.push(i1);
            i1++;
            if (primeArray1.length == n3) break;
          }
          answerAndReturn(primeArray1.toString());
          break;
        case "5) Sum of first n prime numbers":
          //find sum of first n prime numbers
          let sumcounter = 0;
          let sum = 0;
          let n4 = parseInt(answer.n);
          var i2 = 0;
          while (true) {
            if (isPrime(i2)) {
              sum += i2;
              sumcounter++;
            }
            i2++;
            if (sumcounter == n4) break;
          }
          answerAndReturn(sum.toString());
          break;
      }
    });
};

const AP = () => {
  // fourth list
  inquirer
    .prompt([
      {
        type: "list",
        name: "Options",
        message: "What do you wnat to do?",
        choices: ["1) Find T(n)", "2) Find S(n)"]
      },
      {
        name: "n",
        type: "input",
        message: "Value of n?"
      },
      {
        name: "a",
        type: "input",
        message: "Value of a?"
      },
      {
        name: "d",
        type: "input",
        message: "Value of d?"
      }
    ])
    .then((answer) => {
      let n = parseInt(answer.n);
      let a = parseInt(answer.a);
      let d = parseInt(answer.d);
      switch (answer.Options) {
        case "1) Find T(n)":
          //find T(n)
          answerAndReturn(a + (n - 1) * d);
          break;
        case "2) Find S(n)":
          answerAndReturn(n/2 * (2 * a + (n - 1) * d));
          break;
      }
    });
};

const palindrome = () => {
  // fifth list
  inquirer
    .prompt([
      {
        type: "list",
        name: "Options",
        message: "What do you wnat to do?",
        choices: ["1) Is n a palindrome", "2) First n palindromes"]
      },
      {
        name: "n",
        type: "input",
        message: "Value of n?"
      }
    ])
    .then((answer) => {
      let n = parseInt(answer.n);
      let n1 = n.toString();
      let n2 = n1.split("").reverse().join("");
      switch (answer.Options) {
        case "1) Is n a palindrome":
          //check if n is a palindrome
          answerAndReturn(n1 == n2);
          break;
        case "2) First n palindromes":
          //find first n palindromes
          let palindromeArray = [];
          var i = 0;
          while (true) {
            let palindrome = i.toString();
            if (palindrome == palindrome.split("").reverse().join("")) {
              palindromeArray.push(palindrome);
            }
            i++;
            if (palindromeArray.length == n) break;
          }
          answerAndReturn(palindromeArray.toString());
      }
    });
}

function answerAndReturn(answer) {
  anim.rainbow(`Your Answer Is : ${answer}`).stop().render();
  setTimeout(() => {
    main();
  }, 1000);
}
