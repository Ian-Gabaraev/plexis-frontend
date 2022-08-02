import useWebsocket from "react-use-websocket";
import React from "react";
import Featured from "./Featured";

function InputBox() {

    const [backendReply, setBackendReply] = React.useState("")

    function updReplyBox(event) {
        const reply = JSON.parse(event.data).message.definition
        setBackendReply(reply)
    }

    const {sendJsonMessage, getWebSocket} = useWebsocket(
        "ws://127.0.0.1:8000/ws/lobby/",
        {
            onMessage: (event) => updReplyBox(event)
        }
    )

    const sendWsMessage = event => {
        const username = document.querySelector("#inputEmail3")
        const message = document.querySelector("#inputPassword3")

        sendJsonMessage(
            {
                "message": message.value,
                "username": username.value
            }
        )
    }

    return (
        <form style={{marginLeft: "50px", marginRight: "50px", marginTop: "30px"}}>
            <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Username</label>
                <div className="col-sm-10">
                    <input
                        type="text"
                        className="form-control"
                        id="inputEmail3"
                    />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Message</label>
                <div className="col-sm-10">
                    <input
                        type="text"
                        className="form-control"
                        id="inputPassword3"
                    />
                </div>
            </div>
            <button
                type="button"
                className="btn btn-primary"
                onClick={sendWsMessage}
            >Post</button>
            <div className="card" style={{marginTop: "20px"}}>
                <div className="card-body">
                    {backendReply}
                </div>
            </div>
        </form>
    )
}

function Lobby() {

    return (
        <div>
        <InputBox/>
        <Featured/>
        </div>
    )
}

export default Lobby
