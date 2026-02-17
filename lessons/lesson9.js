/* Lesson 9 - Arrays */

/* The recommended way  */
const days_of_week = ['Sun', 'Mon',
    'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
];

/* An array of mixed types */
const mixture = ['Sun', 106, false];

/* The new keyword array that less common */
const values = new Array(101, 103, 105, 107, 109);

/* Shallow copy of array */
const shallow_days = days_of_week;

/* Access an element of an array, based
on its index */
function getMyDay() {
    let day = days_of_week[3];
    console.log(day);
}

//getMyDay();

/* Update an array by its element position */
function changeElement() {
    values[2] = 106;
    console.log(values);
}

//changeElement();

/* Update array and check the shallow copy */
function changeElementV2() {
    days_of_week[1] = 'Monday';
    shallow_days[5] = 'Friday';
    console.log(days_of_week);
    console.log(shallow_days);
}

//changeElementV2();

/* Use a for loop and an array's length
property to loop through the elements. */
function loopArray() {
    for(let num = 0; num < values.length; num++) {
        console.log(values[num]);
    }
}

//loopArray();

/* Output only the Weekend elements */
function weekEndArray() {
    for(let day = 0; day < days_of_week.length; day++) {
        if(day < 1 || day > 4){
            console.log(days_of_week[day]);
        } else {
            continue;
        }
    }
}

//weekEndArray();

/* The forEach instance method using an inline function */
function loopForEach() {
    days_of_week.forEach(function countEntry(myElements){
        console.log(myElements);
    });
}

//loopForEach();

/* Join & Slice instance methods */
/* Join returns a concatenated string,
including a separater */
const trucks = ['Chevy', 'Ford', 'Dodge', 'Toyota'];

function truckJoinExample() {
    let salesLot = trucks.join(' & ');
    console.log(salesLot);
}

//truckJoinExample();

/* Slice creates a shallow copy of an
 array that is smaller than the original */
function truckSliceExample() {
    const trucks2026 = trucks.slice(0,2);
    trucks2026.forEach(function truckResult(results) {
        console.log(results);
    });
}

//truckSliceExample();

/* Use slice to print weekdays */
function getWeekDays() {
    const weekDaysV2 = days_of_week.slice(1,6);
    weekDaysV2.forEach(function daysResult(results){
        console.log(results);
    });
}

// getWeekDays();

/* Pop & Push methods */
/* Pop method will remove the
last element of the array */
function truckPopExample(){
    let singleTruck = trucks.pop();
    console.log(singleTruck);

    for(const truck of trucks) {
        console.log(' * '+ truck);
    }
}

//truckPopExample();

/* Push method will add one
or more elements to the end
of an array and return a new length */
function truckPushExample() {
    const moreTrucks = trucks.push('Nissan',
        'Jeep', 'Vokswagon', 'Raptor', 'Mercedes',
        'Hummer'
    );
    console.log(moreTrucks);
    for(let i = 0; i < moreTrucks; i++) {
        console.log(trucks[i]);
    }
}

//truckPushExample();

/* Reverse & Shift Methods */
/* Reverse will change the order
 of the elements in the opposite direction.
 This will permantly change the array */
 function truckReverseExample() {
    const backwards = trucks.reverse();
    console.log(backwards);
    
    // Also changes original array
    //console.log(trucks);
 }

 //truckReverseExample();

 /* Shift method removes the first element
 of the array and returns it. Similar to
 the pop method. */
 function truckShift() {
    let vehicle = trucks.shift();
    console.log(vehicle);

    console.log(trucks);
 }

 truckShift();