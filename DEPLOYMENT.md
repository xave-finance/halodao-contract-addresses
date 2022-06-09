# NPM Deployment

## Install typescript

This is a 1 time setup. Skip if you already have typescript installed globally.

1. Use node version `v16.15.1` or `lts/gallium`

```
nvm use lts/gallium
```

2. Install typescript globally

```
npm install -g typescript
```

## NPM login

To login and save the npm user on your machine:

```
npm adduser
```

Retrieve the user creds from 1Password vault > `HaloDAO npm account` entry

## Deployment steps

1. Bump version

Update the project's version number indicated on `package.json`

2. Build the project

```
tsc
```

3. Publish a new release

```
npm run npm-publish
```

4. Don't forget to push the version change on the repo
