var minutes = 25;
var seconds = 0;
var breakTime = 5;
var onStartClick = false;
var onBreak = false;
var interval = null;

$(document).ready(function() {
    $('#start').click(function(){
        onStartClick = true;
    });
    $('#increaseSession').click(function(){
        if(minutes < 59 && onStartClick === false)
        minutes++;
        $("#sessionTime").text(minutes);
    });
    $('#increaseBreak').click(function(){
        if(breakTime < 20)
        breakTime++;
        $("#break").text(breakTime);
    });
    $('#decreaseSession').click(function(){
        if(minutes > 1 && onStartClick === false)
            minutes--;

        $("#sessionTime").text(minutes);
    });
    $('#decreaseBreak').click(function(){
        if(breakTime > 1)
            breakTime--;
        $("#break").text(breakTime);

    });
    interval = setInterval(function(){
        callInterval();
    },1000);

    function callInterval(){
        if(onStartClick === false && onBreak === false){
            return;
        }else if(onStartClick === false && onBreak === true){


        }else if(onStartClick === true && onBreak === true){
            minutes = breakTime;
            onBreak = false;

        }
        if(seconds === 0){
            if(minutes === 0){
                timerEnded();
                return;
            }
            seconds = 59;
            minutes--;
        }else{
            seconds--;
        }
        update();

    }
    function timerEnded(){
        onStartClick = false;
        onBreak = true;
    }
    function update(){
        $("#minutes").text(toDoubleDigit(minutes));
        $("#seconds").text(toDoubleDigit(seconds));
    }
    function toDoubleDigit(num){
        if(num < 10){
            return "0" + parseInt(num,10);
        }
        return num;
    }

});

