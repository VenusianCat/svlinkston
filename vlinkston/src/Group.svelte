<script>
	import { bookmarks } from "./bookmarks2";
	export let group, groupIndex;
	import Set from "./Set.svelte";
</script>

<section class="sets-container">
	{#if groupIndex !== 0}
		<!--display the inbox in all groups-->
		<Set set={$bookmarks[0].sets[0]} setIndex="0" groupIndex="0" />
	{/if}
	{#each group.sets as set, index}
		<Set {set} setIndex={index} {groupIndex} />
	{/each}
</section>

<style>
	section.sets-container {
		font-size: 1em;
		column-count: auto;
		column-width: 320px;
		column-gap: 20px;
	}
</style>
