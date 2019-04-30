// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: 'http://localhost:3000',
  firebase: {
    apiKey: 'AIzaSyC3J0zjMHGnFGCiR8Y3muhuGXMQHvYCtE4',
    authDomain: 'dreams-rsr.firebaseapp.com',
    databaseURL: 'https://dreams-rsr.firebaseio.com',
    projectId: 'dreams-rsr',
    storageBucket: 'dreams-rsr.appspot.com',
    messagingSenderId: '941697615885'
    // apiKey: "AIzaSyAh-6op4_Vf2JMueM93oatAiQE_6yefoZk",
    // authDomain: "first-fb1.firebaseapp.com",
    // databaseURL: "https://first-fb1.firebaseio.com",
    // projectId: "first-fb1",
    // storageBucket: "first-fb1.appspot.com",
    // messagingSenderId: "893611341425"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
