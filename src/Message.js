import React, { forwardRef } from 'react'
import './Message.css'

import { Card, CardContent, Typography } from '@material-ui/core';
const Message = forwardRef(({ message, username }, ref) => {
    const isUser = username === message.username;
    return (
            <div ref={ref} className={`message_card ${isUser && 'message_user'}`}>
                <Card className={`${isUser ? 'message_usercard' : 'message_guestcard'}`}>
                    <CardContent>
                        <Typography color="white" variant="subtitle2" component="subtitle1">
                            {!isUser && `${message.username || 'Unknown User'}:`}  {message.message}
                        </Typography>
                    </CardContent>
                </Card>
                {/* <p>{props.username} : {props.text}</p> */}
            </div>
    )
}
);

export default Message
