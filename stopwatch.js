function Stopwatch(){
    let startTime = 0;
    let endTime = 0;
    let time = 0
    let running  = false;

    setInterval(() => {
      time++;
    }, 1000);

    this.duration = Math.abs(endTime-startTime);
    
    this.start = function(){
        if(!running){
           running = true;
           startTime = time;
        }
        else{
            throw new Error('Stopwatch is already running!')
        }
    }

    this.stop = function(){
        if(running){
            running = false;
            endTime = time;
        } 
        else 
            throw new Error("Stopwatch is not running!")
    }

    this.reset = function(){
        running = false;
        startTime = 0;
        endTime = 0;
    }
}

const sw = new Stopwatch();

