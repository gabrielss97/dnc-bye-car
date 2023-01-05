let liEls = document.querySelectorAll("ul li");
let index = 0;

function show(indexSum) {
  index = index + indexSum;
  index = Math.min(Math.max(index, 0), liEls.length - 1);
  liEls[index].scrollIntoView({ behavior: "smooth" });
}

setInterval(() => {
  if (index === liEls.length - 1) {
    show(index - 2);
  } else {
    show(index + 1);
  }
}, 5000);
