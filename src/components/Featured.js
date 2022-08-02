import useWebsocket from "react-use-websocket";
import React from "react";

function Featured() {
    const [backendReply, setBackendReply] = React.useState("")

    function updCard(event) {
        const reply = JSON.parse(event.data).message
        setBackendReply(reply)
    }

    const {sendJsonMessage, getWebSocket} = useWebsocket(
        "ws://127.0.0.1:8000/ws/featured/",
        {
            onMessage: (event) => updCard(event)
        }
    )

    return (
        <div className="card" style={{marginTop: "20px", marginRight: "20px", marginLeft: "20px"}}>
            <div className="card-header">
                Featured
            </div>
            <div className="card-body">
                <h5 className="card-title">{backendReply.word}</h5>
                <p className="card-text">{backendReply.definition}</p>
                <a href="#" className="btn btn-primary">Save</a>
            </div>
        </div>
    )
}

export default Featured