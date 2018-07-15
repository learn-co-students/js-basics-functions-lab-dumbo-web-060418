// Code your solution in this file!
function distanceFromHqInBlocks(position) {
  if (position > 42) {
   return position - 42;
  } else if (position < 42) {
     return 42 - position
  }
}

function distanceFromHqInFeet(position) {
   return distanceFromHqInBlocks(position) * 264;

}

function distanceTravelledInFeet(start, finish) {
  if (finish > start) {
    return (finish - start) * 264;
  } else if (start > finish) {
    return (start - finish) * 264;
  }
}

function calculatesFarePrice(start, finish) {
let distance = distanceTravelledInFeet(start, finish);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else if (distance > 2500) {
    return 'cannot travel that far';
  }
}
