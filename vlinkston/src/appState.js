import {
	writable
} from "svelte/store";

let data = {
	currentTabIndex: 0
};

export const appState = writable(data);
