const button = document.querySelector('#btn');
button.addEventListener('click', () => {
	switch (Notification.permission) {
		case 'default':
			Notification.requestPermission();
			break;
		case 'granted':
			new Notification('最新の通知です');
			break;
		case 'denied':
			alert('通知が拒否されています');
			break;

		default:
			break;
	}
});