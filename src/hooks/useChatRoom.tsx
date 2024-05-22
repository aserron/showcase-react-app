import {useEffect} from 'react';

import {createConnection} from '../services/chat';

import {useEvent} from "./useEvent.tsx";

interface UseChatRoomParams {
    serverUrl: string,
    roomId: string,
    onReceiveMessage: () => void
}

export function useChatRoom({onReceiveMessage, roomId, serverUrl}: UseChatRoomParams): void {

    const onMessage = useEvent(onReceiveMessage);


    useEffect(() => {
        const options = {
            serverUrl: serverUrl,
            roomId: roomId
        };
        const connection = createConnection(options);
        connection.connect();
        connection.on('message', (msg: string) => {
            onMessage(msg);
        });
        return () => connection.disconnect();
    }, [roomId, serverUrl]);
}