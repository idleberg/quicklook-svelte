# quicklook-svelte

> A macOS QuickLook preview that highlights Svelte components with [twinkleplop](https://twinkleplop.pngwn.at)

Built with [quicklook-kit](https://www.npmjs.com/package/quicklook-kit) and SvelteKit.

> [!TIP]
> For a full-featured QuickLook plugin for developers, check out [`quicklook-dev`](https://github.com/idleberg/quicklook-dev) instead.

## Installation

```sh
homebrew install idleberg/asahi/quicklook-svelte
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

The preview uses Catppuccin Latte, and Mocha when the system is in dark mode. To change it, install another [twinkleplop theme](https://twinkleplop.pngwn.at/docs/themes) and update the imports in `src/lib/theme.css`.

### Usage

```sh
pnpm dev        # drop a file on the page to preview it
pnpm register   # build, install to /Applications and register with QuickLook
pnpm unregister
```

Files over 500 KB get QuickLook's generic preview.

## License

This work is licensed under [The MIT License](LICENSE).
