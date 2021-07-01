const ip_url = "http://ip-api.com/json/";
const lang_url = "https://fourtonfish.com/hellosalut/?ip=";
const welcome = document.querySelector("#welcome");

function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

axios.get(ip_url).then((response) => {
  ip = response.data.query;
  axios.get(lang_url + ip).then((response) => {
    hello = response.data.hello;
    welcome.innerText = decodeHtml(hello);
  });
});
