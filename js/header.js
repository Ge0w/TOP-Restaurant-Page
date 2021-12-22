const header = () => {
    const header = document.createElement('div');
    header.classList.add('header','py-1','flex');

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

`<div class='header my-1 py-1 flex'>
<div class='flex logo'>
    <h1 class='my-1-2 py-1-2'>The Baked Sale</h1>
    <img class='my-1-2 py-1-2' src="images/icon_logo.png">
</div>
<div class='navbar flex'>
    <navbar class='flex'>
        <ul class='flex'>
            <li id='aboutBtn'>About</li>
            <li id='menuBtn'>Menu</li>
            <li id='contactBtn'>Contact</li>
        </ul>
    </navbar>
</div>
</div>
<section class='contact order flex'>
            <h1>Contact details here</h1>
</section>`