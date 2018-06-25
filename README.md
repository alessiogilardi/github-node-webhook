# GitHub Webhook

<img src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png" alt="Node.js logo" width=10% /> <img src="https://www.raspberrypi.org/app/uploads/2018/03/RPi-Logo-Reg-SCREEN-199x250.png" alt="Raspberry Pi logo" width=5% /> <img src="https://www.debian.org/logos/openlogo-nd-100.png" alt="Debian logo" width=5% />

Simple _webhook_ for __GitHub__ written in __Node.js__.

### Description
The tool binds, for now, to a hardcoded __tcp__ port and wait for push notification from a __GitHub__ repository, then it switches to the local repository folder and execute:
* _git fetch_
* _git pull_

### Usage
Simply run the server script:

```
node webhook.js
```
