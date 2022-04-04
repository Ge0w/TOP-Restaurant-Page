const menu = () => {
  const menu = document.createElement("section");
  menu.classList.add("menu", "flex");

  // Create title dom
  const menuTitle = document.createElement("h1");
  menuTitle.textContent = "Menu ";
  menu.append(menuTitle);
  const cookieIcon = document.createElement("i");
  cookieIcon.classList.add("fas", "fa-cookie-bite");
  menuTitle.append(cookieIcon);

  //Create title underline dom
  const titleUnderline = document.createElement("div");
  menuTitle.append(titleUnderline);
  titleUnderline.classList.add("underline");

  //Create menu dom
  const menuContainer = document.createElement("div");
  menu.append(menuContainer);
  menuContainer.classList.add("flex", "menu-container", "my-1-2", "py-1-2");

  //Menu items
  const menuItems = [
    {
      title: "Mixed Brownie Boxes",
      price: "£15.50",
      description: "Box of mixed brownies",
    },
    {
      title: "Gooey Cookies",
      price: "£12.50",
      description: "Box of our best yet mixed gooey cookies",
    },
    {
      title: "Colourful Cupcakes",
      price: "£14.95",
      description: "Box of colourful cupboards, spongey and tasty",
    },
  ];

  //Loop menu items to create dom content
  for (let i = 0; i < menuItems.length; i++) {
    const menuItem = document.createElement("div");
    menuContainer.append(menuItem);
    menuItem.textContent = `${menuItems[i].title}`;
  }

  //   menu.innerHTML = `<section class='menu flex my-1 py-1'>
  //         <h1>Milkshakes</h1>
  //         <div class='milkshakes flex'>
  //             <div class='card flex'>
  //                 <img src='images/icon_logo.png '>
  //                 <h2>Vanilla Milkshake</h2>
  //                 <h3>£4.99</h3>
  //             </div>
  //             <div class='card flex'>
  //                 <img src='images/icon_logo.png '>
  //                 <h2>Vanilla Milkshake</h2>
  //                 <h3>£4.99</h3>
  //             </div>
  //             <div class='card flex'>
  //                 <img src='images/icon_logo.png '>
  //                 <h2>Vanilla Milkshake</h2>
  //                 <h3>£4.99</h3>
  //             </div>
  //             <div class='card flex'>
  //                 <img src='images/icon_logo.png '>
  //                 <h2>Vanilla Milkshake</h2>
  //                 <h3>£4.99</h3>
  //             </div>
  //             <div class='card flex'>
  //                 <img src='images/icon_logo.png '>
  //                 <h2>Vanilla Milkshake</h2>
  //                 <h3>£4.99</h3>
  //             </div>
  //             <div class='card flex'>
  //                 <img src='images/icon_logo.png '>
  //                 <h2>Vanilla Milkshake</h2>
  //                 <h3>£4.99</h3>
  //             </div>
  //             <div class='card flex'>
  //                 <img src='images/icon_logo.png '>
  //                 <h2>Vanilla Milkshake</h2>
  //                 <h3>£4.99</h3>
  //             </div>
  //             <div class='card flex'>
  //                 <img src='images/icon_logo.png '>
  //                 <h2>Vanilla Milkshake</h2>
  //                 <h3>£4.99</h3>
  //             </div>
  //         </div>
  //         <h1>Baked Goods</h1>
  //         <div class='baked-goods flex'>
  //             <div class='card flex'>
  //                 <img src='images/icon_logo.png '>
  //                 <h2>Vanilla Milkshake</h2>
  //                 <h3>£4.99</h3>
  //             </div>
  //             <div class='card flex'>
  //                 <img src='images/icon_logo.png '>
  //                 <h2>Vanilla Milkshake</h2>
  //                 <h3>£4.99</h3>
  //             </div>
  //             <div class='card flex'>
  //                 <img src='images/icon_logo.png '>
  //                 <h2>Vanilla Milkshake</h2>
  //                 <h3>£4.99</h3>
  //             </div>
  //             <div class='card flex'>
  //                 <img src='images/icon_logo.png '>
  //                 <h2>Vanilla Milkshake</h2>
  //                 <h3>£4.99</h3>
  //             </div>
  //         </div>
  //         </section>`;
  return menu;
};

export { menu };
