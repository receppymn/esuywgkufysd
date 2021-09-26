const express = require("express");
const app = express()
const nego = require("axios");
app.set('view engine', 'ejs');
app.use(express.static("assets"));

app.get("/", async(req,res) => {
  var gSayi = await nego.get("https://rixnux-botummmm-v122.glitch.me/api/gsayi");
  var uSayi = await nego.get("https://rixnux-botummmm-v122.glitch.me/api/usayi");
  var kSayi = await nego.get("https://rixnux-botummmm-v122.glitch.me/api/ksayi");
 var ug = uSayi.data;
 var kg = kSayi.data
  var ng = gSayi.data
  res.render("index",{ng,ug,kg});
  });

app.get("/komutlar", async(req,res) => {
  var negoo = await nego.get("https://rixnux-botummmm-v122.glitch.me/api/komutlar");
  res.render("komutlar",{negoo});
})
 // }


// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

//app.listen(3040)
console.log("Hazir");
