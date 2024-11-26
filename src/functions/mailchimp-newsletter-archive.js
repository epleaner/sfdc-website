import fetch from 'node-fetch';

const headers = {
  'Accept-Encoding': 'gzip',
};

const url =
  'https://google.us19.list-manage.com/generate-js/?u=df330e3b313bd3dc498ed9b97&fid=2457&show=10';

exports.handler = async function(event, context) {
  try {
    const response = await fetch(
      url, {headers},
    );

    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return {statusCode: response.status, body: response.statusText};
    }

    const data = await response.text();

    return {
      statusCode: 200,
      body: data,
    };
  } catch (err) {
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      body: err.message, // Could be a custom message or object i.e. JSON.stringify(err)
    };
  }
};
