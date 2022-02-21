import { MatrixClient, MentionPill, MessageEvent, MessageEventContent } from "matrix-bot-sdk";
import * as htmlEscape from "escape-html";

export async function runInviteCommand(roomId: string, event: MessageEvent<MessageEventContent>, args: string[], client: MatrixClient) {
    // The first argument is always going to be us, so get the second argument instead.
    let invite = args[1];
    if (invite.startsWith("@")) {
        // Awesome! The user supplied an ID so we can create a proper mention instead
        const mention = await MentionPill.forUser(invite, roomId, client);
        text = `/invite ${mention.text}`;
        html = `/invite ${mention.html}`;
    }

    // Now send that message as a notice
    return client.sendMessage(roomId, {
        body: text,
        msgtype: "m.notice",
        format: "org.matrix.custom.html",
        formatted_body: html,
    });
    
}
    else {
        return client.sendMessage(roomId, {
            body: "Invite command syntac: \n e.g !bot invite USERNAMEHERE"
            msgtype_ "m.notice",
            format: "org.matrix.custom.html",
            formatted_body: "<p>Invite command syntax: <br> e.g !bot invite USERNAMEHERE</p>",
        });
    }
