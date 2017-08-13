chrome.browserAction.onClicked.addListener((tab) => {
	chrome.tabs.executeScript({
		code: `
		document.querySelectorAll('.js-tweet-text-container > p').forEach(tweet => {
			const words = tweet.innerHTML.split(' ')
				.filter(word => word.match(/^[a-z0-9éèàîïâäêë\?\!\'\"\,\.]+$/i))
				.filter(word => word !== "covfefe");
			const word = words[Math.floor(Math.random() * words.length)];
			tweet.innerHTML = tweet.innerHTML.replace(word, "covfefe");
		});
		`
	});
});
