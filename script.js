const splitlandingpage = (() => {
  const mountain = document.querySelector(".mountain");
  const elephant = document.querySelector(".elephant");
  mountain.addEventListener("onmouseover", () => {
    console.log("hel");
    elephant.style.width = "592px";
  });
  elephant.addEventListener("onmouseover", () => {
    mountain.style.width = "592px";
  });
})();
