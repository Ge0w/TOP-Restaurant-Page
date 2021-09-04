const contact = () => {
    const contact = document.createElement('section')
    contact.classList.add('contact','order','flex')

    const details = document.createElement('h1')
    details.textContent = 'Contact details here'
    contact.append(details)

    return contact
}

export { contact }