let inputValueapi = document.querySelector(".inputValueapi");
let inputNumber = document.querySelector(".inputNumber");
let butGiphyapli = document.querySelector(".butGiphyapli");
let divImg = document.querySelector(".divImg");

butGiphyapli.addEventListener("click", function () {
  const apiUri = `https://api.giphy.com/v1/gifs/search?api_key=6oHY2zCDI0oLrTEEfdZic1OzwV0ezEa2&q=${inputValueapi.value}`;

  async function giphyapi() {
    const response = await fetch(apiUri);
    const date = await response.json();

    

    inputNumber.addEventListener("onchang", giphyapi(fungifs));
    function fungifs(gifs) {
      divImg.innerHTML = "";
      if (inputNumber.value > 0) {
        gifs = gifs.slice(0, inputNumber.value);
      }

      gifs.map((gifs) => {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = gifs.images.downsized_medium.url;
        div.appendChild(img);
        divImg.appendChild(div);
      });
    }

    fungifs(date.data);
  }
  giphyapi();
});
