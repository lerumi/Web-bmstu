import {ProductComponent} from "../../components/product/index.js";
import {BackButtonComponent} from "../../components/button-back/index.js";
import {MainPage} from "../main/index.js";
export class ProductPage {
    constructor(parent, id, src, description, selected) {
        this.parent = parent
        this.id = id
        this.src = src
        this.description = description
        this.selected = selected
    }

    getData() {
        return {
            id: 1,
            src: `${this.src}`,
            title: `Песель ${this.id}`,
            description: `${this.description}`
        }
    }

    get pageRoot() {
        return document.getElementById('product-page')
    }

    getHTML() {
        return (
            `
                <div id="product-page"></div>
            `
        )
    }
    clickBack() {
        const mainPage = new MainPage(this.parent)
        mainPage.render()
    }

// ...
    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)

        const backButton = new BackButtonComponent(this.pageRoot)
        backButton.render(this.clickBack.bind(this))

        const data = this.getData()
        const stock = new ProductComponent(this.pageRoot, this.selected)
        //stock.render(data)
    }


}