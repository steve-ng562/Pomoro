var pomodoroTimer =
    {
        //declare keys and values
        minutes:25,
        seconds:0,
        breakTime:5,
        onBreak: false,
        onStartClick: false,
        interval:null,
        init: function() {

            this.minutes = $('#minutes');
            this.seconds = $('#seconds');
            this.interval = setInterval(function(){
                this.intervalCallback();
            },1000);
            $('#start').click(function(){
               this.startTimer();
            });
            $('#increaseSession').click(function(){
                this.increaseSession();
            });
            $('#increaseBreak').click(function(){
                this.increaseBreak();
            });
            $('#decreaseSession').click(function(){
                this.decreaseSession();
            });
            $('#decreaseBreak').click(function(){
                this.decreaseBreak();
            });


        },


        startTimer: function(){
           this.onStartClick = true;
        },
        increaseBreak: function(){
            if(this.breakTime < 59)
                this.breakTime += 1;
            $("#break").text(this.breakTime);

        },

        decreaseBreak:function(){
            if(this.breakTime > 1)
                this.breakTime -= 1;
            $("#break").text(this.breakTime);

        },
        increaseSession:function(){
            if(this.minutes < 59)
                this.minutes += 1;
            $("#sessionTime").text(this.minutes);

        },
        decreaseSession:function(){
            if(this.minutes > 1)
                this.minutes -= 1;
            $("#sessionTime").text(this.minutes);

        },

        toDoubleDigit: function(num){
            if(num !== 0 && num < 10){
                return "0" + parseInt(num,10);
            }
            return num;
        },
        update: function(){
            this.minutes.text(this.toDoubleDigit(this.minutes));
            this.seconds.text(this.toDoubleDigit(this.seconds));

        },
        intervalCallback: function(){
            if(!this.onStartClick){
                return;
            }else if(this.onBreak === true && this.onStartClick === false){

            }else if(this.onBreak === true && this.onStartClick === true){
                this.minutes = this.breakTime;
                this.onBreak = false;
            }
            if(this.seconds === 0){
                if(this.minutes === 0){
                    this.timerEnded();
                    return;
                }
                this.seconds = 59;
                this.minutes--;
            }else{
                this.seconds--;
            }
            this.update();
        },
        timerEnded: function(){
            this.onStartClick = false;
            this.onBreak = true;
}
    };
$(document).ready(function() {


    pomodoroTimer.init();

});

