// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  server_url: 'http://localhost:8000',
  client_id: '3',
  client_secret: '2jV7gUQkGlssyItSfkJrLp62EZPEdOdZpcrXvLhZ',
  firebase: {
    apiKey: "AIzaSyAgFnqikDC8_cQ8XOv7ttbHt7cOGfcrtG4",
    authDomain: "push-notifications-8f75c.firebaseapp.com",
    databaseURL: "https://push-notifications-8f75c.firebaseio.com",
    projectId: "push-notifications-8f75c",
    storageBucket: "",
    messagingSenderId: "643731222744"
  }
};
