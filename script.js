var $vtbltslgn;
if (void 0 === window.jQuery) {
  var t = document.createElement("script");
  t.setAttribute("type", "text/javascript"),
    (t.async = !0),
    t.setAttribute(
      "src",
      "https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"
    ),
    t.readyState
      ? (t.onreadystatechange = function () {
          ("complete" == this.readyState || "loaded" == this.readyState) &&
            VtblInit();
        })
      : (t.onload = VtblInit),
    (
      document.getElementsByTagName("head")[0] || document.documentElement
    ).appendChild(t);
} else (jQuery = window.jQuery), VtblInit();
function VtblInit() {
  ($vtbltslgn = window.jQuery), ResultHandler();
}
function ResultHandler() {
  $vtbltslgn(
    "a[href='https://voetbaluitslagen.be/'],a[href='https://foot.be/'], a[href='https://footballnation.eu/']"
  ).each(function () {
    let t = $vtbltslgn(this).data("type"),
      e = $vtbltslgn(this),
      n = e.data();
    void 0 === t && (t = "ranking"),
      "ranking" === t &&
        $vtbltslgn.get(
          "https://voetbaluitslagen.be/ranking-endpoint/",
          n,
          function (t) {
            e.replaceWith(t);
          }
        ),
      "next-match" === t &&
        $vtbltslgn.get(
          "https://voetbaluitslagen.be/next-match-endpoint/",
          n,
          function (t) {
            e.replaceWith(t);
          }
        );
  });
}

const select = document.getElementById("mySelect");
const anchor = document.getElementById("table");

select.addEventListener("change", function () {
  anchor.setAttribute("data-league", select.value);
});
