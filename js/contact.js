const contact = () => {
    const contact = document.createElement('section')
    contact.classList.add('contact','flex')

    const uList = document.createElement('ul')
    uList.classList.add('flex');
    contact.append(uList)

    const facebook = document.createElement('li')
    facebook.textContent = 'Facebook'
    const fbIcon = document.createElement('i')
    fbIcon.classList.add('fab', 'fa-facebook', 'py-1')

    const twitter = document.createElement('li')
    twitter.textContent = 'Twitter'
    const twitterIcon = document.createElement('i')
    twitterIcon.classList.add('fab', 'fa-twitter', 'py-1')

    const insta = document.createElement('li')
    insta.textContent = 'Instagram'
    const instaIcon = document.createElement('i')
    instaIcon.classList.add('fab', 'fa-instagram', 'py-1')

    const deliveroo = document.createElement('li')
    deliveroo.textContent = 'Deliveroo'

    uList.append(facebook)
    uList.append(twitter)
    uList.append(insta)
    uList.append(deliveroo)

    facebook.append(fbIcon)
    twitter.append(twitterIcon)
    insta.append(instaIcon)

    return contact
}

export { contact }