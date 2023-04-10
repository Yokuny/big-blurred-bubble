const bubble_track = document.getElementById("bubble");
document.body.onpointermove = (e) => {
  const { clientX, clientY } = e;
  bubble_track.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 3000, fill: "forwards" }
  );
};
