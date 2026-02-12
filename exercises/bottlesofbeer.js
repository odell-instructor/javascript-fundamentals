/* Welcome to the Bottle of Beer Song */
function beerSong() {
    let beerNum = 99;
    let word = 'bottles';

    while(beerNum > 0) {
        console.log(`${beerNum} ${word} of beer on the wall.`);
        console.log(`${beerNum} ${word} of beer.`);
        console.log('Take one down');
        console.log('Pass it around');

        beerNum--;

        if(beerNum === 1) {
            word = 'bottle';
        }

        if(beerNum > 0) {
            console.log(`${beerNum} ${word} of beer on the wall.`);
            console.log();
        } else {
            console.log('No more bottles of beer on the wall');
        }
    }
}

beerSong();