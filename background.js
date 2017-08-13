chrome.browserAction.onClicked.addListener((tab) => {
	chrome.tabs.executeScript({
		code: `
		document.querySelectorAll('.js-tweet-text-container > p').forEach(tweet => {
			const words = tweet.textContent.split(' ')
				.filter(word => word !== "covfefe" && word !== "");
			if (words.length > 0) {
				const text = " covfefe "
				const word = escapeRegExp(words[Math.floor(Math.random() * words.length)]);
				const regex = new RegExp('( |^)'+word+'( |$)', 'i');
				tweet.innerHTML = tweet.innerHTML.replace(regex, text).trim();
			}
		});

		function escapeRegExp(str) {
			return str.replace(/[\\-\\[\\]\\/\\{\\}\\(\\)\\*\\+\\?\\.\\\^\\$\\|]/g, "\\$&");
		}
		`
	});
});
