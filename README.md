Easily accessible request-wide properties - trying to avoid having to pass around a request property throughout a route. `require('./file')` > dependency injecting `req.context` everywhere. This is a proof of concept that may or may not do exactly what we want it to do. (Is it really appropriately scoped to a user's individual request? Are we stateless enough?) Examples with and without Express Router are included.

`npm run express`
Runs main Express example. Hit `http://localhost:3000/` and check terminal.

`npm run v4`
Runs Express Router example. Hit `http://localhost:3000/hello/world` and check terminal.