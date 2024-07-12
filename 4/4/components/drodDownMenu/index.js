
export class DropDownMenu {
    constructor(parent) {
        this.parent = parent;
    }

    render(data, listener)
    {
        var ind = 0;
        var dropDownMenu = document.getElementById("dropdown-menu")
        for (var i = 0; i < dropDownMenu.options.length; i++) {
            if (dropDownMenu.options[i].text == data.conversation.chat_settings.title) {
                ind = 1;
                break;
            }
        }
        if (ind===0) {
            var newOption = document.createElement("option")
            newOption.text = data.conversation.chat_settings.title
            newOption.value=data.conversation.peer.id
            dropDownMenu.add(newOption)
            dropDownMenu.addEventListener("change", listener)

        }

    }
}