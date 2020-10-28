export function findDate(){
  var newDate = new Date();
  let fullDate = [];
  fullDate[0] = newDate.getDate();
  fullDate [1] = newDate.getMonth() + 1;
  fullDate [2] = newDate.getFullYear();

  return fullDate;
}
