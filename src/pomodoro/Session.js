import React from "react";
import { secondsToDuration } from "../utils/duration";
import { minutesToDuration } from "../utils/duration";


function Session ({session, focusDuration, breakDuration}) {
    function whichSession(label) {
       if (label === "Focusing"){
           return focusDuration;
       } else{
           return breakDuration;
       } 
    }

    function getElapsedPercentage(totalTime, timeRemaining){
        const timeInSeconds = totalTime * 60;
        const elapsed = timeInSeconds - timeRemaining;
        return (elapsed * 100) / timeInSeconds
    }

    if (session === null) {
        return null
    } else {
        return (
            <div>
                {/* TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused */}
                <div className="row mb-2">
                <div className="col">
                    {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
                    <h2 data-testid="session-title">
                    {session.label} for {minutesToDuration(whichSession(session.label))} minutes
                    </h2>
                    {/* TODO: Update message below correctly format the time remaining in the current session */}
                    <p className="lead" data-testid="session-sub-title">
                    {secondsToDuration(session.timeRemaining)} remaining
                    </p>
                </div>
                </div>
                <div className="row mb-2">
                <div className="col">
                    <div className="progress" style={{ height: "20px" }}>
                    <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        // TODO: Increase aria-valuenow as elapsed time increases
                        aria-valuenow={getElapsedPercentage(whichSession(session.label), session.timeRemaining)} 
                        // TODO: Increase width % as elapsed time increases
                        style={{ width: getElapsedPercentage(whichSession(session.label), session.timeRemaining) + "%" }} 
                    />
                    </div>
                </div>
                </div>
            </div>
            );
    }
}

export default Session;