// Code your solution in this file!

function distanceFromHqInBlocks(location) {
  let headquarters = 42;
  if (location >= 43) {
    let distance = location - headquarters;
    return distance;
  }
  else if (location <= 42) {
    let distance = headquarters - location;
    return distance;
  }
}

function distanceFromHqInFeet(location) {
  let tripInFeet = distanceFromHqInBlocks(location)*264;
  return tripInFeet;
}

function distanceTravelledInFeet(start, destination) {
  if (destination > start) {
    let distanceTravelled = (destination - start)*264
    return distanceTravelled
  }
  else if (start > destination) {
    let distanceTravelled = (start - destination)*264
    return distanceTravelled
  }
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)
    if (distance < 400) {
      return 0;
    } else if (distance >= 400 && distance < 2000) {
      costOfTrip = (distance - 400) * 0.02;
      return costOfTrip;
    } else if (distance >= 2000 && distance <= 2499) {
      return 25;
    } else {
      return "cannot travel that far"
    }
}
