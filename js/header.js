const header = () => {
  const header = document.createElement("section");
  header.classList.add("header", "flex");

  const firstRow = document.createElement("div");
  firstRow.classList.add("flex", "first-row");
  header.append(firstRow);

  const logoContainer = document.createElement("div");
  logoContainer.classList.add("flex", "logo");
  firstRow.append(logoContainer);

  const headerText = document.createElement("h1");
  headerText.classList.add("my-1-2", "py-1-2");
  headerText.textContent = "The Baked Sale";
  logoContainer.append(headerText);

  const img = document.createElement("img");
  img.classList.add("my-1-2", "py-1-2");
  img.src = "images/icon_logo.png";
  img.alt = "Logo";
  logoContainer.append(img);

  // Burger button
  const burgerContainer = document.createElement("div");
  burgerContainer.classList.add("burger-container");
  firstRow.append(burgerContainer);
  const burgerButton = document.createElement("a");
  const xButton = document.createElement("a");
  const mobileIcon = document.createElement("i");
  const xIcon = document.createElement("i");
  xIcon.classList.add("fas", "fa-times", "fa-2x", "mobile-icon");
  mobileIcon.classList.add("fas", "fa-bars", "fa-2x", "mobile-icon");
  burgerContainer.append(burgerButton, xButton);
  burgerButton.append(mobileIcon);
  xButton.append(xIcon);
  xButton.style.display = "none";

  const links = document.createElement("navbar");
  links.classList.add("flex", "navbar", "links");
  header.append(links);

  const uList = document.createElement("ul");
  uList.classList.add("flex");
  links.append(uList);

  const about = document.createElement("li");
  about.id = "aboutBtn";
  about.textContent = "Home";
  uList.append(about);

  const menu = document.createElement("li");
  menu.id = "menuBtn";
  menu.textContent = "Menu";
  uList.append(menu);

  const contact = document.createElement("li");
  contact.id = "contactBtn";
  contact.textContent = "Contact";
  uList.append(contact);

  // burgerButton.addEventListener("click", () => {
  //   header.style.flexDirection = "column";
  //   navbar.style.display = "flex";
  //   burgerButton.style.display = "none";
  //   xButton.style.display = "inline-block";
  // });

  // xButton.addEventListener("click", () => {
  //   header.style.flexDirection = "row";
  //   navbar.style.display = "none";
  //   xButton.style.display = "none";
  //   burgerButton.style.display = "inline-block";
  // });
  burgerButton.addEventListener("click", () => {
    links.classList.toggle("active");
    burgerButton.style.display = "none";
    xButton.style.display = "inline-block";
  });

  xButton.addEventListener("click", () => {
    links.classList.toggle("active");
    xButton.style.display = "none";
    burgerButton.style.display = "inline-block";
  });

  return header;
};

export { header };
