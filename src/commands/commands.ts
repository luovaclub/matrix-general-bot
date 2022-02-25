import { MatrixClient, MentionPill, MessageEvent, MessageEventContent } from "matrix-bot-sdk";
import * as htmlEscape from "escape-html";
const trusted = "TRUSTEDUSERNAMEHERE";
const trusted1 = "TRUSTEDUSERNAMEHERE";
export async function runBanCommand(roomId: string, event: MessageEvent<MessageEventContent>, args: string[], client: MatrixClient) {
    const sender = event.sender;
    let userId = args[1];
    let message = args[2];
    if (userId.startsWith("@")) {
        if (sender === trusted) {
            ban();
        }
        if (sender === trusted1) {
            ban();
        }
    }

    function ban() {
        client.banUser(userId, roomId, message);
    }
}
export async function runUnbanCommand(roomId: string, event: MessageEvent<MessageEventContent>, args: string[], client: MatrixClient) {
    const sender = event.sender;
    let userId = args[1];
    if (userId.startsWith("@")) {
        if (sender === trusted) {
            unban();
        }
        if (sender === trusted1) {
            unban();
        }
    }

    function unban() {
        client.unbanUser(userId, roomId);
    }
}
export async function runKickCommand(roomId: string, event: MessageEvent<MessageEventContent>, args: string[], client: MatrixClient) {
    const sender = event.sender;
    let userId = args[1];
    let message = args[2]
    if (userId.startsWith("@")) {
        if (sender === trusted) {
            kick();
        }
        if (sender === trusted1) {
            kick();
        }
    }

    function kick() {
        client.kickUser(userId, roomId, message);
    }
}
export async function runInviteCommand(roomId: string, event: MessageEvent<MessageEventContent>, args: string[], client: MatrixClient) {
    let invite = args[1];
    const sender = event.sender
    if (invite.startsWith("@")) {
        if (sender === trusted) {
            invitation();
        }
        if (sender === trusted1) {
            invitation();
        }
    }

    function invitation() {
        client.inviteUser(`${invite}`, roomId);
    }
}
export async function runSendmessageCommand(roomId: string, event: MessageEvent<MessageEventContent>, args: string[], client: MatrixClient) {
    //let invite = args[];
    let texttosend = args[1];
    let wtosend = args[0]
    const sender = event.sender
    if (sender === trusted) {
        messagetrusted();
    }
    if (sender === trusted1) {
        messagetrusted();
    }

    function messagetrusted() {
        client.sendText(wtosend, texttosend);
    }

}
export async function runSendexitCommand(roomId: string, event: MessageEvent<MessageEventContent>, args: string[], client: MatrixClient) {
    //let invite = args[];
    let texttosend = args[1];
    let wtosend = args[0]
    const sender = event.sender
    if (sender === trusted) {
        messagetrusted();
    }
    if (sender === trusted1) {
        messagetrusted();
    }

    function messagetrusted() {
        client.sendText(wtosend, texttosend);
    }

}
