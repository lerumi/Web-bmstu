import {MainPage} from "../main/index.js";
export class AddPage {
    constructor(parent) {
        this.parent = parent;
    }

    get pageRoot() {
        return document.getElementById('add-page')
    }
     async sendData(selected){
        const form = document.getElementById('dataForm');
        const formData = {
            title: document.getElementById("Vtitle").value,
            description: document.getElementById("Vdescription").value,
            src: document.getElementById("Vsrc").value
        }
        try {
            const response = await fetch('http://localhost:8000/'+selected.toString()+'/', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            const jsonResponse = await response.json();
            alert('Данные успешно отправлены!');
            console.log(jsonResponse);
        } else {
            alert('Ошибка при отправке данных.');
        }
        } catch (error) {
            console.error('Ошибка:', error);
            alert('Ошибка при отправке данных.');
        }

    }
    getHTML(){
       return(`    <div id="add-page"></div>
            <h1>Добавить данные</h1>
            <form id="dataForm">
                <label for="title">Название:</label>
                <input type="text" id="title" name="title" required><br><br>

                <label for="description">Описание:</label>
                <textarea id="description" name="description" required></textarea><br><br>

                <label for="src">Картинка:</label>
                 <input type="text" id="src" name="src" required><br><br>


            </form>
            <button type="button" id = "btn-add-lol">Добавить</button>
        `)
    }



    render(count, selected) {
    console.log(selected)
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        document.getElementById("btn-add-lol").addEventListener("click", ()=>{
            const formData = {
            id: count+1,
            src: `${document.getElementById("src").value}`,
            title: `${document.getElementById("title").value}`,
            description: `${document.getElementById("description").value}`

        }
        fetch('http://localhost:8000/'+selected+'/', {
            method: 'POST',
            headers:{"Content-type":"application/json"},
            body: JSON.stringify(formData)
        });
        })

    }


}
