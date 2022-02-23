import { MatrixClient, MentionPill, MessageEvent, MessageEventContent } from "matrix-bot-sdk";
import * as htmlEscape from "escape-html";
const trusted = "@vuoreol:elokapina.fi";
export async function runBanCommand(roomId: string, event: MessageEvent<MessageEventContent>, args: string[], client: MatrixClient) {
    const sender = event.sender;
    let userId = args[1];
    let message = args[2];
    if (userId.startsWith("@")) {
        if (sender === trusted) {
            client.banUser(userId, roomId, message);
        }
    }
}
export async function runUnbanCommand(roomId: string, event: MessageEvent<MessageEventContent>, args: string[], client: MatrixClient) {
    const sender = event.sender;
    let userId = args[1];
    if (userId.startsWith("@")) {
        if (sender === trusted) {
            client.unbanUser(userId, roomId);
        }
    }
}
export async function runKickCommand(roomId: string, event: MessageEvent<MessageEventContent>, args: string[], client: MatrixClient) {
    const sender = event.sender;
    let userId = args[1];
    let message = args[2]
    if (userId.startsWith("@")) {
        if (sender === trusted) {
            client.kickUser(userId, roomId, message);
        }
    }
}
export async function runInviteCommand(roomId: string, event: MessageEvent<MessageEventContent>, args: string[], client: MatrixClient) {
    let invite = args[1];
    const sender = event.sender
    if (invite.startsWith("@")) {
        if (sender === trusted) {
            client.inviteUser(`${invite}`, roomId);
        }
    }
}
