const contact = () => {
    const contact = document.createElement('section')
    contact.classList.add('contact','flex')

    const uList = document.createElement('ul')
    uList.classList.add('flex');
    contact.append(uList)

    const facebook = document.createElement('li')
    facebook.textContent = 'Facebook'

    const twitter = document.createElement('li')
    twitter.textContent = 'Twitter'

    const insta = document.createElement('li')
    insta.textContent = 'Facebook'

    const deliveroo = document.createElement('li')
    deliveroo.textContent = 'Deliveroo'

    uList.append(facebook)
    uList.append(twitter)
    uList.append(insta)
    uList.append(deliveroo)

    return contact
}

export { contact }