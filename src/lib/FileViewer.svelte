<!--
	Highlights Svelte components with twinkleplop, whose grammars compile to
	plain JavaScript state machines: no regexes to compile on first use and no
	WebAssembly, which the page's CSP would block.
-->
<script lang="ts" module>
	import { language } from '@twinkleplop/svelte';
	import './theme.css';

	const svelte = language();
</script>

<script lang="ts">
	import type { QuickLookFile } from 'virtual:quicklook';

	let { file }: { file: QuickLookFile } = $props();

	// twinkleplop escapes the source, so the untrusted file can't inject markup.
	const html = $derived(svelte(new TextDecoder().decode(file.bytes)));
</script>

{@html html}

<style>
	:global(body) {
		margin: 0;
		background: var(--twp-background);
	}

	:global(.twinkleplop) {
		margin: 0;
		padding: 1rem;
		color: var(--twp-identifier);
		font:
			12px ui-monospace,
			monospace;
		white-space: pre-wrap;
	}
</style>
