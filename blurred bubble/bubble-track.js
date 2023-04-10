const bubble_track = document.getElementById("bubble");

function moveBubble(e) {
  const { clientX, clientY } = e.touches ? e.touches[0] : e;
  bubble_track.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 100000, fill: "forwards" }
  );
}

document.body.addEventListener("mousemove", moveBubble);
document.body.addEventListener("touchmove", moveBubble);