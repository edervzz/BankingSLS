'use strict';

const queryString = require("querystring")
const bodyParser = require("body-parser");


module.exports.hello = async (event) => {
  let r = {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Hola ${event.pathParameters.name}`,
        input: body.name,
      },
      null,
      2
    ),
  }
  console.log(r)
  return r;
};



