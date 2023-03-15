export const cellsgenerator = (year, month) => {
  let cells = {
    week1: [0, 0, 0, 0, 0, 0, 0],
    week2: [0, 0, 0, 0, 0, 0, 0],
    week3: [0, 0, 0, 0, 0, 0, 0],
    week4: [0, 0, 0, 0, 0, 0, 0],
    week5: [0, 0, 0, 0, 0, 0, 0],
    week6: [0, 0, 0, 0, 0, 0, 0],
  };

  var date = new Date();
  date = new Date(year, month, 1); //Year , month,date format

  var first_day = date.getDay(); //, first day of present month

  date.setMonth(month + 1, 0); // Set to next month and one day backward.
  var last_date = date.getDate(); // Last date of present month

  var day = 1; // day variable for adjustment of starting date.

  const weeks = Object.keys(cells);
  for (i = 0; i < 42; i++) {
    weeks.map((week) => {
      if (i >= first_day && dy <= last_date) {
        str = str + "<td>" + dy + "</td>";

        dy = dy + 1;
      } else {
        str = str + "<td>*</td>";
      }
    });
  }

  return cells;

  // return file(year, month);
};

// const file = (year, month) => {
//   var str = `<table style={{bgcolor:'#f1f1f1'}}>
// <tr>
// <td colspan=7 align=right>
// str += " <a href=# onclick="setVisibility('sub4','none');";>X</a></td></tr>";
// str +="<tr><td>Su</td><td>Mon</td><td>Tue</td><td>Wed</td>";
// str +="<td>Thu</td><td>Fri</td><td>Sat</td></tr>`;

//   for (i = 0; i <= 41; i++) {

//     if (i % 7 == 0) {
//       str = str + "</tr><tr>";
//     } // if week is over then start a new line
//     if (i >= first_day && dy <= last_date) {
//       str = str + "<td>" + dy + "</td>";

//       dy = dy + 1;
//     } else {
//       str = str + "<td>*</td>";
//     } // Blank dates.

//   } // end of for loop

//   str = str + "</tr></table>";

//   return str;
// };
