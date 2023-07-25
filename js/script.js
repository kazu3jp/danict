chrome.storage.local.get('Token', function (items) {
    let title_all = document.getElementsByClassName('titleWrap')[0];
    let title = title_all.querySelector('h1');
    let titleText = title.firstChild.textContent.trim();
    fetch("https://api.annict.com/v1/works?filter_title=" + titleText + "&fields=id&sort_watchers_count=desc&access_token=" + items.Token)
        .then((res) => {
            return (res.json());
        })
        .then((json) => {
            if (json.works[0] != null) {
                let favo_button = document.getElementsByClassName('btnAddMyList addMyList add listen')[0]
                var in_html = `<div class="btnAddMyList addMyList add listen" style="background: #f85a72; position: relative;">
                <a href="https://annict.com/works/${json.works[0].id}" target="_blank" rel="noopener noreferrer" style="position: absolute; top: 0; left: 0; height:100%; width: 100%;"></a>
                <a>Annict</a>
                </div>`
                favo_button.insertAdjacentHTML('afterend', in_html);
            }
        });
});