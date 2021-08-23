const FaunaAPI = require("./");

let API = new FaunaAPI(process.env.FAUNA_ADMIN_KEY);

console.log(API);
