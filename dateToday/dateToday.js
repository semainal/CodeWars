// Write a simple function that takes a Date as a parameter and returns a Boolean representing whether the date is today or not.

// Make sure that your function does not return a false positive by only checking the day.


function isToday(date) {
    let today = new Date();

    if(date.getDate() === today.getDate()) {
        return true;
    } else {
        return false;
    }
}