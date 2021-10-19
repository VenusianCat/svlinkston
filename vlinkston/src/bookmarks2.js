import {
	writable, derived
} from "svelte/store";

let apiURL = 'http://localhost/working/backend/ajax.php';

let data = JSON.parse(`
[
	{
		"id": "group-1",
		"title": "default",
		"sets": [
		]
	}
]`);

async function getData() {
	const response = await fetch(apiURL, {
		method: "post",
		headers: {
			Accept: "application/json, text/plain, /",
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ action: "load" }),
	}).then((response) => response.json()).then(data => {
		bookmarks.set(data);
	});
}
getData();

export const bookmarks = writable(data);
