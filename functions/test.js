const axios = require('axios');

exports.handler = function (event, context, callback) {
  const parseBody = JSON.parse(event.body);
  console.log(parseBody);
  axios({
    method: 'post',
    url: 'http://requestbin.net/r/1paw4821',
    data: { name: parseBody.name },
  }).then(response => {
    console.log(response);

    callback(null, {
      statusCode: 200,
      body: "Hello, World"
    });
  }).catch(err => {
    console.log(err);
    ccallback(new Error('Something went Worong'));
  })
}
