setInterval(() => {
    chrome.runtime.sendMessage({
        count: document.querySelectorAll('*').length
    }, null)
}, 500);


