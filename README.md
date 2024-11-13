# Starting Template for Creating a Telegram Bot Using DigitalOcean Functions

## How to use

* clone this repo to `your-folder`
* install `doctl` (Official DigitalOcean console tool)
* create funtion namespace if it does not exist:
  * `doctl serverless namespaces create --label "example-namespace" --region "fra1"`
* deploy the function:
  * `doctl serverless deploy your-folder --remote-build`
* get HTTP url for your webhook:
  * `doctl serverless functions get sample/hello --url`
* now you can set this url for your Telegram bot webhook

## Read the full guide

https://www.shmelev.xyz/posts/ai-chat-bot-telegram-bot-digital-ocean/
