<script>
	export let set, setIndex;
	import Link from "./Link.svelte";
	/* unfortunately our current data structure does not lend itself to use with this plugin; each child must have a unique id property; here we're actually using an array
	https://www.npmjs.com/package/svelte-dnd-action */
	/*import { dndzone } from "svelte-dnd-action";*/

	function handleDndConsider(e) {
		console.log(e.detail);
	}

	function handleDndFinalize(e) {
		console.log(e.detail);
	}
</script>

<slot>
	<section class="set" data-set-id={set.id}>
		<h2>{set.title}</h2>
		{#each set.contents as link, index}
			<Link {link} {setIndex} linkIndex={index} />
		{/each}
	</section>
</slot>
