define({ "api": [
  {
    "type": "",
    "url": "auth-error",
    "title": "emit authentication error",
    "version": "1.0.0",
    "group": "Emit",
    "description": "<p>This event is emmited when the auth token provided by user cannot be verified</p>",
    "filename": "event/socketioLib.js",
    "groupTitle": "Emit",
    "name": "AuthError"
  },
  {
    "type": "",
    "url": "auth-error",
    "title": "broadcast users online",
    "version": "1.0.0",
    "group": "Emit",
    "description": "<p>This broadcast event is emited to indicate the online users</p>",
    "filename": "event/socketioLib.js",
    "groupTitle": "Emit",
    "name": "AuthError"
  },
  {
    "type": "",
    "url": "friendRequest",
    "title": "send friend request",
    "version": "1.0.0",
    "group": "Emit",
    "description": "<p>This event is emited when one client sends a request to another(this is for notification purpose only)</p>",
    "filename": "event/socketioLib.js",
    "groupTitle": "Emit",
    "name": "Friendrequest"
  },
  {
    "type": "",
    "url": "noti",
    "title": "emit",
    "version": "1.0.0",
    "group": "Emit",
    "description": "<p>This event is emited when a notification of update arrives from client</p>",
    "filename": "event/socketioLib.js",
    "groupTitle": "Emit",
    "name": "Noti"
  },
  {
    "type": "",
    "url": "save-notification",
    "title": "",
    "version": "1.0.0",
    "group": "Emit",
    "description": "<p>This event is emited to save the notification received to database</p>",
    "filename": "event/socketioLib.js",
    "groupTitle": "Emit",
    "name": "SaveNotification"
  },
  {
    "type": "",
    "url": "verifyUser",
    "title": "verify user",
    "version": "1.0.0",
    "group": "Emit",
    "description": "<p>This event is emited to ask client to verify itself.</p>",
    "filename": "event/socketioLib.js",
    "groupTitle": "Emit",
    "name": "Verifyuser"
  },
  {
    "type": "",
    "url": "disconnect",
    "title": "to disconnect from socket",
    "version": "1.0.0",
    "group": "Listen",
    "description": "<p>This eventListner is listens to disconnect event to disconnect from socket</p>",
    "filename": "event/socketioLib.js",
    "groupTitle": "Listen",
    "name": "Disconnect"
  },
  {
    "type": "",
    "url": "friend-notification",
    "title": "friends related notification",
    "version": "1.0.0",
    "group": "Listen",
    "description": "<p>This eventListner listens to updates from client on friend request,reject,accept,unfriend</p>",
    "filename": "event/socketioLib.js",
    "groupTitle": "Listen",
    "name": "FriendNotification"
  },
  {
    "type": "",
    "url": "notify-updates",
    "title": "notification",
    "version": "1.0.0",
    "group": "Listen",
    "description": "<p>This eventListner listens to updates from client</p>",
    "filename": "event/socketioLib.js",
    "groupTitle": "Listen",
    "name": "NotifyUpdates"
  },
  {
    "type": "",
    "url": "save-notification",
    "title": "save notification to database",
    "version": "1.0.0",
    "group": "Listen",
    "description": "<p>This eventListner listens to notification updates to save them in database</p>",
    "filename": "event/socketioLib.js",
    "groupTitle": "Listen",
    "name": "SaveNotification"
  },
  {
    "type": "",
    "url": "set-user",
    "title": "Setting user online",
    "version": "1.0.0",
    "group": "Listen",
    "description": "<p>This eventListner listens to user for authToken verification</p>",
    "filename": "event/socketioLib.js",
    "groupTitle": "Listen",
    "name": "SetUser"
  }
] });
