//write a function called superBowlWin
superbowlWin = (array) => { // it should receive 1 argument, an array of JS objects, each obj has 2 props year & result
    let result = array.find(array => array.result === 'W' );
        return result ? result.year : undefined;
}
    // it should use find to test each obj and see if the result is "W"

//it should return the year when the win occured, if no win is found return undefined