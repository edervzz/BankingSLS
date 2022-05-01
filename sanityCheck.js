'use strict';

const queryString = require("querystring")
const bodyParser = require("body-parser");


module.exports.hello = async (event) => {
  console.log(event);
  let r = {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Hola ${event.pathParameters.name}`,
        input: event,
      },
      null,
      2
    ),
  }
  console.log(r)
  return r;

};

module.exports.greet = async (event) => {
  let body = JSON.parse(event.body)
  let r = {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Hola ${body.name}`,
        input: body,
      },
      null,
      2
    ),
  }
  console.log(r)
  return r;

};




