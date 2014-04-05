/*** Take in an article as a string (plain text or HTML marked) and estimate read time ***/
function estReadTime(article){
	var readSpeed = 250;           // Estimated speed of reader in Words Per Minute (wpm)
	var imageTime = 10;             // Estimate of time taken up by pictures (seconds)

	var readTime = 0;                 // Always have something to return

	readSpeed = readSpeed/60; // Convert to words per second

	var count = article.match(/<img/gi);

	readTime += count.length * imageTime;

	return readTime;
}
