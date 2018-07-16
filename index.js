// Code your solution in this file!

function distanceFromHqInBlocks(block){
	if (block >= 42) {
		distance = block - 42;
	} else {
		distance = 42 - block;
	}
	return distance;
}

function distanceFromHqInFeet(block){
	if (block >= 42) {
		distance = (block - 42)*264;
	} else {
		distance = (42 - block)*264;
	}
	return distance;
}

function distanceTravelledInFeet(startingBlock, endingBlock){
	if (startingBlock > endingBlock) {
		distance = (startingBlock - endingBlock)*264
	} else {
		distance = (endingBlock - startingBlock)*264
	}
	return distance;

}

function calculatesFarePrice(start, destination){	
	distance = distanceTravelledInFeet(start, destination)
	switch (true) {
	case distance > 2500:
		price = 'cannot travel that far';
		break;
	case distance >= 2000:
		price = 25;
		break;
	case distance >= 400:
		price = (distance-400)*.02;
		break;
	case distance < 400:
		price = 0;
		break;
	} 
	return price;
}