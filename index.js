const express = require("express");
const app = express() ;

// respond with "hello world" when a GET request is made to the homepage

// import * as queryString from 'query-string';
const queryString = require("query-string");

const stringifiedParams = queryString.stringify({
  client_id: "338296874733449",
  redirect_uri: '/fb',
  scope: ['email', 'user_friends'].join(','), // comma seperated string
  response_type: 'code',
  auth_type: 'rerequest',
  display: 'popup',
});

const facebookLoginUrl = `https://www.facebook.com/v4.0/dialog/oauth?${stringifiedParams}`;
app.get('/', function (req, res) {
    res.send(`<a href=${facebookLoginUrl}>
    Login with Facebook
  </a>`)
    
  })
  app.get('/fb', function (req, res) {
   res.send("Dafs")
   
 })

  app.listen(3000 || process.env.PORT, () => {
     console.log("server is running on port 3000")
  })