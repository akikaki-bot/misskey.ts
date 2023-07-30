[!MisTsKey](./logos/logo.png)

### The **Powerfull** API Wrapper for **node.js** and **Nice Bot Developers**

Misskey.io等、Misskey系統SNS API専用APIラッパーです。

## Install

```
npm i mistskey
```

## How to use

```ts

import { Client } from "mistskey"

const client = new Client("globalTimeline")

client.login("Your Access Token")

client.on('ready', () => {
    console.log("Logined at : "+client.i.username)

    client.i.note('MisTsKeyでBotが産声を上げたぞ！')
})

client.on('timelineCreate', async (note) => {

    if(message.message.text.match(/!MisTsKey/)){
       await note.message.reply('やっはろー！')
       await note.renote()
       await note.reaction(":igyo:")
    }

})

```

## License

MIT Licence.
