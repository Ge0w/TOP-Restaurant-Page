import { header } from './header.js'

const initialLoad = () => {
    const content = document.querySelector('#content')
    content.append(header())
    return content
}

export { initialLoad }