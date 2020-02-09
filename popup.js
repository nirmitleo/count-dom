chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {

        if (!sender.tab.active) {
            return;
        }
        if (sender.frameId !== 0) {
            return;
        }
        let count = request.count;
        const domCountElement = document.getElementById('dom-count');
        if (domCountElement) {
            domCountElement.innerText = count;
        }
        if (count >= 1000) {
            count /= 1000;
            count = count.toFixed(1);
            count = count + 'k+';
        }
        chrome.browserAction.setBadgeText({
            text: count + '',
        });
    });