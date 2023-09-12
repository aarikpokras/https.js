function remModal() {
  elem.style.visibility = "hidden";
}
if (location.protocol != "https:") {
  var elem = document.createElement("span");
  elem.style.userSelect = "none";
  elem.style.top = "0";
  elem.style.marginTop = "20px";
  elem.style.zIndex = "20"
  elem.style.border = "1px solid black";
  elem.style.position = "absolute";
  elem.style.backgroundColor = "grey";
  elem.style.height = "140px";
  elem.style.width = "200px";
  elem.style.lineHeight = "20px"
  elem.style.textAlign = "center";
  elem.innerHTML = "<h3>Hello there!</h3>It looks like you're not connected through https. <a href = \"https://searchme.one\" id = \"http\">Secure my connection</a><br /><button style = \"cursor: pointer;\" onclick = \"remModal()\">&times;</button>";
  elem.style.color = "white";
  elem.style.fontFamily = "'Mukta', sans-serif";
  document.body.appendChild(elem);
}
