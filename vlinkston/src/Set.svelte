<script>
	export let set, setIndex;
	import Link from "./Link.svelte";
	import { bookmarks } from "./bookmarks2";
	import { dndzone } from "svelte-dnd-action";

	let items;

	/*OK guys, this line is critical; refactoring set.contents as items worked up to appoint; but without using this operator, changes to $bookmarks were not forcing changes to items, so no updates occured on filter, for example */
	$: items = set.contents;

	function handleDndConsider(e) {
		items = e.detail.items;
		$bookmarks[0].sets[setIndex].contents = e.detail.items;
	}

	function handleDndFinalize(e) {
		items = e.detail.items;
		$bookmarks[0].sets[setIndex].contents = e.detail.items;
	}
</script>

<slot>
	<section class="setContainer" data-set-id={set.id}>
		<h2>{set.title}</h2>
		<section
			class="setContents"
			use:dndzone={{ items }}
			on:consider={handleDndConsider}
			on:finalize={handleDndFinalize}
		>
			{#each items as link, index (link.id)}
				<Link {link} {setIndex} linkIndex={index} />
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

	section.setContainer {
		background-color: #222;
		border-radius: 15px;
		margin-bottom: 10px;
		padding: 20px;
		overflow-x: hidden;
		display: block;
	}
</style>
