let timer, hours, minutes, seconds;
(function () {
    timer = new Date();
    hours = timer.getHours();
    minutes = timer.getMinutes();
    seconds = timer.getSeconds();
    setInterval(textOutPut, 1000);
    setInterval(updateTime, 1000);
}())
function updateTime() {
    if(minutes === 60) {
        minutes = 0;
        if(hours === 25) {
            hours = 1
        } else {
            hours++
        }
    } 
    if( seconds < 59) {
         seconds++
    } else {
        seconds = 0;
        minutes++;    
    }
}
function textOutPut() {
    let block = document.querySelector('.timer');
    if(seconds < 10) {
        if(minutes < 10) {
            block.innerHTML = hours + ':' + '0' + minutes + ':' + '0' + seconds 
        } else {
            block.innerHTML = hours + ':' + minutes + ':' + '0' + seconds 
        }
    } else {
        if(minutes < 10) {
            block.innerHTML = hours + ':' + '0' + minutes + ':' + seconds
        } else {
            block.innerHTML = hours + ':' + minutes + ':' + seconds
        }
        
    }  
}



