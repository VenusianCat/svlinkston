<script>
	import { dndzone } from "svelte-dnd-action";
	import { bookmarks } from "./bookmarks2";
	export let group, groupIndex;
	import Set from "./Set.svelte";

	let items;

	$: items = group.sets;

	function handleDndConsider(e) {
		items = e.detail.items;
		console.log(e.detail);
		$bookmarks[groupIndex].sets = e.detail.items;
	}

	function handleDndFinalize(e) {
		items = e.detail.items;
		$bookmarks[groupIndex].sets = e.detail.items;
	}
</script>

<section class="sets-container">
	<section>
		{#if groupIndex !== 0}
			<!--display the inbox in all groups-->
			<Set set={$bookmarks[0].sets[0]} setIndex="0" groupIndex="0" />
		{/if}
	</section>
	<section
		use:dndzone={{
			items,
			type: "set",
			dropTargetStyle: { "min-height": "40px" },
		}}
		on:consider={handleDndConsider}
		on:finalize={handleDndFinalize}
	>
		{#each items as set, index (set.id)}
			<Set {set} setIndex={index} {groupIndex} />
		{/each}
	</section>
</section>

<style>
	section.sets-container {
		font-size: 1em;
		column-count: auto;
		column-width: 320px;
		column-gap: 20px;
	}
</style>
