# GitHub Webhook
Simple _webhook_ for GitHub written in __Node.js__.

### Description
The tool bind to a hardcoded port and wait for push notification from a __GitHub__ repository, then it switches to the local repository folder and execute:
* _git fetch_
* _git pull_

### Usage
Simply run the server script:

```
node webhook.js
```

