'use strict';

module.exports.hello = async (event) => {
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
  const data = JSON.parse(event.body)
  let r = {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Hola ${data.name}`,
        input: data.name,
      },
      null,
      2
    ),
  }
  console.log(r)
  return r;

};
