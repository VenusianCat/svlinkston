<script>
	import { bookmarks } from "./bookmarks2";
	export let link, setIndex, linkIndex;
	let titleEditable = false;
	let newTitle;

	function del() {
		delete $bookmarks[0].sets[setIndex].contents[linkIndex];
		$bookmarks = $bookmarks;
		/*link.display = false; (also works and might involve fewer calculations; deletes do not trigger updates on bound objects) */
	}
	function edit() {
		titleEditable = true;
		newTitle = link.title;
	}
	function updateTitle() {
		titleEditable = false;
		$bookmarks[0].sets[setIndex].contents[linkIndex].title = newTitle;
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
