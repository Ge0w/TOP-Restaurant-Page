const aboutPage = () => {
  console.log("About Page");

  const aboutPage = document.createElement("section");
  aboutPage.classList.add("about-page", "flex", "py-1");

  const aboutBody = document.createElement("div");
  aboutBody.classList.add("about-body", "flex", "py-1");
  aboutPage.append(aboutBody);

  const title = document.createElement("h1");
  title.classList.add("my-1");
  title.textContent = "Please enjoy our finest baked goods!";
  aboutBody.append(title);

  const deliverooLink = document.createElement("a");
  deliverooLink.classList.add("btn");
  deliverooLink.textContent = "Order";
  aboutPage.append(deliverooLink);
  deliverooLink.addEventListener("click", () => {
    window.open(
      "https://deliveroo.co.uk/menu/london/new-malden/thebakesale-ltd"
    );
  });

  return aboutPage;
};

export { aboutPage };
