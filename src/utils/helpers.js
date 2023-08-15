
export function get_time_diff( datetime )
{
    var datetime = typeof datetime !== 'undefined' ? datetime : "2014-01-01 01:02:03.123456";

    var datetime = new Date( datetime ).getTime();
    var now = new Date().getTime();

    if( isNaN(datetime) )
    {
        return "";
    }

    if (datetime < now) {
        var milisec_diff = now - datetime;
    }else{
        var milisec_diff = datetime - now;
    }
    var days = Math.floor(milisec_diff / 1000 / 60 / (60 * 24));
    var date_diff = new Date( milisec_diff );

    var answer=""

    if(days){
        let month =0, years=0;
        month = Math.floor(days/30) ;
        years = Math.floor(month/12) ;

        if(years>=1) return `${years} Year `
        else if(month>=1) return `${month} Months `
        if(days==1) return "A Day "
        if(days/30 >= 1) return 
        answer+=days + " Days ";
        return answer
    }

    else if(date_diff.getHours()){
        answer+= date_diff.getHours() + " hours ";
        return answer;
    }
    return date_diff.getMinutes() + " minutes ";
}


export const formatNumber  = function (num, precision = 0) {
    const map = [
      { suffix: 'T', threshold: 1e12 },
      { suffix: 'B', threshold: 1e9 },
      { suffix: 'M', threshold: 1e6 },
      { suffix: 'K', threshold: 1e3 },
      { suffix: '', threshold: 1 },
    ];
  
    const found = map.find((x) => Math.abs(num) >= x.threshold);
    if (found) {
      const formatted = (num / found.threshold).toFixed(precision) + found.suffix;
      return formatted;
    }
  
    return num;
  }