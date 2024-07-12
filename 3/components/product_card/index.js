export class ProductCardComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data) {
        const items = ['One', 'Two', 'Three'];
        return (
            `
                <div class="card" style="width: 300px;">
                    <img class="card-img-top" src="${data.src}" alt="картинка">
                            <div class="accordion-item">
                                <h5 class="class=accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse${items[data.id-1]}" aria-expanded="true" aria-controls="panelsStayOpen-collapse${items[data.id-1]}">
                                    ${data.title}
                                 </button>
                                </h5>

                                <div id="panelsStayOpen-collapse${items[data.id-1]}" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-heading${items[data.id-1]}">
                                  <div class="accordion-body">
                                    <p class="card-text">${data.text}</p>
                                    <button class="btn btn-primary" id="click-card-${data.id}" data-id="${data.id}">Нажми на меня</button>

                                  </div>
                                </div>
                            </div>
                </div>

            `
        )
    }

    addListeners(data, listener) {
        document
            .getElementById(`click-card-${data.id}`)
            .addEventListener("click", listener)
    }

    render(data, listener) {
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(data, listener)
    }

}
