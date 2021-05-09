# pomodoro-timer

The Pomodoro technique is a time-management method developed by Francesco Cirillo in the late 1980s. It traditionally breaks up focus sessions into 25 minute blocks, which then transition into 5 minute break sessions, which lead back in to 25 minute focus sessions.

- The user first sets how long they want their focus sessions to be (between 5 mins and 60 mins).
- They then set how long they want their break sessions to be (between 1 min and 5 mins).

![Alt text](/screenshots/pomodoro-timer-screenshot-stopped.png?raw=true "pomodoro-timer-screenshot-stopped")

- Upon clicking "Play", a countdown timer will begin, and a progress bar will appear showing the elapsed time.
- When the focus session ends, a *ding* sound will ring, and the focus session will become the break session.
- When the break session ends, a *ding* sound will ring, and the break session will become the focus session.
- This process will repeat, alternating between focus sessions and break sessions until the user clicks "stop", at which time the app will reset to the initial state.

![Alt text](/screenshots/pomodoro-timer-screenshot-focusing.png?raw=true "pomodoro-timer-screenshot-focusing")

For this Thinkful assignment, the curriculum provided a static React app styled using Bootstrap, which I applied JavaScript functionality to. 

This project was my first utilization of using event listeners to update the state in React. This project was also my introduction to the concepts of both higher-order functions and pure functions. 
