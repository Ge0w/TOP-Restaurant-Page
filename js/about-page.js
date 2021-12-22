const aboutPage = () => {
    console.log('About Page')

    const aboutPage = document.createElement('section')
    aboutPage.classList.add('about-page','flex')

    const aboutBody = document.createElement('div')
    aboutBody.classList.add('about-body','flex', 'my-1', 'py-1')
    aboutPage.append(aboutBody)

    // const imgBaker = document.createElement('img')
    // imgBaker.classList.add('my-1','py-1')
    // imgBaker.src = 'images/baker.jpeg'
    // aboutBody.append(imgBaker)

    const para = document.createElement('p')
    para.classList.add('my-1','py-1')
    para.textContent = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
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