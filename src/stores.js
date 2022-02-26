import {
	readable,
	writable
} from "svelte/store";

/* BOOKMARKS STORE */
export const bookmarks = writable([
	{
		id: 'group-1',
		title: 'default',
		sets: [
		]
	}
]);

/* APP STATE STORE */
export const appState = writable({
	currentTabIndex: 0
});

/* CONFIG GOES HERE */
/* 
TODO: - refactor local config out of git? This is a known issue with git project management in general 
*/
let localhostAjaxURL = 'http://localhost/vlinkston/vlinkston/public/ajax.php';
let deployedAjaxURL = './ajax.php';
let ajaxURL = (window.location.hostname === "localhost") ? localhostAjaxURL : deployedAjaxURL;

export const config = readable({
	ajaxURL
});
