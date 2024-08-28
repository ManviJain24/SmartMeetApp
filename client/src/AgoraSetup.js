// import { createClient, createMicrophoneAndCameraTracks, createScreenVideoTrack } from "agora-rtc-react";

// import AgoraRTM from 'agora-rtm-sdk';

// const appId = "9018a94d10f34248aa03f0d14a011fb9";
// const token = null;
// export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
// export const useClient = createClient(config);
// export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
// export const useScreenVideoTrack = createScreenVideoTrack();


// export const rtmClient = AgoraRTM.createInstance(appId);

import { createClient, createMicrophoneAndCameraTracks, createScreenVideoTrack } from "agora-rtc-react";
import AgoraRTM from 'agora-rtm-sdk';

// Retrieve App ID from the environment variables
const appId = process.env.REACT_APP_AGORA_APP_ID; // Ensure this is in your .env file
const token = null; // Keep this as null if you're not using a token

// Agora RTC Configuration
export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };

// Agora RTC Client
export const useClient = createClient(config);

// Agora Microphone and Camera Tracks
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();

// Agora Screen Video Track
export const useScreenVideoTrack = createScreenVideoTrack();

// Agora RTM Client
export const rtmClient = AgoraRTM.createInstance(appId);
