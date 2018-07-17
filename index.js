// Code your solution in this file!
//
// Second, customers want Scuber to calculate the number of feet travelled based on
// the distance. Write a function called `distanceTravelledInFeet` that takes in the
// beginning and destination blocks and returns the number of feet travelled. Each
// block in Manhattan is 264 feet long. For example `distanceTravelledInFeet(34, 38)`
// representing 34th St to 38th St, returns 1056 (`(38-34)*264`). You can assume
// that we are only calculating distance uptown/downtown, not from river to river.


// To complete all of your work assignments, you'll need to write four functions:
//
// * `distanceFromHqInBlocks`: Returns the number of blocks from Scuber's
// headquarters to the pickup location.
//
// * `distanceFromHqInFeet`: Returns the number of feet from Scuber's
// headquarters to the pickup location. You can use your
// `distanceFromHqInBlocks` function to help return the correct value here. Try something like this:
//
// ```js
// function distanceFromHqInBlocks (someValue) {
//   //returns the number of blocks given a value
// }
//
// function distanceFromHqInFeet (someValue) {
//   distanceFromHqInBlocks(someValue);
//   // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
//   //the return value of distanceFromHqInBlocks can then be used to calculate feet
// }
// ```
//
// * `distanceTravelledInFeet`: Calculates the number of feet a passenger travels
// given a starting block and an ending block - it only calculates distance North
// and South (uptown/downtown). It uses the knowledge that a block is 264 feet
// long.
//
// * `calculatesFarePrice`: Given the same starting and ending block as the
// previous test (_hint hint_), return the fare for the customer. The first four
// hundred feet are free. For a distance between 400 and 2000 feet, the price is 2
// cents per foot (not including 400, which are free!). Then Scuber charges a
// flat fare for a distance over 2000 feet and under 2500 feet. Finally, Scuber
// does not allow any rides over 2500 feet - the function returns `'cannot travel
// that far'` if a ride over 2500 feet is requested.


function distanceFromHqInBlocks (blockNumber) {
  if (blockNumber > 42) {
    return blockNumber - 42;
  } else {
    return 42 - blockNumber;
  }
}

function distanceFromHqInFeet (blockNumber) {
  return distanceFromHqInBlocks(blockNumber) * 264;
}

function distanceTravelledInFeet (start, destination) {
  if (start < destination) {
    return (destination - start) * 264;
  } else {
    return (start - destination) * 264;
  }
}

function calculatesFarePrice (start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return .02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
