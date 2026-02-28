const testResults = ["pass", "fail", "pass", "pass", "fail", "skip"];

let passCount = 0;
let failCount = 0;
let skipCount = 0;
for (let i = 0; i < testResults.length; i++) {
  if (testResults[i] === "pass") {
    passCount++;
  } else if (testResults[i] === "fail") {
    failCount++;
  } else if (testResults[i] === "skip") {
    skipCount++;
  }
}

const total = testResults.length;
const passRate = total > 0 
  ? ((passCount / total) * 100).toFixed(2) 
  : 0;

// Determine verdict
let verdict;

if (failCount === 0) {
  verdict = "READY FOR RELEASE";
} 
else if (failCount <= 2) {
  verdict = "REVIEW REQUIRED";
} 
else {
  verdict = "BLOCK RELEASE";
}


console.log("Total tests-", total);
console.log("Passed test-", passCount);
console.log("Failed-test", failCount);
console.log("Skipped-test", skipCount);
console.log("Pass Rate-test", passRate + "%");
console.log("Verdict-test", verdict);