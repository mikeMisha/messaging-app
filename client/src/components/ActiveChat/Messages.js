import React from "react";
import { Box } from "@material-ui/core";
import { SenderBubble, OtherUserBubble } from ".";
import moment from "moment";

const Messages = (props) => {
	const { messages, otherUser, userId } = props;
	//sort messages by date & time
	const sortedMsgs = [...messages].sort(
		(a, b) => new Date(a.createdAt) - new Date(b.createdAt)
	);
	return (
		<Box>
			{sortedMsgs.map((message) => {
				const time = moment(message.createdAt).format("h:mm");

				return message.senderId === userId ? (
					<SenderBubble key={message.id} text={message.text} time={time} />
				) : (
					<OtherUserBubble
						key={message.id}
						text={message.text}
						time={time}
						otherUser={otherUser}
					/>
				);
			})}
		</Box>
	);
};

export default Messages;
