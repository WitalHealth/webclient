# webclient

### Instructions

`npm install` - install dependencies.
`npm start` - start local web-server.
`npm run bad` - build and deploy.

### Project Structure

`/ui/components` - React components.
`/ui/layouts` - Layout components are used for reusable layouts. 
`/ui/pages` - Page components define a page in the app.  

`/data/[state name]/reducer` - Reducer that handles named state. 
`/data/[state name]/actions` - actions to set named state.

`/data/reducers` - Gathers all reducers to use in the store. This is where we add new reducers.
`/data/store` - Combines all reducers for global state store.

`/sass/` - styles
`/assets/` - Images, fonts and icons etc.

`/dist/` - Contains the latest build on the server