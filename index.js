const chalk = require('chalk');
const moment = require('moment');
let now = moment();
let currentTime = now.format('HH:mm:ss')




function daylightSav(now){
	if(now.isDST()){
		return chalk.green("is")
	}
	else{
		return chalk.green("is not")
	}
}


function leapYear(now){
	if(now.isLeapYear()){
		return chalk.red("is")
	} 
	else{
		return chalk.red("is not")
	}

}


console.log("It is " + chalk.blue(now.format("dddd, MMMM Do YYYY, h:mm:ss a")) + ".");
console.log("It is the " + chalk.magenta(now.format("DDDo")) + " day of the year.");
console.log("It is " + chalk.cyan(moment.duration(currentTime).asSeconds()) + " seconds into the day.")
console.log("It " + daylightSav(now) + " during daylight savings time.")
console.log("It " + leapYear(now) + " a leap year.")
