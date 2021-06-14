// 1. Declare and assign the variables here:
let shuttleName = 'Determination';
let shuttleSpeedMph = '17500';
let distanceToMarsKm = '225000000';
let distanceToTheMoonKm = '384400';
const milesPerKm = '0.621';




// 2. Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(shuttleName);
console.log(shuttleSpeedMph);
console.log(distanceToMarsKm);
console.log(distanceToTheMoonKm);
console.log(milesPerKm);



// Code your solution to exercises 3 and 4 here:
let milesToMars = distanceToMarsKm * milesPerKm;
let hoursToMars = milesToMars / shuttleSpeedMph;
let daysToMars = hoursToMars / 24;
console.log(shuttleName + "will take" + daysToMars + "day to reach the Mars.");

let milesToMoon = distanceToTheMoonKm * milesPerKm;
let hoursToMoon = milesToMoon / shuttleSpeedMph;
let daysToMoon = hoursToMoon / 24;
console.log(shuttleName + "will take" + daysToMoon + "day to reach the Moon.");





// Code your solution to exercise 5 here:
