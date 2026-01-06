const audios = document.querySelectorAll("audio");

audios.forEach(a => {
  a.addEventListener("play", () => {
    audios.forEach(o => {
      if (o !== a) o.pause();
    });
  });
});
