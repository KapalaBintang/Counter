let count = document.getElementById("count");
let btns = document.querySelectorAll(".btn");
let num = 0;

btns.forEach(function calculate(btn) {
  btn.addEventListener("click", function (e) {
    if (e.currentTarget.classList.contains("increase")) num++;
    else if (e.currentTarget.classList.contains("decrease")) num--;
    else if (e.currentTarget.classList.contains("reset")) num = 0;

    if (num > 0) {
      count.style.color = "green";
    } else if (num < 0) {
      count.style.color = "red";
    } else if (num == 0) {
      count.style.color = "white";
    }

    count.innerHTML = num;
  });
});
