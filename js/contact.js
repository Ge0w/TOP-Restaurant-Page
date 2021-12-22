const contact = () => {
    const contact = document.createElement('section')
    contact.classList.add('contact','order','flex')

    const facebook = document.createElement('h1')
    facebook.textContent = 'Facebook'

    const twitter = document.createElement('h1')
    twitter.textContent = 'Twitter'

    const insta = document.createElement('h1')
    insta.textContent = 'Facebook'

    const deliveroo = document.createElement('h1')
    deliveroo.textContent = 'Deliveroo'

    contact.append(facebook)
    contact.append(twitter)
    contact.append(insta)
    contact.append(deliveroo)

    return contact
}

export { contact }