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

			fetch("http://localhost/working/backend/ajax.php", {
				method: "post",
				headers: {
					Accept: "application/json, text/plain, /",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ action: "lookup", url: newUrl }),
			}).then(function (response) {
				response.text().then(function (data) {
					console.log(data);
					$bookmarks[0].sets[0].contents[0].title = data;
				});
			});

			$bookmarks[0].sets[0].contents.unshift(newLink);
			$bookmarks = $bookmarks;
			newUrl = "";
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

	function saveBookmarks() {
		console.log("saving...");

		fetch("http://localhost/working/backend/ajax.php", {
			method: "post",
			headers: {
				Accept: "application/json, text/plain, /",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ action: "save", json: $bookmarks }),
		}).then((res) => console.log(res));
	}
</script>

<main>
	<section id="controls">
		<h2>Controls</h2>
		<button on:click={saveBookmarks}>Save data</button><br />
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
	section.set-container {
		font-size: 1em;
		column-count: auto;
		column-width: 320px;
		column-gap: 20px;
	}
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
