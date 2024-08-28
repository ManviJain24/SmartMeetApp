import { createClient } from 'agora-rtm-react';

// const appId = "9018a94d10f34248aa03f0d14a011fb9";
const appId = "8fa30411d71c4205b3453501d0156237";
const token = null;
export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useRTMClient = createClient(appId);

// import { createClient } from 'agora-rtm-react';

// // Retrieve App ID from the environment variables
// const appId = process.env.REACT_APP_AGORA_APP_ID; // Make sure this is in your .env file
// const token = null; // Keep this as null if you're not using a token

// // Agora configuration
// export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };

// // Create RTM Client using Agora App ID
// export const useRTMClient = createClient(appId);
