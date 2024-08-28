// src/AgoraRTCSetup.js

import AgoraRTC from 'agora-rtc-sdk-ng';

const appId = "8fa30411d71c4205b3453501d0156237"; // Ensure this is the correct App ID
const token = null; // If your application requires a token, provide it here

const rtcClient = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

export { rtcClient, appId, token };
