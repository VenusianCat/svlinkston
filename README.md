# Svlinkston

## Caution Advised

This is a personal project; no guarantees or even vague intimations of quality provided! I built this to better learn Svelte, it no doubt contains many rookie errors, inefficiencies, poor coding decisions etc.

## What is this?

Svlinkston is a single page app to manage bookmarks. From a plug and play perspective it has multiple significant flaws -

1. Absolutely no security - anyone going to the page can add, remove, rename links etc.
2. It's reliant on a very primative backend written in php.
3. You cannot currently rename the link groups (named pages of links) in the app itself; instead you'd need to hand hack the bookmarks.json file in which all the bookmarks are stored.
4. etc.

## Dependencies / Included Code

* [ICONSVG](https://iconsvg.xyz/) - used to generate SVG for the icons
* [SVELTE DND ACTION](https://github.com/isaacHagoel/svelte-dnd-action) - the drag and drop library
