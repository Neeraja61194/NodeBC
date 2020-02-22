let weekday = 5;
let msg = null;

switch (weekday){
    case 1:
        msg = "Today it's Monday"
        break;
    case 2:
        msg = "Today it's Tuesday"
        break;
    case 3:
        msg = "Today it's Wednesday"
        break;
    case 4:
        msg = "Today it's Thursday"
        break;
    case 5:
        msg = "Today it's Friday"
        break;
    case 6:
        msg = "Today it's Saturday"
        break;
    case 7:
        msg = "Today it's Sunday"
        break;
    default:
        msg = "Error : Please input a number bettwen 1 and 7"
}


if (weekday === 1) {
    msg = "Today it's Monday";
} else if (weekday === 2) {
    msg = "Today it's Tuesday";
} else if (weekday === 3) {
    msg = "Today it's Wednesday";
} else if (weekday === 4) {
    msg = "Today it's Thursday";
} else if (weekday === 5) {
    msg = "Today it's Friday"
} else if (weekday === 6) {
    msg = "Today it's Saturday"
} else if (weekday === 7) {
    msg = "Today it's Sunday"
} else {
    msg = "Error : Please input a number bettwen 1 and 7";
}

console.log(msg)