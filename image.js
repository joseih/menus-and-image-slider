class ImageCarrousel {
  constructor(imgs, left, right, loader) {
    this.imgs = imgs;
    this.left = left;
    this.right = right;
    this.loader = loader;
    this.next = 0;
    this.current = undefined;
    this.start();
  }
  start() {
    this.leftClick();
    this.rightClick();
    this.loaderClick();
    this.automaticSelector();
  }
  rightClick() {
    this.right.addEventListener("click", () => {
      if (this.next == imgs.length || this.next == undefined) {
        this.next = 0;
        this.current = this.imgs.length - 1;
      }
      wipe(this.imgs, this.loader);
      this.imgs[this.next].style.display = "block";
      this.loader[this.next].className = "selected";
      this.current = this.next;
      this.next++;
    });
  }
  leftClick() {
    this.left.addEventListener("click", () => {
      if (this.current == 0 || this.current == undefined) {
        this.current = this.imgs.length;
      }
      wipe(this.imgs, this.loader);
      this.imgs[this.current - 1].style.display = "block";
      this.loader[this.current - 1].className = "selected";
      this.next = this.current;
      this.current--;
    });
  }
  loaderClick() {
    for (let index = 0; index < this.loader.length; index++) {
      this.loader[index].addEventListener("click", () => {
        console.log("a");
        wipe(this.imgs, this.loader);
        this.imgs[index].style.display = "block";
        this.loader[index].className = "selected";
        this.current = index;
        this.next = index + 1;
      });
    }
  }
  automaticSelector() {
    setInterval(() => {
      wipe(this.imgs, this.loader);
      if (this.next == this.imgs.length) {
        this.next = 0;
      }
      console.log(this.next);
      this.imgs[this.next].style.display = "block";
      this.loader[this.next].className = "selected";
      this.current = this.next;
      this.next++;
    }, 5000);
  }
}

function getImages() {
  let images = document.querySelector(".image-container").children;
  return images;
}
function getLoader() {
  let loader = document.querySelector(".loader").children;
  return loader;
}

function wipe(imgs, loader) {
  for (let index = 0; index < imgs.length; index++) {
    imgs[index].style.display = "none";
    loader[index].className = "";
  }
}

const loader = getLoader();
const imgs = getImages();
const left = document.querySelector("#left");
const right = document.querySelector("#right");
//cicleImages(imgs, right, left, loader);
let a = new ImageCarrousel(imgs, left, right, loader);
