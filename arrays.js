// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6]
var strings = ["this", "is", "a", "collection", "of", "words"]
var instructors = [
  { firstname: "JD", teaches: "JavaScript" },
  { firstname: "Tim", teaches: "JavaScript" },
  { firstname: "Brit", teaches: "Ruby" },
  { firstname: "Joe", teaches: "iOS" },
  { firstname: "Jake", teaches: "JavaScript" },
  { firstname: "Will", teaches: "JavaScript" },
  { firstname: "Calvin", teaches: "JavaScript" },
  { firstname: "James", teaches: "Ruby" }
]

// ---------------------------
// 1. Find largest number
// ---------------------------

function longNum(num) {
  var newLong = num[0]
  for (var i = 0; i < num.length; i++) {
    if (num[i] > newLong) {
      newLong = num[i]
    }
  }
  console.log(newLong)
}
longNum(numbers)

// ---------------------------
// 2. Find longest string
// ---------------------------

function longString(str) {
  var newStr = str[0]
  for (var i = 0; i < str.length; i++) {
    if (str[i].length > newStr.length) {
      newStr = str[i]
    }
  }
  console.log(newStr)
}
longString(strings)

// ---------------------------
// 3. Find even numbers
// ---------------------------

function evenNum(num2) {
  var newEven = []
  for (var i = 0; i < num2.length; i++) {
    if (num2[i] % 2 === 0) {
      newEven.push(num2[i])
    }
  }
  console.log(newEven)
}
evenNum(numbers)

// ---------------------------
// 4. Find odd numbers
// ---------------------------

function oddNum(num3) {
  var newOdd = []
  for (var i = 0; i < num3.length; i++) {
    if (num3[i] % 2 !== 0) {
      newOdd.push(num3[i])
    }
  }
  console.log(newOdd)
}
oddNum(numbers)

// ---------------------------
// 5. Find words that contain `is`
// ---------------------------

function isOnly(str3) {
  var onlyIs = []
  for (var i = 0; i < str3.length; i++)
    if (str3[i].includes("is")) {
      onlyIs.push(str3[i])
    }
  console.log(onlyIs)
}
isOnly(strings)

// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------

function joinThem(str4, str5) {
  var joined = []
  for (var i = 0; i < str4.length; i++) {
    joined.push(str4[i])
  }
  for (var i = 0; i < str5.length; i++) {
    joined.push(str5[i])
  }
  console.log(joined)
}

joinThem(strings, numbers)

// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript,
//    then sort them alphabetically
// ---------------------------
