import { defineConfig } from 'quicklook-kit';

export default defineConfig({
	name: 'Quick Look Svelte',
	bundleId: 'com.idleberg.QuickLookSvelte',
	// macOS already knows .svelte as dev.svelte, so the app claims that rather than declaring its own.
	types: ['dev.svelte'],
  icon: 'assets/AppIcon.icns',
	framework: 'sveltekit',
	maxFileSize: 500_000,
});
