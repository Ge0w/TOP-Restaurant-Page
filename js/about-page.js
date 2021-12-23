const aboutPage = () => {
    console.log('About Page')

    const aboutPage = document.createElement('section')
    aboutPage.classList.add('about-page','flex', 'py-1')

    const aboutBody = document.createElement('div')
    aboutBody.classList.add('about-body','flex', 'py-1')
    aboutPage.append(aboutBody)

    const para = document.createElement('p')
    para.classList.add('my-1')
    para.textContent = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.'
    aboutBody.append(para)

    const deliverooLink = document.createElement('a')
    deliverooLink.classList.add('btn')
    deliverooLink.textContent = 'Order'
    aboutPage.append(deliverooLink)
    deliverooLink.addEventListener('click', () => {
        window.open('https://deliveroo.co.uk/menu/london/new-malden/thebakesale-ltd')
    })

    return aboutPage
}

export { aboutPage }