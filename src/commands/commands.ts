import { MatrixClient, MentionPill, MessageEvent, MessageEventContent } from "matrix-bot-sdk";
import * as htmlEscape from "escape-html";
import config from "../config";
const trusted = config.trusted
export async function runHelloCommand(roomId: string, event: MessageEvent<MessageEventContent>, args: string[], client: MatrixClient) {
    // The first argument is always going to be us, so get the second argument instead.
    let sayHelloTo = args[1];
    if (!sayHelloTo) sayHelloTo = event.sender;

    let text = `Hello ${sayHelloTo}!`;
    let html = `Hello ${htmlEscape(sayHelloTo)}!`;

    if (sayHelloTo.startsWith("@")) {
        // Awesome! The user supplied an ID so we can create a proper mention instead
        const mention = await MentionPill.forUser(sayHelloTo, roomId, client);
        text = `Hello ${mention.text}!`;
        html = `Hello ${mention.html}!`;
    }

    // Now send that message as a notice
    return client.sendMessage(roomId, {
        body: text,
        msgtype: "m.notice",
        format: "org.matrix.custom.html",
        formatted_body: html,
    });
}
export async function runBanCommand(roomId: string, event: MessageEvent<MessageEventContent>, args: string[], client: MatrixClient) {
    let userId = args[1];
    let message = args[2];
    const sender = event['sender']
    if (userId.startsWith("@")) {
        if (event['sender'] === trusted) {
            client.banUser(userId, roomId, message);
        }
        else {
            client.sendMessage(roomId, {
                body: "You dont have permissions to do that.",
                msgtype: "m.notice"
            })
        }
    }
}
export async function runUnbanCommand(roomId: string, event: MessageEvent<MessageEventContent>, args: string[], client: MatrixClient) {
    let userId = args[1];
    if (event['sender'] === trusted) {
        client.unbanUser(userId, roomId);
    }
    else {
        client.sendMessage(roomId, {
            body: "You dont have permissions to do that.",
            msgtype: "m.notice",
        });
    }
}
export async function runInviteCommand(roomId: string, event: MessageEvent<MessageEventContent>, args: string[], client: MatrixClient) {
    // The first argument is always going to be us, so get the second argument instead.
    let invite = args[1];
    if (invite.startsWith("@")) {
        if (event['sender'] === trusted) {
            client.inviteUser(`${invite}`, roomId);
        }
        else {
            client.sendMessage(roomId, {
                body: "You dont have permissions to do that.",
                msgtype: "m.notice",
            });
        }
    }
}
export async function runKickCommand(roomId: string, event: MessageEvent<MessageEventContent>, args: string[], client: MatrixClient) {
    let userId = args[1];
    const sender = event['sender']
    let message = args[2]
    if (userId.startsWith("@")) {
        if (event['sender'] === trusted) {
            client.kickUser(userId, roomId, message)
        }
        else {
            client.sendMessage(roomId, {
                body: "You dont have permissions to do that.",
                msgtype: "m.notice",
            });
        }
    }        
}
