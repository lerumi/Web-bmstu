import {ProductCardComponent} from "../../components/product_card/index.js";
import {ProductPage} from "../product/index.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }

    get pageRoot() {
        return document.getElementById('main-page')
    }

    getHTML() {
        return (
            `
                <div class="accordion" id="main-page"><div/>

            `
        )
    }

    getData() {
        return [
            {
                id: 1,
                src: "https://i.imgur.com/lotvvU8.jpg",
                title: "Песель 1",
                text: "Описания песеля 1"
            },
            {
                id: 2,
                src: "https://i.pinimg.com/originals/72/0e/43/720e43af3438bf0aa6dc5f5692e7ea03.jpg",
                title: "Песель 2",
                text: "Описания песеля 2"
            },
            {
                id: 3,
                src: "https://i.pinimg.com/originals/d0/1d/b5/d01db54fb87b1bf525455461e33b1e1f.jpg",
                title: "Песель 3",
                text: "Дурацкие песели, я устала..."
            },
        ]
    }
    clickCard(e) {
        const cardId = e.target.dataset.id
        const card_src = this.getData()[cardId-1].src
        const card_text = this.getData()[cardId-1].text

        const productPage = new ProductPage(this.parent, cardId, card_src, card_text)
        productPage.render()
    }


    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)

        const data = this.getData()
        data.forEach((item) => {
            const productCard = new ProductCardComponent(this.pageRoot)
            productCard.render(item, this.clickCard.bind(this))
        })
    }


}
