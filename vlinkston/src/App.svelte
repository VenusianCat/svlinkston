<script>
	import { bookmarks } from "./bookmarks2";
	import Set from "./Set.svelte";
	let filter, newUrl;

	function getNextLinkId() {
		let number = 0;
		let highestNumber = 0;
		$bookmarks[0].sets.forEach((set) => {
			set.contents.forEach((link) => {
				number = parseInt(link.id.slice(link.id.lastIndexOf("-") + 1));
				if (number > highestNumber) highestNumber = number;
			});
		});
		return highestNumber + 1;
	}

	function addLink() {
		if (/^http(s)?:\/\//.test(newUrl) === true) {
			const nextId = getNextLinkId();
			console.log(nextId);

			const newLink = {
				id: "link-" + nextId,
				title: newUrl,
				url: newUrl,
				display: true,
			};

			$bookmarks[0].sets[0].contents.unshift(newLink);
			$bookmarks = $bookmarks;
		}
	}

	function reFilter(event) {
		console.log(filter);
		/* Step 1 - Find text links that match */
		let activeLinks = 0;
		let filteredBookmarks = $bookmarks;
		filteredBookmarks[0].sets.forEach((set, setIndex) => {
			set.contents.forEach((link, linkIndex) => {
				if (
					link.title.toLowerCase().indexOf(filter) > -1 ||
					filter == ""
				) {
					filteredBookmarks[0].sets[setIndex].contents[
						linkIndex
					].display = true;
					activeLinks++;
				} else {
					filteredBookmarks[0].sets[setIndex].contents[
						linkIndex
					].display = false;
				}
			});
		});
		console.log(activeLinks);
		$bookmarks = filteredBookmarks;
	}
</script>

<main>
	<section id="intro">
		<h1>Vlinkston</h1>
		<p>
			A noble if misguided attempt to adapt relinkston for Svelte; add
			functionality - specifically tabs; and, through so doing, learn the
			framework.
		</p>
	</section>
	<section id="controls">
		<h2>Controls</h2>
		<input bind:value={newUrl} /><button on:click={addLink}>Add</button><br
		/>
		Filter: <input bind:value={filter} on:input={reFilter} />
	</section>
	<section class="set-container">
		{#each $bookmarks[0].sets as set, index}
			<Set {set} setIndex={index} />
		{/each}
	</section>
</main>

<style>
	/*
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
	*/
</style>
