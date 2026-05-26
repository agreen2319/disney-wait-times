exports.handler = async function (event, context) {
  const url = event.queryStringParameters.url;

  if (!url) {
    return {
      statusCode: 400,
      body: "Missing url parameter"
    };
  }

  try {
    const response = await fetch(url);
    const data = await response.text();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: data
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: "Error fetching data"
    };
  }
};
