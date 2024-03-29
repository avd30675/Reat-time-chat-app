# A Secure Chat Application using React and the Signal Protocol

## Technology Stack
1. ReactJS library for UI
2. Signal Protocol Implementation for E2EE
3. Axios for AJAX calls
4. LocalStorage to store/fetch Pre-key bundle and Chats/Conversations
5. Web Sockets Implementation for Instant Messaging

## To Initialize the Frontend of this Project use the command -
` nodemon start `

## Components
1. Login
2. Chat Window
    1. Contact List
    2. Message Box

## Axios Calls
1. GET - api/users/login/userName - Returns User Object of the given User
2. GET - api/users/users/userId/role - Returns Users Array other than the given User with given role

## Web Sockets
1. Establishing WS Connection: `let webSocket = new WebSocket("ws://localhost:3000/chat")`
2. Event Listeners of the webSocket Object:
```
    webSocket.onopen = () => {
        console.log(‘WebSocket Client Connected’);
        webSocket.send('Hi this is web client.');
    };
    webSocket.onmessage = (e) => {
        console.log(‘Received: ’ + e.data);
    };
    webSocket.close = () => {
        console.log('WebSocket Client Closed.’);
    };
```

## Signal Protocol Implementation
1. InMemorySignalProtocolStore.js (and helpers.js) are taken for storage purpose from Signal Github (link mentioned in resources)
2. libsignal-protocol.js (also from Signal Github) implements the protocol
3. Signal Gateway - Created by me to integrate React with Signal. It performs the Initialization, Encryption and Decryption functionality when required on Frontend. Check the file in src/signal/SignalGateway.js for detailed code.

