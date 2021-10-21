<script>
	import { bookmarks } from "./bookmarks2";
	import { appState } from "./appState";
	import Group from "./Group.svelte";
	let filter, newUrl;

	function getNextLinkId() {
		let number = 0;
		let highestNumber = 0;
		$bookmarks.forEach((group) => {
			group.sets.forEach((set) => {
				set.contents.forEach((link) => {
					number = parseInt(
						link.id.slice(link.id.lastIndexOf("-") + 1)
					);
					if (number > highestNumber) highestNumber = number;
				});
			});
		});

		return highestNumber + 1;
	}

	function getNextSetId() {
		//TODO
		let number = 0;
		let highestNumber = 0;
		$bookmarks.forEach((group) => {
			group.sets.forEach((set) => {
				number = parseInt(set.id.slice(set.id.lastIndexOf("-") + 1));
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
				dataType: "link",
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
		} else {
			const nextId = getNextSetId();

			const newSet = {
				id: "set-" + nextId,
				title: newUrl,
				contents: [],
				display: true,
				dataType: "set",
			};

			console.log(newSet);

			let positionInNewGroup = $appState.currentTabIndex == 0 ? 1 : 0;
			$bookmarks[$appState.currentTabIndex].sets.splice(
				positionInNewGroup,
				0,
				newSet
			);

			$bookmarks = $bookmarks;
		}
	}

	function reFilter(event) {
		console.log(filter);
		/* Step 1 - Find text links that match */
		let activeLinks = 0;
		let filteredBookmarks = $bookmarks;

		filteredBookmarks.forEach((group, groupIndex) => {
			filteredBookmarks[groupIndex].sets.forEach((set, setIndex) => {
				set.contents.forEach((link, linkIndex) => {
					if (
						link.title.toLowerCase().indexOf(filter) > -1 ||
						filter == ""
					) {
						filteredBookmarks[groupIndex].sets[setIndex].contents[
							linkIndex
						].display = true;
						activeLinks++;
					} else {
						filteredBookmarks[groupIndex].sets[setIndex].contents[
							linkIndex
						].display = false;
					}
				});
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

	function switchTab() {
		console.log("switch");
	}
</script>

<main>
	<section id="controls">
		<input bind:value={newUrl} style="width:80%" />
		<button on:click={addLink}>Add</button><br />
		Filter: <input bind:value={filter} on:input={reFilter} />
		<button on:click={saveBookmarks}>Save data</button>
	</section>

	<ul id="tabMenu">
		{#each $bookmarks as group, index}
			{#if index == $appState.currentTabIndex}
				<li class="selectedTab">{$bookmarks[index].title}</li>
			{:else}
				<li
					class="availableTab"
					on:click={() => ($appState.currentTabIndex = index)}
				>
					{$bookmarks[index].title}
				</li>
			{/if}
			<span class="separator">/</span>
		{/each}
	</ul>

	<section class="groups-container">
		{#each $bookmarks as group, index}
			{#if index == $appState.currentTabIndex}
				<Group {group} groupIndex={index} />
			{/if}
		{/each}
	</section>
</main>

<style>
	#tabMenu {
		margin: 0;
		padding: 0;
	}

	#tabMenu li {
		display: inline-block;
		padding: 20px 0;
		font-size: 1.5em;
	}

	#tabMenu span.separator {
		display: inline-block;
		padding: 0 10px;
	}

	li.selectedTab {
		color: #fff;
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
