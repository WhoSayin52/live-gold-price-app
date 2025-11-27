const eventSource = new EventSource('/live')

const livePrice = document.getElementById('price-display');
const liveStatus = document.getElementById('connection-status');
let currPrice = 0;

eventSource.onmessage = (event) => {
	const price = event.data;
	console.log(price, event)
	livePrice.textContent = ` ${price}`;
	currPrice = price
	liveStatus.textContent = 'Live Price 🟢'
}

eventSource.onerror = () => {
	liveStatus.textContent = 'Offline 🔴'
	currPrice = null
}

const investButton = document.getElementById('invest-btn')
const dialog = document.getElementById('purchase-dialog');
const closeBtn = document.getElementById('close-dialog');
const dialogText = document.getElementById('investment-summary')
const form = document.getElementById('form')

investButton.addEventListener('click', async (event) => {
	event.preventDefault()

	const formData = new FormData(form)
	const amount = parseFloat(formData.get('investment-amount'));

	if (!amount) {
		dialogText.textContent = "Invalid amount."
	}
	else if (currPrice === 0) {
		dialogText.textContent = "Price is not valid waiting for server synchronization."
	}
	else if (currPrice === null) {
		dialogText.textContent = "Server is down...unable to finish transaction."
	}
	else {
		try {
			const ounces = (parseFloat(amount) / parseFloat(currPrice)).toFixed(2);

			const response = await fetch('/purchase', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ amount, ounces, currPrice })
			});

			if (!response.ok) throw new Error('Failed to send purchase info');

			dialogText.textContent = `You just bought ${ounces} ounces (ozt) for £${amount} at ${currPrice}£ per Oz. You will receive documentation shortly.`

		} catch (err) {
			dialogText.textContent = "An error has occurred. Please try again later."
			console.error(err);
		}
	}

	dialog.showModal()
})

closeBtn.addEventListener('click', () => {
	dialog.close();
});
