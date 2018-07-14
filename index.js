// Code your solution in this file!
function distanceFromHqInBlocks(num){
  if (num < 42){
    return 42 - num;
  }
  else if (num > 42){
    return num - 42;
  }
}

function distanceFromHqInFeet(num){
  return distanceFromHqInBlocks(num) * 264;
}

function distanceTravelledInFeet(num1, num2){
  if (num1 > num2){
    return (num1 - num2)*264;
  }
  else {
    return (num2 - num1)*264;
  }
}

function calculatesFarePrice(start, destination){
  let distance = distanceTravelledInFeet(start, destination);
  if ( distance < 400){
    return 0;
  }
  else if (distance > 400 && distance <= 2000){
    return (distance - 400)*0.02;
  }
  else if (distance > 2000 && distance <= 2500){
    return 25;
  }
  else {
    return 'cannot travel that far';
  }
}
