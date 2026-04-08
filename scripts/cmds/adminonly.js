module.exports = {
	onChat: async function ({ event, api }) {
		try {
			const threadInfo = await api.getThreadInfo(event.threadID);

			// group কিনা চেক
			if (!threadInfo.isGroup) return;

			// admin list
			const adminIDs = threadInfo.adminIDs.map(item => item.id);

			// যদি user admin না হয় → stop
			if (!adminIDs.includes(event.senderID)) {
				return; // ❌ non-admin কিছুই করতে পারবে না
			}

		} catch (e) {
			console.log(e);
		}
	}
};
