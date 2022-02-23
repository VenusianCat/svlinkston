<script>
	import { bookmarks } from "./stores";
	export let link, groupIndex, setIndex, linkIndex;
	let titleEditable = false;
	let newTitle;

	function del() {
		$bookmarks[groupIndex].sets[setIndex].contents.splice(linkIndex, 1);
		$bookmarks = $bookmarks;
	}
	function edit() {
		titleEditable = true;
		newTitle = link.title;
	}
	function updateTitle() {
		titleEditable = false;
		$bookmarks[groupIndex].sets[setIndex].contents[linkIndex].title =
			newTitle;
	}
</script>

<slot>
	{#if typeof link !== "undefined" && link.display}
		<section class="link">
			{#if !titleEditable}
				<a href={link.url} target="_blank">{link.title}</a>
				<span class="editLink baseline" on:click={edit}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#666"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						><circle cx="12" cy="12" r="3" /><path
							d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
						/>
					</svg>
				</span>
			{:else}
				<input class="linkEditMode" bind:value={newTitle} />
				<button class="update" on:click={updateTitle}>update</button>
				<button class="delete" on:click={del}>delete</button>
			{/if}
		</section>
	{/if}
</slot>

<style>
	section.link {
		margin-bottom: 10px;
	}
	.editLink {
		cursor: pointer;
		display: inline-flex;
		align-self: center;
		margin-left: 3px;
	}

	.editLink svg {
		height: 1em;
		width: 1em;
	}
	.editLink.baseline svg {
		top: 0.125em;
		position: relative;
	}

	.linkEditMode {
		width: 100%;
		border: 1px solid #666;
	}
	button.delete {
		background-color: #c00;
	}

	button.update {
		background-color: #090;
	}
</style>
