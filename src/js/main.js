export default class Stopwatch {
  constructor(root) {
      // setting the html of stopwatch
      root.innerHTML = Stopwatch.getStopwatchHTML();
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
