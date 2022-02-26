import { MatrixClient, MentionPill, MessageEvent, MessageEventContent } from "matrix-bot-sdk";
import * as htmlEscape from "escape-html";
import config from "../config";
const trusted = "";
const room0 = "!elqAczjsfTtBjaZuWz:elokapina.fi";
const room1 = "!UxyzkbQEVPQoYKAsBI:elokapina.fi";
const room2 = "!UqSHVudQJttrqzZzse:elokapina.fi";
const room3 = "!qyGoSbGbtamwBbPKjf:elokapina.fi";
const room4 = "!VYYLdtifSIBSiuiEuN:elokapina.fi";
const room5 = "!icCQMTpMkJZqkmJxFx:elokapina.fi";
const room6 = "!RHuFDDyCqXTtSeVVKv:elokapina.fi";
const room7 = "!LQSDStLNfUefIQiyYU:elokapina.fi";
const room8 = "!yApgOqKZRTUZYdzyvR:elokapina.fi";
const room9 = "!TJtdarVpqzIHNJPUcc:elokapina.fi";
const room10 = "!OzQJYlXqgvfelbLnex:elokapina.fi";
const room11 = "!kerARSNuEGwXcImvPC:elokapina.fi";
const room12 = "!EoOhLmiJsEiVBIZuSE:elokapina.fi";
const room13 = "!qbAOYfukeqHGtzFWCl:elokapina.fi";
const room14 = "!cnPuLCELUmOXStCSkR:elokapina.fi";
const room15 = "!nfNXjgpOGnwOAKCNFn:elokapina.fi";
const room16 = "!AznlbrgqiTVWevaLCW:elokapina.fi";
const room17 = "!XnonpqVMrBfdfdeAxU:elokapina.fi";
const room18 = "!aItIImfCvmRSwUEWyT:elokapina.fi";
const room19 = "!EYeADzFcGwGgttyOlN:elokapina.fi";
const room20 = "!zJqFxbyLXDhnoKvXDw:elokapina.fi";
const room21 = "!ebbdVfeeWpjcNfGLnp:elokapina.fi";
const room22 = "!FBkUPZnNpJooKFTRRs:elokapina.fi";
const room23 = "!ONFiGiGvKBaEeJjmWS:elokapina.fi";
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
export async function runNeedjobsCommand(roomId: string, event: MessageEvent<MessageEventContent>, args: string[], client: MatrixClient) {
    const message = "Hei, onko sinulla Elokapinaan liittyvä video, johon haluaisit tekstityksen ja käännökset englanniksi ja ruotsiksi. Lähetä linkki videoon yksityisviestillä @tekstitykset:elokapina.fi käyttäjälle, kerro myös onko tekstityksellä joku määräaika. Jos et osaa tehdä videoon linkkiä, ota yksityisviestillä yhteyttä @vuoreol:elokapina.fi käyttäjään."
    if (event['sender'] === trusted) {
        sendmassa(client, message);
    }
    else {
        client.sendMessage(roomId, {
            body: "You dont have permissions to do that.",
            msgtype: "m.notice",
        });
        }
}    

function sendmassa(client: MatrixClient, message: string) {
    client.sendText(room1, message);
    client.sendText(room2, message);
    client.sendText(room3, message);
    client.sendText(room4, message);
    client.sendText(room5, message);
    client.sendText(room6, message);
    client.sendText(room7, message);
    client.sendText(room8, message);
    client.sendText(room9, message);
    client.sendText(room10, message);
    client.sendText(room11, message);
    client.sendText(room12, message);
    client.sendText(room13, message);
    client.sendText(room14, message);
    client.sendText(room15, message);
    client.sendText(room16, message);
    client.sendText(room17, message);
    client.sendText(room18, message);
    client.sendText(room19, message);
    client.sendText(room20, message);
    client.sendText(room21, message);
    client.sendText(room22, message);
    client.sendText(room23, message);
}
