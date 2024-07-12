import {MainPage} from "../pages/main/index.js";
export class newPage {
    constructor(parent) {
        this.parent = parent;
        this.count = 0;
    }

    get pageRoot() {
        return document.getElementById('new-page')
    }

    getHTML() {
        return (


               ` <button class="btn btn-primary" id="btn-stock">Реклама</button>
                <button class="btn btn-primary" id="btn-dogs">Собакены</button>
               `
        )
    }



    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        document.getElementById("btn-dogs").addEventListener("click", ()=>{
            const mainPage = new MainPage(root, 'dogs');
            mainPage.render();
        })
        document.getElementById("btn-stock").addEventListener("click", ()=>{
            const mainPage = new MainPage(root, 'stocks');
            mainPage.render();
        })

    }


}
