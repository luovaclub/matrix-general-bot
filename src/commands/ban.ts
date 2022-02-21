import { MatrixClient, MentionPill, MessageEvent, MessageEventContent } from "matrix-bot-sdk";
import * as htmlEscape from "escape-html";
export async function runKickCommand(roomId: string, event: MessageEvent<MessageEventContent>, args: string[], client: MatrixClient) {
    let userId = args[1];
    let message = args[2];
    if (userId.startsWith("@")) {
        client.banUser(userId, roomId, message);
    }
    else {
        client.sendText(roomId, "Command 'ban' syntax:\n ${COMMAND_PREFIX} ban USERNAMETOBAN");
    }
}