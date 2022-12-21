console.log("welcome to employee wage program.")
//UC4 Monthly wage

const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
const NUM_OF_WORKING_DAYS=20;
const MAXIMUM_HRS_MONTH=100;
let totalEmpHrs=0;
let totalWorkingDays=0;
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
   
while(totalEmpHrs<=MAXIMUM_HRS_MONTH && totalWorkingDays<NUM_OF_WORKING_DAYS){
      totalWorkingDays++;
      let empCheck =Math.floor(Math.random() *10)%3;
      totalEmpHrs+=getWorkingHours(empCheck);
}
   
    let empWage= totalEmpHrs*WAGE_PER_HOUR;
    console.log("Total Days:- " +totalWorkingDays+ " Total hours :-- " +totalEmpHrs+ " Emp wage:--" +empWage);