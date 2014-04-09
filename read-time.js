/*** Take in an article as a string (plain text or HTML marked) and estimate read time either in seconds or rounded up to the next minute ***/
function estReadTime(article, inMinutes){
	var readSpeed = 250;      // Estimated speed of reader in Words Per Minute (wpm)
	readSpeed = readSpeed/60; // Convert to words per second
	var imageTime = 10;       // Estimate of time taken up by pictures (seconds)

	var readTime = 0;         // Always have something to return

	var count = article.match(/<img/gi);
	if(count) {               // Catch case where count returns as null on no matches
		readTime += count.length * imageTime;
	}

	article = article.replace(/<.*?>/gi, "");   // Remove mark up
	article = article.replace(/&nbsp;/gi, " "); // Replace non-breaking whitespace markup with real whitespace

	readTime += article.split(/\s+/).length / readSpeed;

	if (inMinutes) {
		return Math.ceil(readTime / 60);
	} else {
		return readTime;
	}
}
