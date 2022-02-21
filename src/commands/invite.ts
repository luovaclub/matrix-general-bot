import { MatrixClient, MentionPill, MessageEvent, MessageEventContent } from "matrix-bot-sdk";
import * as htmlEscape from "escape-html";

export async function runInviteCommand(roomId: string, event: MessageEvent<MessageEventContent>, args: string[], client: MatrixClient) {
    // The first argument is always going to be us, so get the second argument instead.
    let invite = args[1];
    if (invite.startsWith("@")) {
        const mention = await MentionPill.forUser(invite, roomId, client);
        return client.sendMessage(roomId, {
        body: "`/invite ${mention.text}`",
        msgtype: "m.text",
    });   
    }
}