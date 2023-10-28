class Tab {
    constructor(selector) {

        this._buttons = document.querySelectorAll(`${selector} [data-tab="button"]`)
        this._contents = document.querySelectorAll(`${selector} [data-tab="content"]`)

        this._buttons[0].classList.add('active')
        this._contents[0].classList.add('active')

        this._contents.forEach(content => {
            content.style.display = 'none'
            this._contents[0].style.display = 'block'
        })

        this._buttons.forEach((btn, index) => btn.addEventListener('click', () => {

            this._buttons.forEach(btn => btn.classList.remove('active'))
            btn.classList.add('active')

            this._contents.forEach(content => {                
                content.classList.remove('active')
                content.style.display = 'none' 
            })

            this._contents[index].style.display = 'block'
            setTimeout(() => {
                this._contents[index].classList.add('active')
            }, 0) 
        }))
    }    
}


export default Tab;