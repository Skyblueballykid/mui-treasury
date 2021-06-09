const changeCase = require("change-case");
module.exports = {
  helpers: {
    toName: (s) =>
      changeCase.pascal(s.replace("component-", "").replace("style-", "")),
    toNameCamel: (s) =>
      changeCase.camel(s.replace("component-", "").replace("style-", "")),
    toNamePath: (s) => s.toLowerCase(),
    extractComponentName: (s) => changeCase.pascal(s.split("-")[1]), // style-sociallink-ball
    extractComponentPkg: (s) => changeCase.lowerCase(s.split("-")[1]), // style-sociallink-ball
    extractStyleName: (s) => changeCase.pascal(s.split("-")[2]),
  },
};