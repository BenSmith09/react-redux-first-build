//Use commonJS require below so we can dynamically import during build-time.
if (process.env.NODE_ENV === "production") {
  module.export = require("./configureStore.prod");
} else {
  module.export = require("./configureStore.dev");
}
