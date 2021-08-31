const VERIFICATION_TYPE = "webhook_callback_verification"
const NOTIFICATION_TYPE = "notification"
exports.handler = async (event) => {

  const body = JSON.parse(event.body)

  const messageType = event.headers["twitch-eventsub-message-type"];

  if(messageType === VERIFICATION_TYPE) {
    return {
      statusCode: 200,
      body: body.challenge // IMPORTANT, challenge is a key in body
    }
  } else if(messageType === NOTIFICATION_TYPE) {
    const event = body.event
    
    console.log("Twitch activated this webhook! Here's the payload: ", event)

    return {
      statusCode: 200,
      body: "ok"
    }
  }
}