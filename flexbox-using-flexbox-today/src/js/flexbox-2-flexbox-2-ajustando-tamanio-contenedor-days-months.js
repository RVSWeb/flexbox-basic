/* 
 Created on : 29-nov-2019, 19:09:06
 Author     : Raul Vela
 */

/**
 * 
 * @type Array
 */
var array_days = [
  1, 2, 3, 4, 5, 6, 7, 8, 9,
  10, 11, 12, 13, 14, 15,
  16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27,
  28, 29, 30, 31];

/**
 * 
 * @type Number
 */
for (var i = 0; i < array_days.length; i++) {
  var option_day = document.createElement('option');
  var element_day = document.getElementsByName('dates')[0];
  element_day.appendChild(option_day);
  option_day.value = array_days[i];
  option_day.text = array_days[i];
}

/**
 * 
 * @type Array
 */
var array_months =
        ['January', 'February',
          'March', 'April', 'May',
          'June', 'July', 'August',
          'September', 'October',
          'November', 'December'];

/**
 * 
 * @type Number
 */
for (var i = 0; i < array_months.length; i++) {
  var option_month = document.createElement('option');
  var element_month = document.getElementsByName('month')[0];
  element_month.appendChild(option_month);
  option_month.value = array_months[i];
  option_month.text = array_months[i];
} 