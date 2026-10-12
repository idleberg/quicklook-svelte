# quicklook-svelte

> A macOS Quick Look preview that highlights Svelte components with [Twinklepop](https://twinkleplop.pngwn.at)

Built with [quicklook-kit](https://www.npmjs.com/package/quicklook-kit) and SvelteKit.

> [!TIP]
> For a full-featured Quick Look plugin for developers, check out [`quicklook-coder`](https://github.com/idleberg/quicklook-coder) instead.

## Installation

```sh
brew install idleberg/asahi/quicklook-svelte
```

## Development

### Requirements

- macOS 14 or later, with Xcode installed
- [mise](https://mise.jdx.dev), which installs Node, pnpm and XcodeGen

```sh
mise trust
mise install
```

### Theme

The preview uses Catppuccin Latte, and Mocha when the system is in dark mode. To change it, install another [Twinklepop theme](https://twinkleplop.pngwn.at/docs/themes) and update the imports in `src/lib/theme.css`.

### Usage

```sh
pnpm dev        # drop a file on the page to preview it
pnpm register   # build, install to /Applications and register with Quick Look
pnpm unregister
```

Files over 500 KB get Quick Look's generic preview.

### Why Twinklepop?

Popular highlighters like [Shiki](https://shiki.style/) or [Prism](https://prismjs.com/) might support more languages, but Twinkleplop is an order of magnitude faster. Quick Look previews should feel instant, and with Twinkleplop most source files appear almost as soon as you press space; very large files take a bit longer.

## License

This work is licensed under [The MIT License](LICENSE).
