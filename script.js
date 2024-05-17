document.getElementById("dataBtn").addEventListener("click", function () {
  document.getElementById("dataSection").style.display = "block";
  document.getElementById("formSection").style.display = "none";
});

document.getElementById("formBtn").addEventListener("click", function () {
  document.getElementById("dataSection").style.display = "none";
  document.getElementById("formSection").style.display = "block";
});

document
  .getElementById("experienceForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const difficulty = document.querySelector(
      'input[name="difficulty"]:checked'
    ).value;
    const features = Array.from(
      document.querySelectorAll('input[type="checkbox"]:checked')
    ).map((el) => el.value);
    const response = document.getElementById("response").value;

    const details = `Nama : ${name}\nTingkat Kesulitan : ${difficulty}\nFavorit Momen : ${features.join(
      ", "
    )}\nPengalaman Anda : ${response}`;
    alert(`Detail Respon:\n\n${details}`);
  });
