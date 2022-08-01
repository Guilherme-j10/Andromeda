/// <reference types="node" />
import { Contact, MessageUpsertType, proto } from "@adiwajshing/baileys";
export declare const IBaileys: {
    getOrderDetails: (orderId: string, tokenBase64: string) => Promise<import("@adiwajshing/baileys").OrderDetails>;
    getCatalog: (jid?: string | undefined, limit?: number | undefined) => Promise<{
        products: import("@adiwajshing/baileys").Product[];
    }>;
    getCollections: (jid?: string | undefined, limit?: number | undefined) => Promise<{
        collections: import("@adiwajshing/baileys").CatalogCollection[];
    }>;
    productCreate: (create: import("@adiwajshing/baileys").ProductCreate) => Promise<import("@adiwajshing/baileys").Product>;
    productDelete: (productIds: string[]) => Promise<{
        deleted: number;
    }>;
    productUpdate: (productId: string, update: import("@adiwajshing/baileys").ProductUpdate) => Promise<import("@adiwajshing/baileys").Product>;
    sendMessageAck: ({ tag, attrs }: import("@adiwajshing/baileys").BinaryNode, extraAttrs?: {
        [key: string]: string;
    } | undefined) => Promise<void>;
    sendRetryRequest: (node: import("@adiwajshing/baileys").BinaryNode, forceIncludeKeys?: boolean | undefined) => Promise<void>;
    getPrivacyTokens: (jids: string[]) => Promise<import("@adiwajshing/baileys").BinaryNode>;
    assertSessions: (jids: string[], force: boolean) => Promise<boolean>;
    relayMessage: (jid: string, message: proto.IMessage, { messageId: msgId, participant, additionalAttributes, useUserDevicesCache, cachedGroupMetadata }: import("@adiwajshing/baileys").MessageRelayOptions) => Promise<string>;
    sendReceipt: (jid: string, participant: string | undefined, messageIds: string[], type: import("@adiwajshing/baileys").MessageReceiptType) => Promise<void>;
    sendReadReceipt: (jid: string, participant: string | undefined, messageIds: string[]) => Promise<void>;
    readMessages: (keys: proto.IMessageKey[]) => Promise<void>;
    refreshMediaConn: (forceGet?: boolean | undefined) => Promise<import("@adiwajshing/baileys").MediaConnInfo>;
    waUploadToServer: import("@adiwajshing/baileys").WAMediaUploadFunction;
    fetchPrivacySettings: (force?: boolean | undefined) => Promise<{
        [_: string]: string;
    }>;
    updateMediaMessage: (message: proto.IWebMessageInfo) => Promise<proto.IWebMessageInfo>;
    sendMessage: (jid: string, content: import("@adiwajshing/baileys").AnyMessageContent, options?: import("@adiwajshing/baileys").MiscMessageGenerationOptions | undefined) => Promise<proto.WebMessageInfo | undefined>;
    groupMetadata: (jid: string) => Promise<import("@adiwajshing/baileys").GroupMetadata>;
    groupCreate: (subject: string, participants: string[]) => Promise<import("@adiwajshing/baileys").GroupMetadata>;
    groupLeave: (id: string) => Promise<void>;
    groupUpdateSubject: (jid: string, subject: string) => Promise<void>;
    groupParticipantsUpdate: (jid: string, participants: string[], action: import("@adiwajshing/baileys").ParticipantAction) => Promise<{
        status: string;
        jid: string;
    }[]>;
    groupUpdateDescription: (jid: string, description?: string | undefined) => Promise<void>;
    groupInviteCode: (jid: string) => Promise<string | undefined>;
    groupRevokeInvite: (jid: string) => Promise<string | undefined>;
    groupAcceptInvite: (code: string) => Promise<string | undefined>;
    groupAcceptInviteV4: (key: string | proto.IMessageKey, inviteMessage: proto.IGroupInviteMessage) => Promise<string>;
    groupGetInviteInfo: (code: string) => Promise<import("@adiwajshing/baileys").GroupMetadata>;
    groupToggleEphemeral: (jid: string, ephemeralExpiration: number) => Promise<void>;
    groupSettingUpdate: (jid: string, setting: "announcement" | "locked" | "not_announcement" | "unlocked") => Promise<void>;
    groupFetchAllParticipating: () => Promise<{
        [_: string]: import("@adiwajshing/baileys").GroupMetadata;
    }>;
    processingMutex: {
        mutex<T>(code: () => T | Promise<T>): Promise<T>;
    };
    upsertMessage: (msg: proto.IWebMessageInfo, type: MessageUpsertType) => Promise<void>;
    appPatch: (patchCreate: import("@adiwajshing/baileys").WAPatchCreate) => Promise<void>;
    sendPresenceUpdate: (type: import("@adiwajshing/baileys").WAPresence, toJid?: string | undefined) => Promise<void>;
    presenceSubscribe: (toJid: string) => Promise<void>;
    profilePictureUrl: (jid: string, type?: "image" | "preview" | undefined, timeoutMs?: number | undefined) => Promise<string | undefined>;
    onWhatsApp: (...jids: string[]) => Promise<{
        exists: boolean;
        jid: string;
    }[]>;
    fetchBlocklist: () => Promise<string[]>;
    fetchStatus: (jid: string) => Promise<{
        status: string | undefined;
        setAt: Date;
    } | undefined>;
    updateProfilePicture: (jid: string, content: import("@adiwajshing/baileys").WAMediaUpload) => Promise<void>;
    updateProfileStatus: (status: string) => Promise<void>;
    updateBlockStatus: (jid: string, action: "block" | "unblock") => Promise<void>;
    getBusinessProfile: (jid: string) => Promise<void | import("@adiwajshing/baileys").WABusinessProfile>;
    resyncAppState: (collections: readonly ("critical_block" | "critical_unblock_low" | "regular_high" | "regular_low" | "regular")[], recvChats: import("@adiwajshing/baileys").InitialReceivedChatsState | undefined) => Promise<void>;
    chatModify: (mod: import("@adiwajshing/baileys").ChatModification, jid: string) => Promise<void>;
    resyncMainAppState: (ctx?: import("@adiwajshing/baileys").InitialReceivedChatsState | undefined) => Promise<void>;
    type: "md";
    ws: any;
    ev: import("@adiwajshing/baileys").BaileysEventEmitter & {
        process(handler: (events: Partial<import("@adiwajshing/baileys").BaileysEventMap<import("@adiwajshing/baileys").AuthenticationCreds>>) => void | Promise<void>): () => void;
        buffer(): boolean;
        flush(): Promise<void>;
        processInBuffer(task: Promise<any>): any;
    };
    authState: {
        creds: import("@adiwajshing/baileys").AuthenticationCreds;
        keys: import("@adiwajshing/baileys").SignalKeyStoreWithTransaction;
    };
    user: Contact | undefined;
    generateMessageTag: () => string;
    query: (node: import("@adiwajshing/baileys").BinaryNode, timeoutMs?: number | undefined) => Promise<import("@adiwajshing/baileys").BinaryNode>;
    waitForMessage: (msgId: string, timeoutMs?: number | undefined) => Promise<any>;
    waitForSocketOpen: () => Promise<void>;
    sendRawMessage: (data: Buffer | Uint8Array) => Promise<void>;
    sendNode: (frame: import("@adiwajshing/baileys").BinaryNode) => Promise<void>;
    logout: () => Promise<void>;
    end: (error: Error | undefined) => void;
    onUnexpectedError: (error: Error, msg: string) => void;
    uploadPreKeys: (count?: number | undefined) => Promise<void>;
    waitForConnectionUpdate: (check: (u: Partial<import("@adiwajshing/baileys").ConnectionState>) => boolean | undefined, timeoutMs?: number | undefined) => Promise<void>;
};
export interface MessagesType {
    messages: proto.IWebMessageInfo[];
    type: MessageUpsertType;
}
export interface ITypeDeviceWithMessage {
    typeDevice: string;
    message: proto.WebMessageInfo;
}
export interface AndromedaStorageConnection {
    host: string;
    pass: string;
    dbname: 'andromeda';
    user: string;
}
export interface AndromedaProps {
    sessionName: string;
    qrcodoPath: string;
    qrCodeInTerminal: boolean;
    TemporaryStoragePath: string;
    IgnoreBroadCastMessages: boolean;
    connectionStorage: AndromedaStorageConnection;
    IgnoreGroupsMessages: boolean;
    IgnoreServer_ACK: boolean;
    onMessage: (message: MessagesType) => void;
}
export interface IExistenceOnWhatsApp {
    exists: boolean;
    formatedJid: string;
}
export interface IListMessageDefinitions {
    text: string;
    footer?: string;
    title: string;
    buttonText: string;
    sections: Array<{
        title: string;
        rows: Array<{
            title: string;
            rowId: string;
            description?: string;
        }>;
    }>;
}
export interface IAndromeda {
    verifyExistenceNumber: (number: string) => Promise<IExistenceOnWhatsApp>;
    sendGifOrVideoMessage: (mediaPath: string, number: string, content?: string, isGif?: boolean) => Promise<proto.WebMessageInfo>;
    sendImage: (imagePath: string, number: string, content?: string) => Promise<proto.WebMessageInfo>;
    sendAudioMedia: (audioPath: string, number: string, isPtt?: boolean) => Promise<proto.WebMessageInfo>;
    logOut: () => Promise<boolean>;
    sendListMessage: (number: string, listMessage: IListMessageDefinitions) => Promise<proto.WebMessageInfo>;
    getDeviceInformation: () => Contact;
    blockContact: (number: string) => Promise<boolean>;
    unBlockContact: (number: string) => Promise<boolean>;
    getImageContact: (number: string, isGroup: boolean) => Promise<{
        uri: string;
    }>;
    deleteMessageForEveryone: (number: string, messageId: string, isGroup?: boolean) => Promise<boolean>;
    sendSimpleMessage: (content: string, number: string) => Promise<proto.WebMessageInfo>;
    replyMessage: (number: string, content: string, quotedId: string) => Promise<proto.WebMessageInfo>;
}
