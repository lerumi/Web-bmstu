import {ProductCardComponent} from "../../components/product_card/index.js";
import {ProductPage} from "../product/index.js";
import {AddPage} from "../add/index.js";

export class MainPage {
    constructor(parent, selected) {
        this.parent = parent;
        this.count = 0;
        this.selected = selected
    }

    get pageRoot() {
        return document.getElementById('main-page')
    }

    getHTML() {
        return (
            `
                <button class="btn btn-primary" id="btn-add">Добавить</button>

                <div class="accordion" id="main-page"><div/>
                `

        )
    }

    getData() {

        fetch('http://localhost:8000/'+this.selected.toString()).then(response => response.json())
        .then(dogs=> dogs.forEach((item) => {
            const productCard = new ProductCardComponent(this.pageRoot, this.selected)
            productCard.render(item, this.clickCard.bind(this))
            this.count+=1
        }))
    }
    addListeners() {
        document
            .getElementById("btn-add")
            .addEventListener("click", this.clickAdd.bind(this))
            //.render()
    }

    clickAdd(){
        const addPage = new AddPage(this.parent)
        addPage.render(this.count, this.selected)
    }

    clickCard(e) {

        fetch('http://localhost:8000/'+this.selected+'/'+e.target.dataset.id.toString()).then(response => response.json())
        .then(dogs=>{
            const productPage = new ProductPage(this.parent, e.target.dataset.id, dogs.src, dogs.description)
            productPage.render()
        })

    }


    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        this.getData(this.selected)
        this.addListeners()
        //addButton
    }


}
