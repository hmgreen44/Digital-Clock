function clock(){
    let currentTime = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    function addZero(component) {
        return component < 10 ? "0" + component : component;
      }
    
    let period = "AM";{
        if (hrs == 0) hrs = 12;
        if (hrs > 12) hrs = hrs - 12;	    
        
        period = "PM";

        hrs = hrs < 10 ? "0" + hrs : hrs;
        mins = mins < 10 ? "0" + mins : mins;
        secs = secs < 10 ? "0" + secs : secs;


        
        document.getElementById("clock").innerText = timeString;
        let Timer = setTimeout(displayCurrentTime, 1000);

        function addZero(component) {
            return component < 10 ? "0" + component : component;
          }

      clock();
    }  
}