// callback function
function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = function () {
    console.log(src);
    callback(null, src);
  };
  script.onerror = function () {
    console.log("src has an error");
    callback(new Error("src is wrong " + src));
  };
  document.body.appendChild(script);
}

loadScript(
  "https://cdn.jsdelicvr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js",
  hello
);

function hello(error, src) {
  if (error) {
    console.log("got some error");
    alert("Got some error " + error);
  } else {
    alert("Goodmorning " + src);
  }
}
