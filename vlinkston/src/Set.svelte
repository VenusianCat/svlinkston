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

		//hide all links apart from those in the current set;

		/*let filteredBookmarks = $bookmarks;
		filteredBookmarks[0].sets.forEach((fset, fsetIndex) => {
			fset.contents.forEach((flink, flinkIndex) => {
				if (fset.id == set.id) {
					filteredBookmarks[0].sets[fsetIndex].contents[
						flinkIndex
					].display = true;
				} else {
					filteredBookmarks[0].sets[fsetIndex].contents[
						flinkIndex
					].display = false;
				}
			});
		});
		$bookmarks = filteredBookmarks;*/

		$bookmarks[groupIndex].sets[setIndex].contents = e.detail.items;
	}

	function handleDndFinalize(e) {
		items = e.detail.items;
		$bookmarks[groupIndex].sets[setIndex].contents = e.detail.items;

		//reset the visibility of all items
		/*let filteredBookmarks = $bookmarks;
		filteredBookmarks[0].sets.forEach((fset, fsetIndex) => {
			fset.contents.forEach((flink, flinkIndex) => {
				filteredBookmarks[0].sets[fsetIndex].contents[
					flinkIndex
				].display = true;
			});
		});*/
	}

	function edit() {
		editMode = true;
		newTitle = set.title;
	}

	function updateTitle() {
		editMode = false;
		$bookmarks[groupIndex].sets[setIndex].title = newTitle;
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
					<span class="setControls" on:click={edit}>edit</span>
				</h2>
			{:else}
				<input class="setEditMode" bind:value={newTitle} />
				<button on:click={updateTitle}>Update</button><br />
				Move to:
				{#each $bookmarks as group, index}
					{#if index !== $appState.currentTabIndex}
						<span
							class="availableTab"
							on:click={() => moveSet(index)}
						>
							{$bookmarks[index].title}
						</span>
					{/if}
					<span class="separator"> / </span>
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
