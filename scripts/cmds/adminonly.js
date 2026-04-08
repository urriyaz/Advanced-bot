onStart: async function ({ args, message, event, api, getLang }) {
	const threadInfo = await api.getThreadInfo(event.threadID);
	const adminIDs = threadInfo.adminIDs.map(item => item.id);

	// check user is group admin or not
	if (!adminIDs.includes(event.senderID)) {
		return message.reply("❌ শুধু গ্রুপ অ্যাডমিনরা এই বট ব্যবহার করতে পারবে!");
	}

	let isSetNoti = false;
	let value;
	let indexGetVal = 0;

	if (args[0] == "noti") {
		isSetNoti = true;
		indexGetVal = 1;
	}

	if (args[indexGetVal] == "on")
		value = true;
	else if (args[indexGetVal] == "off")
		value = false;
	else
		return message.SyntaxError();

	if (isSetNoti) {
		global.GoatBot.config.hideNotiMessage.adminOnly = !value;
		message.reply(getLang(value ? "turnedOnNoti" : "turnedOffNoti"));
	}
	else {
		global.GoatBot.config.adminOnly.enable = value;
		message.reply(getLang(value ? "turnedOn" : "turnedOff"));
	}
};
