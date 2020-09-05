// cSpell: disable

/**
 * @here - This part randomizes the background patters.
 * @logic - There are 5 backgrounds in the css file named from .bg1 to .bg5.
 * 			Get a random number between 1 -5 and apply that background.
 */
document.getElementById('body').classList.add(`bg${Math.ceil(Math.random() * 5)}`);

/**
 * @here - This part randomizes the box gradients.
 * @logic - There are 50 gradients in the css file named from .gr1 to .gr50.
 * 			Get a random number between 1 - 50 and apply that gradient.
 */
document.getElementById('box').classList.add(`gr${Math.ceil(Math.random() * 50)}`);

/**
 * @here - This part randomizes the quotes.
 * @logic - Get a random quote from the array and fill it with animations.
 */
const quotes = [
	{
		quote: 'Education is the manifestation of perfection already in man.',
		cite: ' — Swami Vivekananda',
		marginDesktop: '15vh',
		marginMobile: '10vh',
		padDesktop: '5vw 3vw',
		padMobile: '5vh 3vh'
	},
	{
		quote: 'True teachers are those who help us think for ourselves.',
		cite: ' — Nelson Mandela',
		marginDesktop: '15vh',
		marginMobile: '10vh',
		padDesktop: '5vw 3vw',
		padMobile: '5vh 3vh'
	},
	{
		quote: 'You took my hand, opened my mind and touched my heart.',
		cite: ' — An anonymous student',
		marginDesktop: '15vh',
		marginMobile: '10vh',
		padDesktop: '5vw 3vw',
		padMobile: '5vh 3vh'
	},
	{
		quote: 'A good teacher is like a candle — it consumes itself to light the way for others.',
		cite: ' — Mustafa Kemal Atatürk',
		marginDesktop: '15vh',
		marginMobile: '10vh',
		padDesktop: '5vw 3vw',
		padMobile: '5vh 3vh'
	},
	{
		quote: 'Teaching is the profession that teaches all other professions.',
		cite: ' — Anonymous',
		marginDesktop: '15vh',
		marginMobile: '10vh',
		padDesktop: '5vw 3vw',
		padMobile: '5vh 3vh'
	},
	{
		quote: 'What the teacher is, is more important than what he or she teaches.',
		cite: ' — Soren Kierkegaard',
		marginDesktop: '15vh',
		marginMobile: '10vh',
		padDesktop: '5vw 3vw',
		padMobile: '5vh 3vh'
	},
	{
		quote: 'One book, one pen, one child, and one teacher can change the world.',
		cite: ' — Malala Yousafzai',
		marginDesktop: '15vh',
		marginMobile: '10vh',
		padDesktop: '5vw 3vw',
		padMobile: '5vh 3vh'
	},
	{
		quote: 'Although you wrote in black and white, you brought color to my life.',
		cite: '',
		marginDesktop: '15vh',
		marginMobile: '10vh',
		padDesktop: '5vw 3vw',
		padMobile: '5vh 3vh'
	},
	{
		quote: 'The best teachers teach from the heart, not from the book.',
		cite: ' — Unknown',
		marginDesktop: '15vh',
		marginMobile: '10vh',
		padDesktop: '5vw 3vw',
		padMobile: '5vh 3vh'
	},
	{
		quote: 'Teaching is not a lost art, but the regard for it is a lost tradition.',
		cite: ' — Jacques Barzun',
		marginDesktop: '15vh',
		marginMobile: '10vh',
		padDesktop: '5vw 3vw',
		padMobile: '5vh 3vh'
	},
	{
		quote: 'You are like the water to my sapling.',
		cite: '',
		marginDesktop: '20vh',
		marginMobile: '12vh',
		padDesktop: '5vw 3vw',
		padMobile: '5vh 3vh'
	},
	{
		quote: 'Memories fade with time and lessons are forgotten,' +
			' but experiences shape a human being and leave a lasting mark.' +
			' Teachers have the privilege of guiding early experiences and discoveries.',
		cite: ' — Benjamin Franklin',
		marginDesktop: '10vh',
		marginMobile: '7vh',
		padDesktop: '5vw 3vw',
		padMobile: '5vh 3vh'
	},
	{
		quote: 'Teachers ask questions and help students find answers.' +
			' Yet learning isn’t only about finding the right answer,' +
			' but also creating the road that leads to the answer.' +
			' Learning with every step is the true sign of progress.',
		cite: ' — Socrates',
		marginDesktop: '10vh',
		marginMobile: '7vh',
		padDesktop: '5vw 3vw',
		padMobile: '5vh 3vh'
	},
	{
		quote: 'Teaching is the greatest act of optimism.',
		cite: ' — Colleen Wilcox',
		marginDesktop: '20vh',
		marginMobile: '12vh',
		padDesktop: '5vw 3vw',
		padMobile: '5vh 3vh'
	},
	{
		quote: 'In the face of disrespect, misbehavior, and lack of student enthusiasm, teachers are the believers.' +
		' They see the light at the end of the tunnel and they lead step by step—truly the greatest act of optimism.',
		cite: ' — Colleen Wilcox',
		marginDesktop: '10vh',
		marginMobile: '7vh',
		padDesktop: '5vw 3vw',
		padMobile: '5vh 3vh'
	},
	{
		quote: 'If you are planning for a year, sow rice; if you are planning for a decade, plant trees;' +
			' if you are planning for a lifetime, educate people.',
		cite: ' — A Chinese proverb',
		marginDesktop: '12vh',
		marginMobile: '7vh',
		padDesktop: '5vw 3vw',
		padMobile: '5vh 3vh'
	},
	{
		quote: 'Education is not preparation for life; education is life itself.',
		cite: ' — John Dewey',
		marginDesktop: '15vh',
		marginMobile: '10vh',
		padDesktop: '5vw 3vw',
		padMobile: '5vh 3vh'
	},
	{
		quote: 'What sculpture is to a block of marble, education is to a human soul.',
		cite: ' — Joseph Addison',
		marginDesktop: '15vh',
		marginMobile: '7vh',
		padDesktop: '5vw 3vw',
		padMobile: '5vh 3vh'
	},
	{
		quote: 'Education breeds confidence. Confidence breeds hope. Hope breeds peace.',
		cite: ' — Confucius',
		marginDesktop: '15vh',
		marginMobile: '7vh',
		padDesktop: '5vw 3vw',
		padMobile: '5vh 3vh'
	},
	{
		quote: 'If someone is going down the wrong road, he doesn’t need motivation to speed him up. ' +
			'What he needs is education to turn him around.',
		cite: ' — Jim Rohn',
		marginDesktop: '12vh',
		marginMobile: '5vh',
		padDesktop: '5vw 3vw',
		padMobile: '5vh 3vh'
	},
	{
		quote: 'The dream begins, most of the time, with a teacher who believes in you, who tugs and pushes' +
			' and leads you on to the next plateau, sometimes poking you with a sharp stick called truth.',
		cite: ' — Dan Rather',
		marginDesktop: '10vh',
		marginMobile: '5vh',
		padDesktop: '5vw 3vw',
		padMobile: '5vh 3vh'
	},
	{
		quote: 'The art of teaching is the art of assisting discovery.',
		cite: ' — Mark Van Doren',
		marginDesktop: '20vh',
		marginMobile: '10vh',
		padDesktop: '5vw 3vw',
		padMobile: '5vh 3vh'
	},
	{
		quote: 'Every child deserves a champion—an adult who will never give up on them, who understands the power ' +
			'of connection and insists that they become the best that they can possibly be.',
		cite: ' — Rita Pierson',
		marginDesktop: '12vh',
		marginMobile: '5vh',
		padDesktop: '5vw 3vw',
		padMobile: '5vh 3vh'
	},
	{
		quote: 'Better than a thousand days of diligent study is one day with a great teacher.',
		cite: ' — A Japanese proverb',
		marginDesktop: '15vh',
		marginMobile: '7vh',
		padDesktop: '5vw 3vw',
		padMobile: '5vh 3vh'
	},
	{
		quote: 'Education is not the filling of a pail but the lighting of a fire.',
		cite: ' — William Butler Yeats',
		marginDesktop: '15vh',
		marginMobile: '7vh',
		padDesktop: '5vw 3vw',
		padMobile: '5vh 3vh'
	},
	{
		quote: 'Teaching is more than imparting knowledge; it is inspiring change. ' +
			'Learning is more than absorbing facts; it is acquiring understanding.',
		cite: ' — William Arthur Ward',
		marginDesktop: '13vh',
		marginMobile: '5vh',
		padDesktop: '5vw 3vw',
		padMobile: '5vh 3vh'
	},
	{
		quote: 'It takes a big heart to help shape little minds.',
		cite: ' — Anonymous',
		marginDesktop: '18vh',
		marginMobile: '12vh',
		padDesktop: '5vw 3vw',
		padMobile: '5vh 3vh'
	}
];

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
const quoteBox = document.getElementById('quote');
const citeBox = document.getElementById('cite');
const animateQuote = () => {
	const text = randomQuote.quote;

	// eslint-disable-next-line no-undef
	animate({
		// This is an imported function, check the head part of the original pug file.
		duration: 3500,
		timing: fraction => Math.pow(fraction, 2),
		draw: progress => {
			const result = ((text.length - 0) * progress) + 0;
			if (Math.ceil(result) === text.length) citeBox.innerHTML = randomQuote.cite;
			return quoteBox.innerHTML = `&ldquo;${text.substr(0, Math.ceil(result))}&rdquo;`;
		}
	});
};

const desktop = window.matchMedia('screen and (min-width: 768px)').matches;

let padding = undefined;
if (desktop) padding = randomQuote.padDesktop;
else padding = randomQuote.padMobile;
document.getElementById('box').style.padding = padding;

let margin = undefined;
if (desktop) margin = randomQuote.marginDesktop;
else margin = randomQuote.marginMobile;
document.getElementById('box').style.marginTop = margin;

/**
 * @here - This part is the animation for the Happy Teachers' Day part.
 * @logic - I've used the push and pop methods of the array to add the words.
 * 			There are better methods to do it, I've used this just for the heck of it.
 */
setTimeout(() => {
	const wishText = ['Happy', 'Teachers\'', 'Day!'].reverse();
	const wishBox = document.getElementById('wish');
	const wish = [];

	// Pushing and popping just for style. There are better ways to do it though.
	wish.push(wishText.pop());
	wishBox.innerHTML = wish.join(' ');

	setTimeout(() => {
		wish.push(wishText.pop());
		wishBox.innerHTML = wish.join(' ');

		setTimeout(() => {
			wish.push(wishText.pop());
			wishBox.innerHTML = wish.join(' ');
			animateQuote();
		}, 500);
	}, 500);
}, 2000);

/**
 * @here - This part randomizes the fonts.
 * @logic - Create a new <style> tag > Add the font face options to it > attach it to the <head> of the DOM >
 * 			> Complete the font size adjustments.
 */
const fonts = [
	{
		family: 'Courgette',
		url: '/fonts/Courgette-Regular.ttf',
		adjust: ''
	},
	{
		family: 'Alex Brush',
		url: '/fonts/AlexBrush-Regular.ttf',
		adjust: '#box { font-size: 1.5rem } h1 { font-size: 3rem }'
	},
	{
		family: 'Allura',
		url: '/fonts/Allura-Regular.ttf',
		adjust: '#box { font-size: 1.5rem } h1 { font-size: 3rem }'
	},
	{
		family: 'Cookie',
		url: '/fonts/Cookie-Regular.ttf',
		adjust: '#box { font-size: 1.5rem } h1 { font-size: 3rem }'
	},
	{
		family: 'Dancing Script',
		url: '/fonts/DancingScript-SemiBold.ttf',
		adjust: '#box { font-size: 1.5rem } h1 { font-size: 3rem }'
	},
	{
		family: 'EB Garmond',
		url: '/fonts/EBGaramond-MediumItalic.ttf',
		adjust: '#box { font-size: 1.5rem } h1 { font-size: 3rem }'
	},
	{
		family: 'Great Vibes',
		url: '/fonts/GreatVibes-Regular.ttf',
		adjust: '#box { font-size: 1.5rem } h1 { font-size: 3rem }'
	},
	{
		family: 'Italianno',
		url: '/fonts/Italianno-Regular.ttf',
		adjust: '#box { font-size: 1.75rem } h1 { font-size: 3.5rem }'
	},
	{
		family: 'Josefin Sans',
		url: '/fonts/JosefinSans-Regular.ttf',
		adjust: '',
		style: 'italic'
	},
	{
		family: 'Kaushan Script',
		url: '/fonts/KaushanScript-Regular.ttf',
		adjust: '#box { font-size: 1.25rem } h1 { font-size: 2.5rem }'
	},
	{
		family: 'Lobster',
		url: '/fonts/Lobster-Regular.ttf',
		adjust: '#box { font-size: 1.25rem } h1 { font-size: 2.5rem }'
	},
	{
		family: 'Lobster2',
		url: '/fonts/LobsterTwo-Italic.ttf',
		adjust: '#box { font-size: 1.25rem } h1 { font-size: 2.5rem }'
	},
	{
		family: 'Niconne',
		url: '/fonts/Niconne-Regular.ttf',
		adjust: '#box { font-size: 1.5rem } h1 { font-size: 3rem }'
	},
	{
		family: 'Norican',
		url: '/fonts/Norican-Regular.ttf',
		adjust: '#box { font-size: 1.5rem } h1 { font-size: 3rem }'
	},
	{
		family: 'Pacifico',
		url: '/fonts/Pacifico-Regular.ttf',
		adjust: '#box { font-size: 1.25rem } h1 { font-size: 2.5rem }'
	},
	{
		family: 'Parisienne',
		url: '/fonts/Parisienne-Regular.ttf',
		adjust: '#box { font-size: 1.5rem } h1 { font-size: 3rem }'
	},
	{
		family: 'Pinyon Script',
		url: '/fonts/PinyonScript-Regular.ttf',
		adjust: '#box { font-size: 1.5rem } h1 { font-size: 3rem }'
	},
	{
		family: 'Rochester',
		url: '/fonts/Rochester-Regular.ttf',
		adjust: '#box { font-size: 1.5rem } h1 { font-size: 3rem }'
	},
	{
		family: 'Satisfy',
		url: '/fonts/Satisfy-Regular.ttf',
		adjust: '#box { font-size: 1.5rem } h1 { font-size: 3rem }'
	},
	{
		family: 'Tangerine',
		url: '/fonts/Tangerine-Bold.ttf',
		adjust: '#box { font-size: 1.75rem } h1 { font-size: 3.5rem }'
	}
];

const font = fonts[Math.floor(Math.random() * fonts.length)];
const style = document.createElement('style');
style.appendChild(
	document.createTextNode(`@font-face { font-family: '${font.family}'; src: url('${font.url}') format('truetype') }`)
);
style.appendChild(document.createTextNode(font.adjust));
document.getElementById('body').style.fontFamily = font.family;
document.getElementById('body').style.fontStyle = font.style;
document.head.appendChild(style);

/**
 * @here - This part shows my name and credits.
 */
setTimeout(() => {
	document.getElementById('me').style.display = 'block';
}, 5000);
