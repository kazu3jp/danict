function Save() {
    var message = document.getElementById('input_token').value;

    chrome.storage.local.set({ 'Token': message }, function () {
    });
}

function Load() {
    chrome.storage.local.get('Token', function (items) {
        if (items.Token != null) {
            document.getElementById('input_token').value = items.Token;
        }
    });
}

function SaveMsg() {
    if (document.querySelector('p') == null) {
        let button = document.getElementById('save_button');
        let save_msg = document.createElement('p');
        save_msg.textContent = '保存しました！';
        button.after(save_msg);
    }
}

document.addEventListener('DOMContentLoaded', Load);

document.getElementById('save_button').addEventListener('click', Save);
document.getElementById('save_button').addEventListener('click', SaveMsg);