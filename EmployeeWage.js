console.log("welcome to employee wage program.")
//UC2 Calculating Employee Wage 

const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;


function getWorkingHours(empCheck){ 
switch(empCheck){
    case IS_PART_TIME:
        return PART_TIME_HOURS;
        // console.log("Employee present part time");
        //  break;
    case IS_FULL_TIME:
        return FULL_TIME_HOURS;
       // console.log("Employee is Present full time");
    default:
          return 0;
          //console.log("Employee is Absent")
    }
}
   let empHrs=0;
   let empCheck =Math.floor(Math.random() *10)%3;

   empHrs=getWorkingHours(empCheck);
    let empWage= empHrs*WAGE_PER_HOUR;
    console.log("Emp wage:--" +empWage);