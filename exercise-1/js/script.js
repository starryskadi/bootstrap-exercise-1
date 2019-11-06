function a(event) {
  if (window.scrollY >= 150) {
    document
      .querySelector("#header")
      .classList.replace("bg-transparent", "bg-white");
  } else {
    document
      .querySelector("#header")
      .classList.replace("bg-white", "bg-transparent");
  }
}

document.addEventListener("scroll", a);
