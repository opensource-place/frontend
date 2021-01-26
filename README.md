# Open Source Place (React Front-end)
<p align="center"><img src="https://user-images.githubusercontent.com/56169582/105577347-083cbb80-5d8a-11eb-9973-acf01b2130c1.png" width="180px"/></p>



## Want to Contribute?

You have 2 things you can do:

1. Either open an issue about a bug, feature request, page, or component,
2. __Or__ close an issue, by writing and/or implementing it in your own fork!



## A Little About Design

[`Figma Design Sheet`](https://www.figma.com/file/qOFIkueP572MnHwaF7ey0a/Untitled?node-id=59%3A490)
is here in case you want to take a look.
Bear in mind that it's still in development!



## Development & Deploying Guide

Firstly, install your dependencies!

```sh
yarn install
```

Next up, create yourself a `.env` file!

```sh
# .env
REACT_APP_API_URL = {your backend api url here}
```

Then you can do:

```sh
yarn start
```

for a development server, or

```sh
yarn run build
```

for building the project into static, deployable files.



## Linting

> Additionally, you can do `yarn run lint` to see formatting errors
> and `yarn run lint:fix` to fix them.
> Don't worry if you forgot to lint your code!
> Someone will definitely fix it in another commit for you :smiley:


## .vscode settings.json
```
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["js"],
  "editor.formatOnSave": true
}
```
## for disable eslint while coding
```
/* eslint-disable */
```


