<script>
	export let set, setIndex;
	import Link from "./Link.svelte";
	import { bookmarks } from "./bookmarks2";
	import { dndzone } from "svelte-dnd-action";

	let items = set.contents;

	function handleDndConsider(e) {
		items = e.detail.items;
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
