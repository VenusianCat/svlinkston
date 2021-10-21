<script>
	export let set, setIndex, groupIndex;
	import Link from "./Link.svelte";
	import { bookmarks } from "./bookmarks2";
	import { appState } from "./appState";
	import { dndzone } from "svelte-dnd-action";

	let items;
	let newTitle;
	let editMode = false;

	/*OK guys, this line is critical; refactoring set.contents as items worked up to appoint; but without using this operator, changes to $bookmarks were not forcing changes to items, so no updates occured on filter, for example */
	$: items = set.contents;

	function handleDndConsider(e) {
		items = e.detail.items;
		console.log(set.id);
		$bookmarks[groupIndex].sets[setIndex].contents = e.detail.items;
	}

	function handleDndFinalize(e) {
		items = e.detail.items;
		$bookmarks[groupIndex].sets[setIndex].contents = e.detail.items;
	}

	function edit() {
		editMode = true;
		newTitle = set.title;
	}

	function updateTitle() {
		editMode = false;
		$bookmarks[groupIndex].sets[setIndex].title = newTitle;
	}

	function del() {
		editMode = false;
		$bookmarks[groupIndex].sets.splice(setIndex, 1);
		$bookmarks = $bookmarks;
	}

	function moveSet(newGroupIndex) {
		editMode = false;
		console.log("move set " + setIndex + " to " + newGroupIndex);
		let movedSet = $bookmarks[groupIndex].sets.splice(setIndex, 1);
		console.log(movedSet);
		$bookmarks[newGroupIndex].sets.unshift(movedSet[0]);
		console.log($bookmarks[newGroupIndex]);
		$bookmarks = $bookmarks;
	}
</script>

<slot>
	<section class="setContainer" data-set-id={set.id}>
		<section class="setHeader">
			{#if !editMode}
				<h2>
					{set.title}
					<span class="setControls" on:click={edit}
						><span on:click={edit}
							><svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="#ccc"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								><circle cx="12" cy="12" r="3" /><path
									d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
								/></svg
							></span
						></span
					>
				</h2>
			{:else}
				<input class="setEditMode" bind:value={newTitle} />
				<button on:click={updateTitle}>Update</button>
				<button on:click={del}>delete</button><br />
				<span class="arrowIcon"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="#ccc"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						><circle cx="12" cy="12" r="10" /><path
							d="M12 8l4 4-4 4M8 12h7"
						/></svg
					></span
				>
				{#each $bookmarks as group, index}
					{#if index !== $appState.currentTabIndex}
						<span
							class="availableTab"
							on:click={() => moveSet(index)}
						>
							{$bookmarks[index].title}
						</span>
					{/if}
				{/each}
			{/if}
		</section>
		<section
			class="setContents"
			use:dndzone={{ items, dropTargetStyle: { "min-height": "40px" } }}
			on:consider={handleDndConsider}
			on:finalize={handleDndFinalize}
		>
			{#each items as link, index (link.id)}
				<Link {link} {groupIndex} {setIndex} linkIndex={index} />
			{/each}
		</section>
	</section>
</slot>

<style>
	h2 {
		margin-top: 0;
		padding-top: 0px;
		color: #eee;
	}

	h2 span.setControls {
		color: #ccc;
		font-size: 0.8em;
		font-weight: normal;
	}

	.availableTab {
		font-size: larger;
		display: inline-block;
		padding-left: 10px;
		color: #fff;
	}

	.availableTab:hover {
		cursor: pointer;
		text-decoration: underline;
	}

	.arrowIcon {
		display: inline-block;
		margin-bottom: 0px;
	}

	section.setContainer {
		background-color: #222;
		border-radius: 15px;
		margin-bottom: 10px;
		padding: 20px;
		overflow-x: hidden;
		display: block;
		-webkit-column-break-inside: avoid;
	}
</style>
