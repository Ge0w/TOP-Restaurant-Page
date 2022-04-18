const header = () => {
  const header = document.createElement("div");
  header.classList.add("header", "flex");

  const logoContainer = document.createElement("div");
  logoContainer.classList.add("flex", "logo");
  header.append(logoContainer);

  const headerText = document.createElement("h1");
  headerText.classList.add("my-1-2", "py-1-2");
  headerText.textContent = "The Baked Sale";
  logoContainer.append(headerText);

  const img = document.createElement("img");
  img.classList.add("my-1-2", "py-1-2");
  img.src = "images/icon_logo.png";
  img.alt = "Logo";
  logoContainer.append(img);

  const navbar = document.createElement("navbar");
  navbar.classList.add("flex", "navbar");
  header.append(navbar);

  const uList = document.createElement("ul");
  uList.classList.add("flex");
  navbar.append(uList);

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

  const mobileIcon = document.createElement("i");
  mobileIcon.classList.add("fas", "fa-bars", "fa-2x", "mobile-icon");
  mobileIcon.id = "mobileIcon";
  navbar.append(mobileIcon);

  return header;
};

export { header };
