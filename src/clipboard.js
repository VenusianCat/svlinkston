/* Step 2 - loop through the sets - additional search filtering from relinkston */
const sets = Object.keys(newState.sets);
sets.forEach(function (set) {
	newState.sets[set].display = true;
	/* Step 2a any matching links in this set? if so, set must be visible. - */
	var setIsEmpty = true;
	newState.sets[set].linkIds.forEach(function (linkId) {
		if (newState.links[linkId].display === true) {
			setIsEmpty = false;
		}
	});
	if (setIsEmpty) {
		newState.sets[set].display = false;
	}

	/* Step 2b does the set title itself match? if so, the set and all links within it must be visible - */
	if (
		newState.sets[set].title.toLowerCase().indexOf(filterText) >
		-1 ||
		filterText == ""
	) {
		/* expose set */
		newState.sets[set].display = true;
		/* expose all links in that set */
		newState.sets[set].linkIds.forEach(function (linkId) {
			newState.links[linkId].display = true;
		});
	}
});





/*attempt to grab the page title for the URL*/
const request = new XMLHttpRequest();
request.open("POST", ajaxRoot, true);
request.setRequestHeader(
	"Content-Type",
	"application/x-www-form-urlencoded; charset=UTF-8"
);

/*I'm not sure how it works, but using this weird syntax, "this" is available in the onload callback! See https://medium.com/@rjun07a/binding-callbacks-in-react-components-9133c0b396c6 */
request.onload = () => {
	if (request.status >= 200 && request.status < 400) {
		const r = JSON.parse(request.response);
		console.log(r);
		console.log(this);
		const updatedLinkId = "link-" + r[0];
		const updatedLinkTitle = r[1];
		const newState = {
			...this.state,
			links: {
				...this.state.links,
				[updatedLinkId]: {
					...this.state.links[updatedLinkId],
					title: updatedLinkTitle
				}
			}
		};
		this.setState(newState);
		document.getElementById("thingToAdd").value = "";
	}
};
request.send(
	"action=react-lookup&key=" + nextId + "&url=" + thingToAdd
);





