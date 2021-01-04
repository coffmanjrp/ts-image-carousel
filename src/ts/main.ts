const images = document.getElementById('images') as HTMLDivElement;
const leftBtn = document.getElementById('left') as HTMLButtonElement;
const rightBtn = document.getElementById('right') as HTMLButtonElement;

const img = document.querySelectorAll(
  '#images img'
) as NodeListOf<HTMLImageElement>;

let idx = 0;

function changeImage() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }

  images.style.transform = `translateX(-${idx * 100}%)`;
}

function run() {
  idx++;

  changeImage();
}

let interval = setInterval(run, 2000);

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

rightBtn.addEventListener('click', () => {
  idx++;

  changeImage();
  resetInterval();
});

leftBtn.addEventListener('click', () => {
  idx--;

  changeImage();
  resetInterval();
});
