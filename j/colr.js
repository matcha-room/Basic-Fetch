document.getElementById("changeColorBtn").addEventListener("click", getColors);

async function getColors() {
	const response = await fetch(
		"https://random-flat-colors.vercel.app/api/random?count=5"
	);
	const result = await response.json();
	try {
		document.body.style.backgroundColor = result.colors[0];
	} catch {
		(err) => console.error("oopsie", err.message);
	}
}
