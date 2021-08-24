const FaunaAPI = require("./");
const config = require("./config");

const main = async () => {
  let API = new FaunaAPI(config.FAUNA_ADMIN_KEY);

  console.log(
    await API.getByIndex("users_by_key", "65b748fa-9cd5-4822-bd29-f579d7f1440d")
  );
};
// console.log(API);
main();
