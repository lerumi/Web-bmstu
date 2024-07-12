import {MainPage} from "./pages/main/index.js";
document.addEventListener('DOMContentLoaded', () => {
    const groupAccessToken = 'vk1.a.elHtBnbznk8n5wnPFPvCdsX1tW7wdDlv31ed-UhHkcO-zbCoqDdlkXK6P49KnTvDD_0Z02u6raS_xma9KZke0XoTv5KjHz5w_s_lpDvxGOiMR20fwOZsumRFle3U_dnix0uVLhf4Vm624if4b4rvCZOm7f7Hfy0hX50L9Mea7BvR5TFdnhdvez432Kga6KYgRhHGOkre13vANft4R7TYCw';  // Токен группы
    const groupId = 224801546;
    const apiVersion = '5.199';
    const chatsSelect = document.getElementById('chats');


    fetch(`https://api.vk.com/method/messages.getConversations?group_id=224801546&access_token=vk1.a.elHtBnbznk8n5wnPFPvCdsX1tW7wdDlv31ed-UhHkcO-zbCoqDdlkXK6P49KnTvDD_0Z02u6raS_xma9KZke0XoTv5KjHz5w_s_lpDvxGOiMR20fwOZsumRFle3U_dnix0uVLhf4Vm624if4b4rvCZOm7f7Hfy0hX50L9Mea7BvR5TFdnhdvez432Kga6KYgRhHGOkre13vANft4R7TYCw&v=5.199`)
        .then(response => response.json())
        .then(data => {
            if (data.response) {
                const chats = data.response.items;
                chats.forEach(chat => {
                    const option = document.createElement('option');
                    option.value = chat.conversation.peer.id;
                    option.textContent = chat.conversation.chat_settings.title;
                    chatsSelect.appendChild(option);
                });
            } else {
                console.error('Error fetching chats:', data.error);
                document.getElementById('result').textContent = 'Error fetching chats.';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('result').textContent = 'Error occurred while fetching chats.';
        });

    // Отправка сообщения в выбранный чат
    document.getElementById('messageForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const message = document.getElementById('message').value;
        const chatId = document.getElementById('chats').value;

        if (!message || !chatId) {
            alert('Please select a chat and enter a message!');
            return;
        }

        const postUrl = `https://api.vk.com/method/messages.send?peer_id=${chatId}&message=${encodeURIComponent(message)}&access_token=${groupAccessToken}&v=${apiVersion}&random_id=${Math.floor(Math.random() * 1000000)}`;

        fetch(postUrl, {
            method: 'GET',
            mode: 'cors'
        })
        .then(response => response.json())
        .then(data => {
            const resultDiv = document.getElementById('result');
            if (data.response) {
                resultDiv.textContent = `Message sent with ID: ${data.response}`;
            } else {
                resultDiv.textContent = `Error: ${JSON.stringify(data.error)}`;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('result').textContent = `Error occurred while sending the message.`;
        });
    });
});
const root = document.getElementById('root');

const mainPage = new MainPage(root);

mainPage.render();

