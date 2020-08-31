// // initialize the express application
// const express = require("express");
// var session = require('express-session')
// const app = express();
// var sess = {
//     token: '',
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: true }
// }

// app.use(session(sess))

// var port = process.env.PORT || 3000

// // initialize the Fitbit API client
// const FitbitApiClient = require("fitbit-node");
// const client = new FitbitApiClient({
//     clientId: "22BRPR",
//     clientSecret: "b5c8d1d75675c65f4b6078f80df105ac",
//     apiVersion: '1.2' // 1.2 is the default
// });

// app.get("/", (req, res) => {
//     res.send("hello");
// });

// // redirect the user to the Fitbit authorization page
// app.get("/authorize", (req, res) => {
//     // request access to the user's activity, heartrate, location, nutrion, profile, settings, sleep, social, and weight scopes
//     res.redirect(client.getAuthorizeUrl('activity heartrate location nutrition profile settings sleep social weight', 'http://localhost:3000/callback'));
// });

// // handle the callback from the Fitbit authorization flow
// app.get("/callback", (req, res) => {
//     // exchange the authorization code we just received for an access token
//     client.getAccessToken(req.query.code, 'http://localhost:3000/callback').then(result => {
//         if (typeof result.access_token != "undefined") {
//             // req.session.sess.token = result.access_token;
//             sess.token = result.access_token;
//             // use the access token to fetch the user's profile information
//             client.get("/profile.json", result.access_token).then(results => {
//                 res.send(results[0]);
//             }).catch(err => {
//                 res.status(err.status).send(err);
//             });
//         }
//     }).catch(err => {
//         res.status(err.status).send(err);
//     });
// });

// app.get("/stats", (req, res) => {
//     // exchange the authorization code we just received for an access token
//     client.get("/activities/steps/date/today/1m.json", sess.token).then(results => {
//         res.send(results[0]);
//     }).catch(err => {
//         res.status(err.status).send(err);
//     });
// });

// app.get("/others", (req, res) => {
//     // exchange the authorization code we just received for an access token
//     client.get("/profile.json", sess.token, "8SMNQK").then(results => {
//         res.send(results[0]);
//     }).catch(err => {
//         res.status(err.status).send(err);
//     });
// });

// app.get("/activities", (req, res) => {
//     // exchange the authorization code we just received for an access token
//     client.get("/activities.json", sess.token, "8SJLMX").then(results => {
//         res.send(results[0]);
//     }).catch(err => {
//         res.status(err.status).send(err);
//     });
// });

// app.get("/foods", (req, res) => {
//     client.getByCustomUrl("/1/foods/locales.json", sess.token).then(results => {
//         res.send(results[0]);
//     })
// })

// // launch the server
// app.listen(port);