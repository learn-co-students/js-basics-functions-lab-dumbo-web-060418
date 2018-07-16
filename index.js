function distanceFromHqInBlocks(distance) {
  var hq = 42;
  var block;
  if (distance > hq) {
    block = distance - hq;
  } else {
    block = hq - distance;
  }

  return block;
}

function distanceFromHqInFeet(distance) {
  var convert = distanceFromHqInBlocks(distance) * 264;
  return convert;
}

function distanceTravelledInFeet(startBlock, endBlock) {
  var result = distanceFromHqInFeet(endBlock) - distanceFromHqInFeet(startBlock);
  return result;
}

function calculatesFarePrice(start, destination) {
  const result = distanceTravelledInFeet(start, destination);
  let price;
  if (result < 400) {
    return result - result;
  } else if (result <= 2000) {
    return price = (result - 400) * .02;
  } else if (result > 2000 && result <= 2500) {
    return price = 25;
  } else if (result > 2500) { // working on this
    return price = 'cannot travel that far';
  }

}
