export default class Stopwatch {
  constructor(root) {
    // setting the html of stopwatch
    root.innerHTML = Stopwatch.getStopwatchHTML();

    // selecting html elements
    this.ele = {
      reset: document.getElementById("reset__icon"),
      playPause: document.getElementById("play__pause"),
      lapButton: document.getElementById("add__lap"),
      milisec: document.querySelector("h3.counter"),
      displayText: document.querySelector("div.text"),
      lapDIV: document.getElementById("lap__container"),
    };

    //track if the stopwatch is running or not
    this.interval = null;
    //  initializing the default remaining time
    this.count = 0;
    this.index = 1;

    // add click event listeners to play/ pause button
    this.ele.playPause.addEventListener("click", () => {
      if (this.interval == null) {
        this.startStopwatch();
      } else {
        this.stopStopwatch();
      }
    });
  }

  // start the stopwatch
  startStopwatch() {
    // clear the interval if any interval running initially
    clearInterval(this.interval);

    this.interval = setInterval(() => {
      this.count += 10;
      // update the stopwatch
      this.updateStopwatch();
    }, 10);

    // update the stopwatch interface
    this.updateStopwatchInterface();
  }

  // stop the stopwatch
  stopStopwatch() {
    // clear the interval
    clearInterval(this.interval);
    //setting the interval value again to nulle
    this.interval = null;
    // update the stopwatch interface
    this.updateStopwatchInterface();
  }


  // update stopwatch
  updateStopwatch() {
    this.ele.milisec.textContent = this.count;
    this.minutes = Math.floor((this.count / 1000 / 60) % 60);
    this.hours = Math.floor((this.count / 1000 / 60 / 60) % 24);
    this.seconds = Math.floor(this.count / 1000) % 60;

    this.ele.displayText.innerHTML = `
    <h1>${this.hours} <span class="text-initial">h</span></h1>
    <h1 class="text-dot">:</h1>
    <h1>${this.minutes} <span class="text-initial">m</span></h1>
    <h1 class="text-dot">:</h1>
    <h1>${this.seconds} <span class="text-initial">s</span></h1>
    `;
  }


    // update the play pause button
    updateStopwatchInterface() {
        // if the stopwatch is not running then show play button
        if (this.interval == null) {
          this.ele.playPause.children[0].classList.add("add-play-icon");
          this.ele.playPause.children[0].classList.remove("add-pause-icon");
          this.ele.playPause.children[1].textContent = "Play";
        } else {
          // show pause icon
          this.ele.playPause.children[0].classList.add("add-pause-icon");
          this.ele.playPause.children[0].classList.remove("add-play-icon");
          this.ele.playPause.children[1].textContent = "Pause";
        }
      }

      
  
  // define the static function for stopwatch
  static getStopwatchHTML() {
    return `

    <div id="stopwatch__container">
    <div id="stopwatch__body">
        <div class="stopwatch-case">

            <div class="text">
                <h1>0 <span class="text-initial">h</span></h1>
                <h1 class="text-dot">:</h1>
                <h1>0 <span class="text-initial">m</span></h1>
                <h1 class="text-dot">:</h1>
                <h1>0 <span class="text-initial">s</span></h1>
            </div>
        </div>
        <h3 class="counter">00</h3>
    </div>

    <div id="stopwatch__controls">

    <div class="yellow-color" id="reset__icon">
        <div class="reset__icon"></div>
        <p>Reset</p>
    </div>

        <div class="pink-color" id="play__pause">
            <div class="play__pause add-play-icon"></div>
            <p>Play</p>

        </div>
        <div class="yellow-color" id="add__lap">

            <div class="add__lap"></div>
            <p>Add Lap's</p>

        </div>

    </div>
</div>

<!-- lap markup --> 
<ul id="lap__container">
     <button id="clear__lap" class="hidden">Clear ALL</button>
</ul>

      `;
  }
}
