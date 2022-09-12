var engine = "google";
document.querySelector(".search-bar").addEventListener("keyup", function(k) {

  let search = document.querySelector(".search-bar").value;
  console.log(search);
  search = search.toLowerCase();
  if (search == "youtube") {
    engine = "youtube";
    document.querySelector(".logo").src = "./youtube.png"
  }
  if (search == "google" || search == "") {
    engine = "google";
    if (search == "google")
      engine = "google-1";
    document.querySelector(".logo").src = "./google.png"
  }
  if (search == "docs") {
    engine = "docs";
    document.querySelector(".logo").src = "./docs.png"
  }
  if (search == "github") {
    engine = "github";
    document.querySelector(".logo").src = "./github.png"
  }
  if (search == "slide") {
    engine = "slide";
    document.querySelector(".logo").src = "./slide.png"
  }
  if (search == "sheet") {
    engine = "sheet";
    document.querySelector(".logo").src = "./sheet.png"
  }
  if (search == "so") {
    engine = "so";
    document.querySelector(".logo").src = "./sof.png";
  }
  if (search == "yt") {
    engine = "yt";
    document.querySelector(".logo").src = "./youtube.png"
  }
  if (k.key == "Enter") {
    switch (engine) {
      case "youtube":
        search = search.substring(8);
        window.location.href = "https://www.youtube.com/results?search_query=" + search;
        break;
      case "google-1":
        search = search.substring(7)
        window.location.href = "https://www.google.com/search?q=" + search;
        break;
      case "slide":
        search = search.substring(6)
        window.location.href = "https://docs.google.com/presentation/u/0/?tgif=d&q=" + search;
        break;
      case "github":
        search = search.substring(7);
        window.location.href = "https://github.com/search?q=" + search;
        break;
      case "sheet":
        search = search.substring(7);
        window.location.href = "https://docs.google.com/spreadsheets/u/0/?tgif=d&q=" + search;
        break;
      case "docs":
        search = search.substring(5);
        window.location.href = "https://docs.google.com/document/u/0/?tgif=d&q=" + search;
        break;
      case "so":
        search = search.substring(3);
        window.location.href = "https://stackoverflow.com/search?q=" + search;
        break;
      case "yt":
        search = search.substring(3);
        window.location.href = "https://www.youtube.com/results?search_query=" + search;
        break;
      default:
        window.location.href = "https://www.google.com/search?q=" + search;

    }
  }
  console.log(engine);
});
document.querySelector(".search-bar").setSelectionRange(0, 0).focus();
document.querySelector(".red").addEventListener("mousedown", function() {
  console.log("click hua hai");
});
onclick = () => {
  console.log("click hua hai");
}
