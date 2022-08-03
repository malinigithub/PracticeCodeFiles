/*
Instructions
Compare Objects
- Define a function, `compareCities`, that accepts two objects as arguments.

compareCities({ name: 'Dresden' }, { name: 'Dresden' }) // -> true
compareCities({ name: 'Raleigh' }, { name: 'Raleigh', income_pc: 1200000 }) // -> false
*/
function compareCities(c1, c2) {
  // Add your code here
  var isSameCities = true;
  for (let key in c1) {
    if (key in c2 && c1[key] === c2[key]) {
      isSameCities = true;
    } else {
      return isSameCities;
    }
  }
  return isSameCities;
}

//uncomment next lines to console log results
console.log(compareCities({}, {}));
console.log(compareCities({ name: "San Jose" }, { name: "San Jose" }));
console.log(compareCities({ name: "San Jose" }, { otherkey: "San Jose" }));

//don't change this line
if (typeof module !== "undefined") {
  module.exports = {
    compareCities,
  };
}
