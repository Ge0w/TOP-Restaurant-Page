const header = () => {
    const header = document.createElement('div');
    header.classList.add('header','flex');

    const flexContainer = document.createElement('div');
    flexContainer.classList.add('flex','logo');
    header.append(flexContainer)

    const headerText = document.createElement('h1');
    headerText.classList.add('my-1-2', 'py-1-2');
    headerText.textContent = 'The Baked Sale'
    flexContainer.append(headerText)

    const img = document.createElement('img')
    img.classList.add('my-1-2', 'py-1-2');
    img.src = 'images/icon_logo.png'
    flexContainer.append(img)

    const navbarContainer = document.createElement('div')
    navbarContainer.classList.add('navbar', 'flex');
    header.append(navbarContainer)

    const navbar = document.createElement('navbar')
    navbar.classList.add('flex')
    navbarContainer.append(navbar)

    const uList = document.createElement('ul')
    uList.classList.add('flex');
    navbar.append(uList)

    const about = document.createElement('li')
    about.id = 'aboutBtn'
    about.textContent = 'About'
    uList.append(about)

    const menu = document.createElement('li')
    menu.id = 'menuBtn'
    menu.textContent = 'Menu'
    uList.append(menu)

    const contact = document.createElement('li')
    contact.id = 'contactBtn'
    contact.textContent = 'Contact'
    uList.append(contact)

    console.log('header runs')

    return header
}

export { header }