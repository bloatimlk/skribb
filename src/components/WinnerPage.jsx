import React from "react";
import { Socket } from "socket.io-client";
import SocketEvents from "../lib/enums/socketEvents";
import UserList from "./UserList";

function WinnerPage({users, userName, socket, updateUserData, updateGameStatus, updateGameOver, readyStatus}) {
    // on click
        // set user to initialstate -> user currentscore = 0 and ready
        // update to listener user_updated
        // gameover === false
        // update to lisetener gameover
        // gamestatus === false

    // const updateUserReady = (status) => {
    //     const options = {
    //         property: "readyStatus",
    //         value: status,
    //         userName,
    //     };
    //     socket.emit(SocketEvents.UPDATE_USER, options);
    //     setReadyStatus(status);
    // }

    // const updateUserScore= (status) => {
    //     const options = {
    //         property: "currentScore",
    //         value: status,
    //         userName,
    //     };
    //     socket.emit(SocketEvents.UPDATE_USER, options);
    // }

    const initialized = () =>{
        console.log('get click')

        // updateUserScore(0);
        // updateUserReady(false);




        updateGameOver(false);

        updateGameStatus(false);

    }

    const sorted = Object.values(users).slice().sort((a,b) => b.currentScore - a.currentScore);

    return(
        <div>
            <h1>Winner is {sorted[0].userName} </h1>
            {sorted.map((user, i) => (
                <ul key={i}>
                    {i + 1}. User: {user.userName} {'  '}  Score: {user.currentScore}
                    <span>{user.readyStatus ? "ready" : "not ready"}</span>
                </ul>
            ))}
            {/* <button onClick= {initialized} >click</button> */}
            <div>
                Click this when everyone is in the room!
                    <input
                    type="checkbox"
                    checked={readyStatus}
                    onChange={(e) => {
                        updateUserReady(true);
                    }}
                />
                <span>
                    GAME AUTOMATICALLY STARTS WHEN ALL PRESENT PLAYERS CLICK READY
                </span>
            </div>
        </div>

    )
}

export default WinnerPage;