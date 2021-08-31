# Twitch + Netlify Repo Example

This repository is the full working example from Prince's blog post on ["Using Twitch to Invoke a Netlify Function"](https://prince.dev/netlify-twitch).

## Prerequisites

- A Netlify account
- A Twitch account
- Node.js installed

## Setting it all up

If you want to just get this all setup and just see it working:

1. Deploy this repo to Netlify (e.g. using the Netlify CLI `ntl deploy --prod`)
2. Take the link that generates and save it for the Twitch CLI

3. Setup the EventSub subscription through the API or CLI

If you want to do it through the CLI:

```bash
twitch api post eventsub/subscription --body '{
"type": "stream.online",
  "version": "1",                      
  "condition": {                       
      "broadcaster_user_id": "<USE YOUR BROADCASTER ID>"
  },                      
  "transport": {                                                                          
      "method": "webhook",                                                                
      "callback": "<ADD_YOUR_NETLIFY_LINK>/.netlify/functions/log",
      "secret": "CHANGE_THIS_SECRET"  
  }
}'
```

(If you don't have your broadcaster_id use `twitch api get users -q login=<YOUR TWITCH HANDKE>`)

And it should be all set!