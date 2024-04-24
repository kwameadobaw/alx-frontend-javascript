export default function getFullResponseFromAPI(boolean) {
	return new Promise ((resolve, reject) => {
		const objects = {
			status: 200,
			body: 'Success',
		};
		if (boolean === true) {
			resolve(objects);
		} else {
			reject(Error('The fake API is not working currently'));
		}
	});
}
