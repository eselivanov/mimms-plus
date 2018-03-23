export class DateUtil {
    constructor() {  }

    /*public getAgez = (fromdate, todate?) => {
        //this.getAgez(fromdate)
        if(todate) todate= new Date(todate);
        else todate= new Date();

        var age= []
        var newFromDate = new Date(fromdate),
        y= [todate.getFullYear(), newFromDate.getFullYear()],
        ydiff= y[0]-y[1],
        m= [todate.getMonth(), newFromDate.getMonth()],
        mdiff= m[0]-m[1],
        d= [todate.getDate(), newFromDate.getDate()],
        ddiff= d[0]-d[1];
        console.log(`${JSON.stringify(d)} dat diff ${ddiff}`)
        if(mdiff < 0 || (mdiff=== 0 && ddiff<0))--ydiff;
        if(mdiff<0) mdiff+= 12;
        if(ddiff<0){
            newFromDate.setMonth(m[1]+1, 0);
            ddiff= newFromDate.getDate()-d[1]+d[0];
            --mdiff;
        }
        if(ydiff> 0) age.push(ydiff+ ' year'+(ydiff> 1? 's ':' '));
        if(mdiff> 0) age.push(mdiff+ ' month'+(mdiff> 1? 's':''));
        if(ddiff> 0) age.push(ddiff+ ' day'+(ddiff> 1? 's':''));
        if(age.length>1) age.splice(age.length-1,0,' and ');    
        
        return age.join('');
    }*/
    
    public getAge = (dateString) => {
        var now = new Date();
        var today = new Date(now.getFullYear(),now.getMonth(),now.getDate());
      
        var yearNow = now.getFullYear();
        var monthNow = now.getMonth();
        var dateNow = now.getDate();
      
        var dob = new Date(dateString);
      
        var yearDob = dob.getFullYear();
        var monthDob = dob.getMonth();
        var dateDob = dob.getDate();
        var age: any= {};
        var ageString = "";
        var yearString = "";
        var monthString = "";
        var dayString = "";
        var yearAge;
      
      
        yearAge = yearNow - yearDob;
        console.log(`year age ${yearNow} ${yearDob} ${dateString.substring(0,4)} ${dateString.substring(5,6)-1} ${dateString.substring(8,9)}`)     
        if (monthNow >= monthDob)
          var monthAge = monthNow - monthDob;
        else {
          yearAge--;
          var monthAge = 12 + monthNow -monthDob;
        }
      
        if (dateNow >= dateDob)
          var dateAge = dateNow - dateDob;
        else {
          monthAge--;
          var dateAge = 31 + dateNow - dateDob;
      
          if (monthAge < 0) {
            monthAge = 11;
            yearAge--;
          }
        }
      
        age = {
            years: yearAge,
            months: monthAge,
            days: dateAge
            };
      
        if ( age.years > 1 ) yearString = " Years";
        else yearString = " Year";
        if ( age.months> 1 ) monthString = " Months";
        else monthString = " Month";
        if ( age.days > 1 ) dayString = " Days";
        else dayString = " Day";
      
      
        /*if ( (age.years > 0) && (age.months > 0) && (age.days > 0) )
          ageString = age.years + yearString + ", " + age.months + monthString + ", and " + age.days + dayString + " old.";
        else if ( (age.years == 0) && (age.months == 0) && (age.days > 0) )
          ageString = "Only " + age.days + dayString + " old!";
        else if ( (age.years > 0) && (age.months == 0) && (age.days == 0) )
          ageString = age.years + yearString + " old. Happy Birthday!!";
        else if ( (age.years > 0) && (age.months > 0) && (age.days == 0) )
          ageString = age.years + yearString + " and " + age.months + monthString + " old.";
        else if ( (age.years == 0) && (age.months > 0) && (age.days > 0) )
          ageString = age.months + monthString + " and " + age.days + dayString + " old.";
        else if ( (age.years > 0) && (age.months == 0) && (age.days > 0) )
          ageString = age.years + yearString + " and " + age.days + dayString + " old.";
        else if ( (age.years == 0) && (age.months > 0) && (age.days == 0) )
          ageString = age.months + monthString + " old.";
        else ageString = "Oops! Could not calculate age!";*/
        ageString = age.years + yearString + ", " + age.months + monthString + ", and " + age.days + dayString
        console.log(`age string ${JSON.stringify(age)}`)
        return ageString;
      }
    /*public getAgez = (fDate, tDate?) => {
        var toDate: Date;
        var fromDate = new Date(fDate)
        if(tDate) {
            toDate= new Date(tDate);
        } else {
            toDate= new Date();
        }

        let y = toDate.getFullYear() - fromDate.getFullYear()
        let m = toDate.getMonth() - fromDate.getMonth()
        console.log(`test ${y} ${m}`)
    }*/
}