// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// #70 - Climbing stairs


const cache = {
    "0": 1,
    "1": 1,
  };
  
  const climbStairs = function (n) {
    //base cases
    if (n <= 1) return 1;
    for (let i = 2; i <= n; i++) {
      cache[i] = cache[i - 1] + cache[i - 2];
    }
    return cache[n];
  };