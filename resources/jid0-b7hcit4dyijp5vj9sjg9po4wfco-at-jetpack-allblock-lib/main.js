var pageMod = require("page-mod");
var data = require("self").data;
pageMod.PageMod({
  include: "*",
  contentScriptFile:data.url("remover.js")
});
