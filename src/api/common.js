export function PrefixInteger(num, length) {
    return ( "00000000000000" + num ).substr( -length );
   }

   export  function getUrlVars(url) {
    var vars = [],
        hash;
    var hashes = url.slice(url.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

export  function GetWeixinAPPID() {
  var url = "wx5c451c1c46ba0ff9";
  return url;
}

//提取request参数
export function GetRequest(strParame) { 
	var args = new Object( ); 
	var query = location.search.substring(1); 
	
	var pairs = query.split("&"); // Break at ampersand 
	for(var i = 0; i < pairs.length; i++) { 
	var pos = pairs[i].indexOf('='); 
	if (pos == -1) continue; 
	var argname = pairs[i].substring(0,pos); 
	var value = pairs[i].substring(pos+1); 
	value = decodeURIComponent(value); 
	args[argname] = value; 
	} 
	return args[strParame]; 
}

export  function GetServerURL() {
    var url = "http://www.mbcharge.com";
    return url;
}

//将秒数转换成日期
export function SecToDateTime(seconds)
{
    var formatTimeS = new Date('2018/01/01 00:00:00').getTime();
    var newDate = new Date(formatTimeS + seconds*1000+1000);
    return newDate;
}

//获取当前的秒数    
export function TimeToSec(tTime)
{
  var   tmTick = tTime.getTime()/1000;
  var  startTick = (new Date('2018/01/01 00:00:00').getTime())/1000;
    
    if(tmTick < startTick)
    {
        return 0;    
    }

     return Math.floor(tmTick - startTick);
   
}


//获取当前的秒数
export function GetCurrentSec()
{
    var tTime = new Date();

    var  tmTick = tTime.getTime()/1000;
   var  startTick = (new Date('2018/01/01 00:00:00').getTime())/1000;
    var result = 0;
    if(tmTick < startTick)
    {
        return 0;    
    }
   
     return parseInt(tmTick - startTick);

}
  
export function monDiff(startTime,endTime){
    startTime=new Date(startTime);
    endTime=new Date(endTime);
    var date2Mon;
     var startDate=startTime.getDate()+startTime.getHours()/24+startTime.getMinutes()/24/60;
    var endDate=endTime.getDate()+endTime.getHours()/24+endTime.getMinutes()/24/60;
    var months=  0
    if(endDate>=startDate){
        date2Mon=0;
    }else{
        date2Mon=-1;
    }
    months = (endTime.getYear()-startTime.getYear())*12+endTime.getMonth()-startTime.getMonth();
    return months;
}

//将计费单状态转换成文字
export function billstate2str(billstate)
{
  
    var str = ""
            switch(billstate)
            {
              case 0:
                {
                  str = '计费中'
                  break;
                }
              case 1: 
                {
                  str = '计费单待审核'
                  break;
                }
              case 2:
                {
                  str = '等待客户付款'
                  break;
                }
                case 3:
                {
                  str = '已线上收费'
                  break;
                }
                 case 4:
                {
                  str = '已人工收费'
                  break;
                }
            }
          return str
}

//将计费单起止日期
export function billdayscope2str(startTick,endTick,State)
{
   
          var str = ""
          var tmStart = SecToDateTime(startTick)
          var tmEnd = SecToDateTime(endTick)
          var dayTm = new Date()
          if (State != 0)
            { 
                str = tmStart.getDate()+"号-"+tmEnd.getDate()+"号"
            }
            else
            {
                str = tmStart.getDate()+"号-"+dayTm.getDate()+"号"
            }
          return str 
}

//根据计费单的时间和房间编号获取流水号,6位时间和6位房间编号
export function getbillsn(startTick,roomid)
{
   var tm = SecToDateTime(startTick)
   var str = PrefixInteger(roomid,6)+tm.getFullYear()+PrefixInteger(tm.getMonth(),2)+PrefixInteger(tm.getDate(),2)
              +PrefixInteger(tm.getHours(),2)+PrefixInteger(tm.getMinutes(),2)+PrefixInteger(tm.getSeconds(),2)
              
   return str 
}

//获取32位
export function uuidGenerator() {
	var originStr = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
		originChar = '0123456789abcdef',
		len = originChar.length;
	return originStr.replace(/x/g, function(match) {
		return originChar.charAt(Math.floor(Math.random() * len))
  })
}

//将客户端的时间转换成北京时间
export function getBeijingtime() {
  //获得当前运行环境时间
  var d = new Date();
  var currentDate = new Date();
  var tmpHours = currentDate.getHours();
  //算得时区
  var time_zone = -d.getTimezoneOffset() / 60;
  if (time_zone < 0) {
      time_zone = Math.abs(time_zone) + 8; currentDate.setHours(tmpHours + time_zone);
  } else {
      time_zone -= 8; currentDate.setHours(tmpHours - time_zone);
  }
  return currentDate;
}
