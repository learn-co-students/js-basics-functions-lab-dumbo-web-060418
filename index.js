

const distanceFromHqInBlocks = (blockNumber) => blockNumber > 42 ? blockNumber - 42 : 42 - blockNumber;

const distanceFromHqInFeet = (blockNumber) => distanceFromHqInBlocks(blockNumber) * 264

const distanceTravelledInFeet = (start, destination) =>
	(start < destination) ? (destination - start) * 264 : (start - destination) * 264

function calculatesFarePrice(start, destination){
	const distance = distanceTravelledInFeet(start, destination);
	if(distance <= 400) {
		return 0;
	} else if (distance > 400 && distance <= 2000) {
		return .02 * (distance -400);
	} else if (distance > 2000 && distance < 2500) {
		return 25;
	} else {
		return 'cannot travel that far';
	}
}
