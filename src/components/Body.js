import React from "react";

export default function Body() {
    return (
        <div className="body">
            <div className="input-grp">
                <input placeholder="Upper texts..." className="upper-inp" />
                <input placeholder="Under texts..." className="under-inp" />
            </div>
            <button className="new-meme-btn">Get a new meme image</button>
            <img className="generated-img" />
        </div>
    )
}