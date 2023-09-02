# Rocket science - frontend developer test - Hazem

## Technologies used

- React
- Redux
- Vite
- Tailwindcss
- Nodejs
- ExpressJs
- JSON Web Tokens

## How to run the project

- Clone the repo
- Run `yarn` to install dependencies
- Run `yarn dev` to start the project
- Open `http://localhost:5173` to view it in the browser.

Project uses a plugin called 'vite-plugin-mix' which mixes and simultaneously runs the frontend and backend servers. so you don't need to run `yarn dev` and `yarn dev:server`

## To build

- `yarn build` wraps the project and splits into two folders `dist` and `build` which contains the frontend and backend respectively.
- Then run `yarn start` to start the project in production mode. port is set to 3000.

---

- ### To use search functionality
  cridentials can be found in the backend file:

```
username: 'brainstorm',
password: 'brainstormforce',
```

You can use these cridentials to login and use the search functionality.

- Authontication is done using JWT.
- The token is stored in the cookies and is valid for 2d.
- After that you will be logged out and will have to login again.
