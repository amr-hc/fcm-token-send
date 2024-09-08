const admin = require('firebase-admin');

const serviceAccount = require('./laravel-59257-firebase-adminsdk-vws1o-2488694b32.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const message = {
  notification: {
    title: 'Hello, World!',
    body: 'This is a test message.'
  },
//   token: 'fQiok5DdXhRl2GNTmQ7B7E:APA91bEt1FO5ZlOV4e21hAbam2KYVSFFz1vACLJSrbd0Xr8kQb9beYvC-wqwv1q8A5HoLfCj9eyaO-e_n7ifDXn1xt7gdxXHcJ34XJ4vSDGmKBZ3asUo1TwsMjyGHiWKX0Ab91lp3rXW'
  token: 'f99IQKHSIed7gucqSVj5Bj:APA91bGmblMNb8EEggfyG8bHYL56YiMvjuierLVKuUtXJTPoWr-tyW0U7et4UjdacWM293UO8DcCynytP8HCUJ38zNUMDrA9BDTJj0UYO644l7ZkIdl_tf0FbqUkqaLwuQRFGtzIUBcb'
};

admin.messaging().send(message)
  .then((response) => {
    console.log('Successfully sent message:', response);
  })
  .catch((error) => {
    console.error('Error sending message:', error);
  });
