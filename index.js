// Code your solution in this file!
function distanceFromHqInBlocks(street){
  if (street >= 42) {
    return street - 42;
  } else {
    return 42 - street;
  }
}

function distanceTravelledInFeet(start, end){
  if (end > start) {
    return (end - start)*264;
  } else {
    return (start - end)*264;
  }
}

function distanceFromHqInFeet (someValue){
  return distanceFromHqInBlocks(someValue)*264;
}

function calculatesFarePrice(start, destination) {
  let feet = distanceTravelledInFeet(start, destination);

  if (feet <= 400){
    return 0;
  } else if (feet > 2500){
    return 'cannot travel that far';
  } else if (feet > 2000){
    return 25;
  } else {
    return (feet - 400)* 0.02;
  }

}
