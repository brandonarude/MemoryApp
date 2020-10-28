export function incrementDayCounter (dateToday) {

let previousDay = "28102020";
  let formattedDateToday =  dateToday[0].toString() +
                            dateToday[1]. toString() +
                            dateToday[2].toString();


  if (previousDay == formattedDateToday) {
    return true;
  } else {
    return false;
  }
}
