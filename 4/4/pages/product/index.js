import {ProductComponent} from "../../components/product/index.js";
import {BackButtonComponent} from "../../components/button-back/index.js";
import {MainPage} from "../main/index.js";
//import {ajax} from "../../modules/ajax.js";
import {ajax} from "../../modules/Fetch.js";
import {urls} from "../../modules/urls.js";
export class ProductPage {
    constructor(parent, id) {
        this.parent = parent
        this.id = id
        console.log(this.id)
    }

     getData() {
            console.log(this.id)
            ajax.post(urls.getUserInfo(this.id), (data) => {
                this.renderData(data.response)
            })
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
    renderData(item) {
        const product = new ProductComponent(this.pageRoot)
        product.render(item[0])
    }
    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)

        const backButton = new BackButtonComponent(this.pageRoot)
        backButton.render(this.clickBack.bind(this))

        this.getData()
    }


}