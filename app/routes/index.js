'use strict';

module.exports = function(app){
    app.route('/')
        .get(function(req,res){
            // console.log(req.language);
            res.sendFile(process.cwd()+'/public/index.html');
        });
        
    app.route('/:date')
        .get(function(req,res){
            var output ={};
            var date = req.params.date;
            if(!isNaN(Number(date))){
                var natural = unixToNatural(Number(date));
                if(natural.split(' ').indexOf('undefined')>-1 || natural.split(' ').indexOf('NaN')>-1){
                    output.unix = 'null';
                    output.natural = 'null';
                }else{
                    output.unix = Number(date);
                    output.natural = natural;
                }
            }else{
                var unixTimeStamp =  naturalToUnix(date);
                var naturalFormat = unixToNatural(unixTimeStamp);
                if(naturalFormat.split(' ').indexOf('undefined')>-1 || naturalFormat.split(' ').indexOf('NaN')>-1 || isNaN(unixTimeStamp)){
                    output.unix = 'null';
                    output.natural = 'null';
                }else{
                    output.unix = Number(unixTimeStamp);
                    output.natural = naturalFormat;
                }
            }
            res.send(JSON.stringify(output,undefined,4));
        })
        .post(function(req,res){
            var output ={};
            var date = req.params.date;
            if(!isNaN(Number(date))){
                var natural = unixToNatural(Number(date));
                if(natural.split(' ').indexOf('undefined')>-1 || natural.split(' ').indexOf('NaN')>-1){
                    output.unix = 'null';
                    output.natural = 'null';
                }else{
                    output.unix = Number(date);
                    output.natural = natural;
                }
            }else{
                var unixTimeStamp =  naturalToUnix(date);
                var naturalFormat = unixToNatural(unixTimeStamp);
                if(naturalFormat.split(' ').indexOf('undefined')>-1 || naturalFormat.split(' ').indexOf('NaN')>-1 || isNaN(unixTimeStamp)){
                    output.unix = 'null';
                    output.natural = 'null';
                }else{
                    output.unix = Number(unixTimeStamp);
                    output.natural = naturalFormat;
                }
            }
            res.send(JSON.stringify(output,undefined,4));
        });
            
        
};

function unixToNatural(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var time = month+' '+date+', '+year;
  return time;
}

function naturalToUnix(date){
  return ((new Date(date).getTime())/1000).toFixed(0);   
}