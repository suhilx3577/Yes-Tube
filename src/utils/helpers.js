
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
        if(days==1) return "a day "
        answer+=days + " days ";
        return answer
    }

    else if(date_diff.getHours()){
        answer+= date_diff.getHours() + " hours ";
        return answer;
    }
    return date_diff.getMinutes() + " minutes ";
}
