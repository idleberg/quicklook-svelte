import { defineConfig } from 'quicklook-kit';

const theme = (light: boolean) => ({
	type: 'string' as const,
	default: 'catppuccin',
	enum: [
		{ value: 'atom-one', description: light ? 'Atom One Light' : 'Atom One Dark' },
		{ value: 'ayu', description: light ? 'Ayu Light' : 'Ayu Dark' },
		{ value: 'catppuccin', description: light ? 'Catppuccin Latte' : 'Catppuccin Mocha' },
		{ value: 'github', description: light ? 'GitHub Light' : 'GitHub Dark' },
		{ value: 'material', description: light ? 'Material Lighter' : 'Material' },
		{ value: 'night-owl', description: light ? 'Light Owl' : 'Night Owl' },
		{ value: 'rose-pine', description: light ? 'Rosé Pine Dawn' : 'Rosé Pine' },
		{ value: 'solarized', description: light ? 'Solarized Light' : 'Solarized Dark' },
	],
});

export default defineConfig({
	name: 'Quick Look Svelte',
	bundleId: 'com.idleberg.QuickLookSvelte',
	// macOS already knows .svelte as dev.svelte, so the app claims that rather than declaring its own.
	types: ['dev.svelte'],
  icon: 'assets/AppIcon.icns',
	framework: 'sveltekit',
	maxFileSize: 500_000,
	settings: {
		lightTheme: theme(true),
		darkTheme: theme(false),
		lineNumbers: { type: 'boolean', default: false, title: 'Show Line Numbers' },
	},
});
