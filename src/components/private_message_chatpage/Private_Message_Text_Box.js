import { useState } from "react";

import { Icon } from "@iconify/react";

import socket from "../utils/actions/authActions";

const PrivateMessageTextBox = () => {
    const [message, setMessage] = useState("");

    const handleKeyDown = e => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    }

    const handleChange = e => {
        setMessage(e.target.value);
    }

    const handleSendMessage = () => {
        // Send the message to the server.
        // if (message.trim() && localStorage.getItem("username")) {
            socket.emit("privateMessageSent", {
                id: `${ socket.id }${ Math.random() }`,
                socketID: socket.id,
                // name: localStorage.getItem("username"),
                text: message
            });
        // }
        // Clear the message input.
        setMessage("");
    }

    return (
        <form className="px-2 m-3" onSubmit={ handleSendMessage }>
            <div
                className="w-100 p-0 m-0"
                style={{ marginBottom: '24px', backgroundColor: 'rgba(56, 58, 64)', textIndent: '0', borderRadius: '8px' }}
            >
                <div
                    className="overflow-x-hidden overflow-y-scroll"
                    style={{ borderRadius: '8px', backfaceVisibility: 'hidden', scrollbarWidth: 'none' }}
                >
                    <div className="d-flex position-relative">
                                    <span className="position-sticky" style={{ flex: '0 0 auto', alignSelf: 'stretch' }}>
                                        <Icon
                                            icon="bi:plus-circle-fill"
                                            className="position-sticky w-auto m-0"
                                            style={{
                                                height: '44px', padding: '10px 16px', top: '0', marginLeft: '-16px',
                                                background: 'transparent', color: 'rgba(181, 186, 193)', border: '0'
                                            }}
                                        />
                                    </span>

                        <span
                            className="p-0 fs-6 w-100 position-relative"
                            style={{
                                background: 'transparent', resize: 'none', border: 'none', appearance: 'none',
                                fontWeight: '400', lineHeight: '1.375rem', height: '44px', minHeight: '44px',
                                boxSizing: 'border-box', color: 'rgba(219, 222, 225)',
                            }}
                        >
                            <textarea
                                autoCapitalize="none" autoComplete="off" autoCorrect="off" autoFocus={ true }
                                placeholder="Text @dummy" spellCheck="true"
                                className="position-absolute overflow-hidden"
                                value={ message }
                                onChange={ handleChange }
                                onKeyDown={ handleKeyDown }
                                style={{
                                    border: 'none', outline: 'none', resize: 'none',
                                    paddingBottom: '11px', paddingTop: '11px', paddingRight: '10px',
                                    left: '0', right: '10px', background: 'transparent',
                                    caretColor: 'rgba(219, 222, 225)', color: 'rgba(219, 222, 225)'
                                }}
                            />
                        </span>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default PrivateMessageTextBox;
