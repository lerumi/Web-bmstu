import {ProductCardComponent} from "../../components/product_card/index.js";
import {ProductPage} from "../product/index.js";
//import {ajax} from "../../modules/ajax.js";
import {ajax} from "../../modules/Fetch.js";
import {urls} from "../../modules/urls.js";
import {groupId} from "../../modules/consts.js";
import {DropDownMenu} from "../../components/drodDownMenu/index.js"

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
                <div id="main-page"><div/>
                 <select id = "dropdown-menu" class="form-select" aria-label="Default select example">
                 <option>выберите группу<option/>

                </select>

            `
        )
    }
    getDataConv() {
        ajax.post(urls.getConversations(groupId), (data) => {
            this.renderDataConv(data.response.items)
        })
    }

    getData(convId) {
        ajax.post(urls.getConversationMembers(convId), (data) => {
            this.renderData(data.response.profiles)
        })
    }
    clickCard(e) {
        const cardId = e.target.dataset.id
        console.log(cardId)
        const productPage = new ProductPage(this.parent, cardId)
        productPage.render(cardId)
    }


    clickDropDownItem(e) {
        const cardId = e.target.value;
        const productPage = new MainPage(this.parent)

        productPage.render()
        productPage.getData(cardId)
    }
    renderDataConv(items) {

        var dropDownMenu = document.getElementById("dropdown-menu")

        items.forEach((item) => {
            var newOption = document.createElement("option")
                newOption.text = item.conversation.chat_settings.title
                newOption.value=item.conversation.peer.id
                dropDownMenu.add(newOption)



        })
        dropDownMenu.addEventListener("change", this.clickDropDownItem.bind(this))
    }



    renderData(items) {
        items.forEach((item) => {
            const dropDownMenu = new ProductCardComponent(this.pageRoot)
            dropDownMenu.render(item, this.clickCard.bind(this))
        })
    }
    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        this.getDataConv()


    }



}
