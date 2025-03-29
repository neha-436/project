let body = document.querySelector("body");
let icon = document.querySelector("#icon");
let curMode = "light";
icon.addEventListener("click", () => {
   if(curMode === "light"){
    curMode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
   } else {
    curMode = "light";
    body.classList.add("light");
    body.classList.remove("dark");
   }
})