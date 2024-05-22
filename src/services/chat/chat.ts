export interface ConnectionParams {
    serverUrl: string;
    roomId: string
}

// @todo Implement server side socket.io solution.
export function createConnection({serverUrl, roomId}: ConnectionParams) {
    let intervalId: NodeJS.Timeout;
    let messageCallback: ((message: string) => void) | undefined;
    return {
        connect() {
            console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...');

            if (intervalId) {
                clearInterval(intervalId);
            }

            intervalId = setInterval(() => {
                if (messageCallback) {
                    if (Math.random() > 0.5) {
                        messageCallback('hey');
                    } else {
                        messageCallback('lol');
                    }
                }
            }, 3000);
        },
        disconnect() {
            clearInterval(intervalId);
            messageCallback = undefined;
            console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl + '');
        },

        on(event: 'message', callback: (message: string) => void) {
            if (messageCallback) {
                throw Error(`Cannot add the handler twice.: ${event}`);
            }
            messageCallback = callback;
        },
    };
}