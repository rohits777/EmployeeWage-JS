console.log("welcome to employee wage program.")
//UC2 Calculating Employee Wage 

const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;

let empHrs=0;
let empCheck =Math.floor(Math.random() *10)%2;
 switch(empCheck){
    case IS_PART_TIME:
        empHrs= PART_TIME_HOURS;
        console.log("Employee present part time");
         break;
    case IS_FULL_TIME:
        empHrs=FULL_TIME_HOURS;
        console.log("Employee is Present full time");
    default:
          empHrs=0;
          console.log("Employee is Absent")
    }
    let empWage= empHrs*WAGE_PER_HOUR;
    console.log("Emp wage:--" +empWage);