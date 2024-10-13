
function hasBlacklistKeywords(bio) {
	const blacklist = [
		'trans',
		'Tgirl',
		'travesti',
		'litrão',
		'sigilo',
		'cdzinha',
		'pix',
		'body positivity',
		'sou mãe',
		'bencong',
		'f1',
		'gay',
		'lady boy',
		'not a lady',
		'not lady',
		'not a girl',
		'not girl',
		'shemale',
	];

	for (item of blacklist) {
		if (bio.toLowerCase().indexOf(item) !== -1) {
			console.warn(`*** Skipping profile, matched blacklist keyword ${item} ***`);
			return true;
		}
	}

	return false;
}

function hasValidProfile() {
	try {

		return hasValidBiografy() && hasValidGender();
	} catch (e) {
		// console.log(e);
		return true; // possible empty bio
	}
}

function hasValidGender(){
	const genderContainer = document.querySelector("#t1836739397 > div > div.App__body.H\\(100\\%\\).Pos\\(r\\).Z\\(0\\) > div > div > main > div > div > div.Pos\\(r\\)--ml.Z\\(1\\).Bgc\\(\\#fff\\).Ov\\(h\\).Expand.profileContent.Bdrs\\(8px\\)--ml.Bxsh\\(\\$bxsh-card\\)--ml > div > div.Bgc\\(\\#fff\\).Fxg\\(1\\).Z\\(1\\).Pb\\(100px\\) > div.D\\(f\\).Jc\\(sb\\).Us\\(n\\).Px\\(16px\\).Py\\(10px\\) > div > div.Fz\\(\\$ms\\) > div:nth-child(1) > div.Us\\(t\\).Va\\(m\\).D\\(ib\\).My\\(2px\\).NetWidth\\(100\\%\\,20px\\).C\\(\\$c-secondary\\)")
		
	if (!genderContainer){
		const LIKE_PROFILES_WITHOUT_GENDER = true
		//console.log(`PERFIL SEM BIO ${LIKE_PROFILES_WITHOUT_BIO ? "LIKE": "DISLIKE"}`)
		return LIKE_PROFILES_WITHOUT_GENDER;
	} 
	const gender = genderContainer.text 

	return !hasBlacklistKeywords(gender)
}

function hasValidBiografy(){
	const bioContainer = document.querySelector("#t1836739397 > div > div.App__body.H\\(100\\%\\).Pos\\(r\\).Z\\(0\\) > div > div > main > div > div > div.Pos\\(r\\)--ml.Z\\(1\\).Bgc\\(\\#fff\\).Ov\\(h\\).Expand.profileContent.Bdrs\\(8px\\)--ml.Bxsh\\(\\$bxsh-card\\)--ml > div > div.Bgc\\(\\#fff\\).Fxg\\(1\\).Z\\(1\\).Pb\\(100px\\) > div.P\\(16px\\).Us\\(t\\).C\\(\\$c-secondary\\).BreakWord.Whs\\(pl\\).Fz\\(\\$ms\\) > div");
		
	if (!bioContainer){
		const LIKE_PROFILES_WITHOUT_BIO = true
		//console.log(`PERFIL SEM BIO ${LIKE_PROFILES_WITHOUT_BIO ? "LIKE": "DISLIKE"}`)
		return LIKE_PROFILES_WITHOUT_BIO;
	} 
	const bio = bioContainer.textContent;
	openInstagramFromBio(bio);

	return !hasBlacklistKeywords(bio)
}

function openInstagramFromBio(biografy){
	const Reg = /[@].*/gm
	const matchList = Reg.exec(biografy) 
	if(matchList.length){
		const links = matchList.map( item => `https://www.instagram.com/${item.substring(1)}`)
		links.forEach(link=> console.log(link))
	} 
}

function checkTinder() {
	const base = "https://tinder.com/";
	return window.location.href.startsWith(base + "app/recs") || window.location.href.startsWith(base + "app/matches");
}

function isMatch() {
	return document.querySelector('a.active');
}

// prevent async execution
function pause(milliseconds) {
	const dt = new Date();
	while ((new Date()) - dt <= milliseconds) { /* Do nothing */ }
}

function trickTinder() {  
	// Open profile bio
	
	const infoButton = document.querySelector("#c464932099 > div > div.App__body.H\\(100\\%\\).Pos\\(r\\).Z\\(0\\) > div > div > main > div > div > div > div > div.Toa\\(n\\).Bdbw\\(--recs-gamepad-height\\).Bdbc\\(t\\).Bdbs\\(s\\).Bgc\\(\\#000\\).Wc\\(\\$transform\\).Prs\\(1000px\\).Bfv\\(h\\).Ov\\(h\\).W\\(100\\%\\).StretchedBox.Bdrs\\(8px\\) > div.Pos\\(a\\).D\\(f\\).Jc\\(sb\\).C\\(\\#fff\\).Ta\\(start\\).W\\(100\\%\\).Ai\\(fe\\).B\\(0\\).P\\(8px\\)--xs.P\\(16px\\).P\\(20px\\)--l.Cur\\(p\\).focus-button-style > button");
	if (infoButton) {
		infoButton.click();
	}
	pause(600);

	// Like or deslike depending on validation
	if (hasValidProfile()) {
		try{ 
			const likeButton = document.querySelector("#u-1804268477 > div > div.App__body.H\\(100\\%\\).Pos\\(r\\).Z\\(0\\) > div > div > div > main > div > div > div.recsCardboard__cardsContainer.H\\(100\\%\\).Pos\\(r\\).Z\\(1\\) > div > div.Pos\\(a\\).B\\(0\\).Iso\\(i\\).W\\(100\\%\\).Start\\(0\\).End\\(0\\) > div > div.gamepad-button-wrapper.Mx\\(a\\).Fxs\\(0\\).Sq\\(70px\\).Sq\\(60px\\)--s.Bd.Bdrs\\(50\\%\\).Bdc\\(\\$c-ds-border-gamepad-like-default\\) > button");
			likeButton.click();
		} catch(er){

			console.log(er, "Erro ao dar like")
		}


		const thereIsMatch = isMatch();
		if (thereIsMatch) {
			console.log('------------- IT\'S A MATCH ! -------------');
			
			thereIsMatch.click();
		}
	} else {
		const dislikeButton = document.querySelector("#u-1804268477 > div > div.App__body.H\\(100\\%\\).Pos\\(r\\).Z\\(0\\) > div > div > div > main > div > div > div.recsCardboard__cardsContainer.H\\(100\\%\\).Pos\\(r\\).Z\\(1\\) > div > div.Pos\\(a\\).B\\(0\\).Iso\\(i\\).W\\(100\\%\\).Start\\(0\\).End\\(0\\) > div > div.gamepad-button-wrapper.Mx\\(a\\).Fxs\\(0\\).Sq\\(70px\\).Sq\\(60px\\)--s.Bd.Bdrs\\(50\\%\\).Bdc\\(\\$c-ds-border-gamepad-nope-default\\) > button");
		dislikeButton.click();
	}

	// If reached max likes per day then show modal and get it's content...
	// Check if there is any subscription button...
	if (document.getElementsByClassName('productButton__subscriptionButton').length > 0) {
		// We get the counter thing
		const hms = document.getElementsByClassName('Fz($ml)')[0].textContent;
		// Split it at the colons
		const a = hms.split(':');
		// Minutes are worth 60 seconds. Hours are worth 60 minutes. 1 second = 1kmilliseconds.
		// Genius... rocket science...
		const seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2])

		return seconds * 1000;
	}
}

// There is a lot more fun that can be achieved
// Need to add socket puppetry (VPNs solutions? several accounts?) - :D
// TODO: Need to accept automatically permissions except for
// TODO: Need to add ANN for fake pics
// TODO: Need to add RNN for fake messages

function getRandomPeriod() {
	return Math.round(Math.random() * (2000 - 500)) + 500;
}

(function loopSasori() {
	// A random period between 500ms and 2secs
	let randomPeriod = getRandomPeriod();

	setTimeout(function () {
		randomPeriod = undefined;

		if (checkTinder()) {
			const delay = trickTinder();

			if (delay) {
				console.log('Too many likes for now, have to wait: ' + delay + ' ms');
				randomPeriod = delay;
			}
		}

		if (!randomPeriod) {
			loopSasori();
		} else {
			setTimeout(loopSasori, randomPeriod);
		}
	}, randomPeriod);
}());
