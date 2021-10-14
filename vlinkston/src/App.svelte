<script>
	import { bookmarks } from "./bookmarks";
	import Set from "./Set.svelte";
	let filter, newUrl;

	function getNextId(object) {
		let number = 0;
		let highestNumber = 0;
		for (const key in object) {
			number = parseInt(key.slice(key.lastIndexOf("-") + 1));
			if (number > highestNumber) highestNumber = number;
		}
		return number + 1;
	}

	function addLink() {
		if (/^http(s)?:\/\//.test(newUrl) === true) {
			const nextId = getNextId($bookmarks.links);
			console.log(nextId);
			const newLinkURL = newUrl;
			let newLinkTitle = newUrl;

			//This adds the new link id to the inbox set
			const inbox = $bookmarks.sets["set-1"];
			const newLinkIds = Array.from(inbox.linkIds);
			newLinkIds.splice(0, 0, "link-" + nextId);
			const newSet = { ...inbox, linkIds: newLinkIds };

			//This add a new link to the link collection
			const newLink = {
				id: "link-" + nextId,
				title: newLinkTitle,
				url: newLinkURL,
				display: true,
			};

			const newBookmarks = {
				...$bookmarks,
				links: {
					...$bookmarks.links,
					[newLink.id]: newLink,
				},
				sets: {
					...$bookmarks.sets,
					["set-1"]: newSet,
				},
			};

			$bookmarks = newBookmarks;
		}
	}

	function reFilter(event) {
		console.log(filter);
		/* Step 1 - Find text links that match */
		let activeLinks = 0;
		let filteredBookmarks = $bookmarks;
		for (let key in filteredBookmarks.links) {
			let link = filteredBookmarks.links[key];
			if (link.title.toLowerCase().indexOf(filter) > -1 || filter == "") {
				filteredBookmarks.links[link.id].display = true;
				activeLinks++;
			} else {
				filteredBookmarks.links[link.id].display = false;
			}
		}
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
		{#each $bookmarks.setOrder as setname}
			<Set contents={$bookmarks.sets[setname]} />
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
