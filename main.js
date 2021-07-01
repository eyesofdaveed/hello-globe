const ip_url = "http://ip-api.com/json/";
const lang_url = "https://fourtonfish.com/hellosalut/?lang=LANGUAGECODE&ip=IPADDRESS";
const welcome = document.querySelector("#welcome");

function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

axios.get(ip_url).then((response) => {
  code = response.data.countryCode.toLowerCase();
  ip = response.data.query;
  axios.get(`https://fourtonfish.com/hellosalut/?lang=${code}&ip=${ip}`).then((response) => {
    hello = response.data.hello;
    welcome.innerText = decodeHtml(hello);
  });
});
