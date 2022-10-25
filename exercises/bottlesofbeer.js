/* Welcome to the Bottles of Beer song */

function beerSong() {

    let beerNum = 99;
    let word = 'bottles';

    while(beerNum > 0) {
        if(beerNum == 1) {
            word = 'bottle';
        } // end if

        console.log(`${beerNum} ${word} of beer on the wall.`);
        console.log(`${beerNum} ${word} of beer.`);
        console.log('Take one down.');
        console.log('Pass it around.');

        beerNum--;

        if(beerNum > 0) {
            console.log(`${beerNum} ${word} of beer on the wall.`);
            console.log();
        } else {
            console.log('No more bottles of beer on the wall.');
        }

    } // end while

} // end function

beerSong();