const contact = () => {
    const contact = document.createElement('section')
    contact.classList.add('contact','flex')

    const facebook = document.createElement('li')
    facebook.textContent = 'Facebook'

    const twitter = document.createElement('li')
    twitter.textContent = 'Twitter'

    const insta = document.createElement('li')
    insta.textContent = 'Facebook'

    const deliveroo = document.createElement('li')
    deliveroo.textContent = 'Deliveroo'

    contact.append(facebook)
    contact.append(twitter)
    contact.append(insta)
    contact.append(deliveroo)

    return contact
}

export { contact }