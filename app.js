let darkMode = true;
document
  .querySelector(".theme-mode-btn")
  .addEventListener("click", function () {
    if (!darkMode) {
      document.documentElement.style.setProperty("--text-bg", "#1d1d1d");
      document.documentElement.style.setProperty("--bg-color", "#131313");
      darkMode = true;
    } else {
      document.documentElement.style.setProperty("--text-bg", "#ebebeb");
      document.documentElement.style.setProperty("--bg-color", "#ffffff");
      darkMode = false;
    }
  });
window.addEventListener("resize", function () {
  document.querySelector(".footer").style.width = window.innerWidth - 40 + "px";
});
document.querySelector(".footer img").addEventListener("click", makeRequest);
function makeRequest() {
  var x = document.querySelector(".footer input").value;
  document.querySelector(".footer input").focus();
  document.querySelector(".footer input").value = "";
  if (x.trim() != "") {
    document.querySelector(".chat-body").innerHTML +=
      '<div class="text-holder"><div class="my-text">' + x + "</div></div>";
    document.querySelector(".chat-body").scrollBy(0, 1000);
    var settings = {
      async: true,
      crossDomain: true,
      url:
        "https://acobot-brainshop-ai-v1.p.rapidapi.com/get?bid=178&key=sX5A2PcYZbsN5EY6&uid=mashape&msg=" +
        x,
      method: "GET",
      headers: {
        "x-rapidapi-host": "acobot-brainshop-ai-v1.p.rapidapi.com",
        "x-rapidapi-key": "fcc2d6c6b3msh404adbe533c36f5p148528jsn4a93557ee62f",
      },
    };
    $.ajax(settings).done(function (response) {
      document.querySelector(".chat-body").innerHTML +=
        '<div class="text-holder"><div class="their-text">' +
        response.cnt +
        "</div></div>";
      document.querySelector(".chat-body").scrollBy(0, 1000);
    });
  }
}
