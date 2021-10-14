<script>
	/*OK, this may or may not be the best way to encapsulate, but coming from React, this feels like a miracle...
	no painful passing of data up and down the component hierarchy, I access the store where I need to... */
	import { bookmarks } from "./bookmarks";
	export let linkId;
	let titleEditable = false;
	let newTitle;
	$: link = $bookmarks.links[linkId];
	function del() {
		console.log("delete " + linkId);
		//remove link from link array
		const newState = $bookmarks;
		delete newState.links[linkId];
		//remove link from its associated set
		const sets = Object.keys(newState.sets);
		sets.forEach(function (set) {
			var i = newState.sets[set].linkIds.indexOf(linkId);
			if (i > -1) {
				newState.sets[set].linkIds.splice(i, 1);
			}
		});
		$bookmarks = newState;
	}
	function edit() {
		titleEditable = true;
		newTitle = link.title;
	}
	function updateTitle() {
		titleEditable = false;

		const updatedLink = {
			id: linkId,
			title: newTitle,
			url: link.url,
			display: true,
		};

		const newBookmarks = {
			...$bookmarks,
			links: {
				...$bookmarks.links,
				[linkId]: updatedLink,
			},
		};

		$bookmarks = newBookmarks;
	}
</script>

<slot>
	{#if typeof link !== "undefined" && link.display}
		<section class="link">
			{#if !titleEditable}
				<a href={link.url} target="_blank">{link.title}</a>
				<span on:click={edit}>edit</span>
				<span on:click={del}>delete</span>
			{:else}
				<input class="linkEditMode" bind:value={newTitle} />
				<button on:click={updateTitle}>Update</button>
			{/if}
		</section>
	{/if}
</slot>
