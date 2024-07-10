
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const IMSETTINGS_INTEGRATE_DESKTOP: string;
	export const SHELL: string;
	export const npm_command: string;
	export const SESSION_MANAGER: string;
	export const QT_SCREEN_SCALE_FACTORS: string;
	export const COLORTERM: string;
	export const XDG_CONFIG_DIRS: string;
	export const XDG_SESSION_PATH: string;
	export const HISTCONTROL: string;
	export const XDG_MENU_PREFIX: string;
	export const TERM_PROGRAM_VERSION: string;
	export const GTK_IM_MODULE: string;
	export const npm_package_devDependencies_eslint_plugin_svelte: string;
	export const HOSTNAME: string;
	export const HISTSIZE: string;
	export const ICEAUTHORITY: string;
	export const NODE: string;
	export const npm_package_devDependencies_tslib: string;
	export const LESS_TERMCAP_se: string;
	export const LESS_TERMCAP_so: string;
	export const npm_package_scripts_check_watch: string;
	export const DOTNET_ROOT: string;
	export const SSH_AUTH_SOCK: string;
	export const npm_package_private: string;
	export const MEMORY_PRESSURE_WRITE: string;
	export const OPENAI_API_KEY: string;
	export const XMODIFIERS: string;
	export const DESKTOP_SESSION: string;
	export const SSH_AGENT_PID: string;
	export const GTK_RC_FILES: string;
	export const NO_AT_BRIDGE: string;
	export const GDK_CORE_DEVICE_EVENTS: string;
	export const XCURSOR_SIZE: string;
	export const EDITOR: string;
	export const XDG_SEAT: string;
	export const PWD: string;
	export const npm_package_devDependencies_vite: string;
	export const XDG_SESSION_DESKTOP: string;
	export const LOGNAME: string;
	export const XDG_SESSION_TYPE: string;
	export const SYSTEMD_EXEC_PID: string;
	export const npm_package_scripts_build: string;
	export const XAUTHORITY: string;
	export const SDL_VIDEO_MINIMIZE_ON_FOCUS_LOSS: string;
	export const npm_package_devDependencies_prettier: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const npm_package_devDependencies_eslint_config_prettier: string;
	export const GTK2_RC_FILES: string;
	export const HOME: string;
	export const SSH_ASKPASS: string;
	export const LANG: string;
	export const npm_package_devDependencies_typescript: string;
	export const LS_COLORS: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const npm_package_version: string;
	export const MEMORY_PRESSURE_WATCH: string;
	export const WEBKIT_DISABLE_DMABUF_RENDERER: string;
	export const npm_package_dependencies__sveltejs_adapter_netlify: string;
	export const GIT_ASKPASS: string;
	export const XDG_SEAT_PATH: string;
	export const CLICOLOR: string;
	export const INVOCATION_ID: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const MANAGERPID: string;
	export const IMSETTINGS_MODULE: string;
	export const INIT_CWD: string;
	export const DOTNET_BUNDLE_EXTRACT_BASE_DIR: string;
	export const CHROME_DESKTOP: string;
	export const npm_package_scripts_format: string;
	export const QT_QPA_PLATFORM: string;
	export const STEAM_FRAME_FORCE_CLOSE: string;
	export const KDE_SESSION_UID: string;
	export const npm_package_scripts_preview: string;
	export const npm_lifecycle_script: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const XDG_SESSION_CLASS: string;
	export const TERM: string;
	export const LESS_TERMCAP_mb: string;
	export const npm_package_name: string;
	export const LESS_TERMCAP_me: string;
	export const LESS_TERMCAP_md: string;
	export const LESSOPEN: string;
	export const npm_package_type: string;
	export const USER: string;
	export const npm_config_frozen_lockfile: string;
	export const npm_package_devDependencies_typescript_eslint: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const KDE_SESSION_VERSION: string;
	export const VISUAL: string;
	export const DISPLAY: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const LESS_TERMCAP_ue: string;
	export const LESS_TERMCAP_us: string;
	export const npm_package_devDependencies_eslint: string;
	export const QT_IM_MODULE: string;
	export const XDG_VTNR: string;
	export const XDG_SESSION_ID: string;
	export const npm_config_user_agent: string;
	export const npm_package_scripts_lint: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const npm_execpath: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_package_devDependencies_svelte: string;
	export const XDG_RUNTIME_DIR: string;
	export const NODE_PATH: string;
	export const DEBUGINFOD_URLS: string;
	export const npm_package_scripts_dev: string;
	export const KDEDIRS: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const QT_AUTO_SCREEN_SCALE_FACTOR: string;
	export const JOURNAL_STREAM: string;
	export const XCURSOR_THEME: string;
	export const XDG_DATA_DIRS: string;
	export const npm_package_scripts_check: string;
	export const GDK_BACKEND: string;
	export const KDE_FULL_SESSION: string;
	export const PATH: string;
	export const npm_package_devDependencies__types_eslint: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const HISTFILESIZE: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const npm_package_devDependencies_globals: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const KDE_APPLICATIONS_AS_SCOPE: string;
	export const MAIL: string;
	export const npm_config_registry: string;
	export const npm_node_execpath: string;
	export const npm_config_engine_strict: string;
	export const TERM_PROGRAM: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		IMSETTINGS_INTEGRATE_DESKTOP: string;
		SHELL: string;
		npm_command: string;
		SESSION_MANAGER: string;
		QT_SCREEN_SCALE_FACTORS: string;
		COLORTERM: string;
		XDG_CONFIG_DIRS: string;
		XDG_SESSION_PATH: string;
		HISTCONTROL: string;
		XDG_MENU_PREFIX: string;
		TERM_PROGRAM_VERSION: string;
		GTK_IM_MODULE: string;
		npm_package_devDependencies_eslint_plugin_svelte: string;
		HOSTNAME: string;
		HISTSIZE: string;
		ICEAUTHORITY: string;
		NODE: string;
		npm_package_devDependencies_tslib: string;
		LESS_TERMCAP_se: string;
		LESS_TERMCAP_so: string;
		npm_package_scripts_check_watch: string;
		DOTNET_ROOT: string;
		SSH_AUTH_SOCK: string;
		npm_package_private: string;
		MEMORY_PRESSURE_WRITE: string;
		OPENAI_API_KEY: string;
		XMODIFIERS: string;
		DESKTOP_SESSION: string;
		SSH_AGENT_PID: string;
		GTK_RC_FILES: string;
		NO_AT_BRIDGE: string;
		GDK_CORE_DEVICE_EVENTS: string;
		XCURSOR_SIZE: string;
		EDITOR: string;
		XDG_SEAT: string;
		PWD: string;
		npm_package_devDependencies_vite: string;
		XDG_SESSION_DESKTOP: string;
		LOGNAME: string;
		XDG_SESSION_TYPE: string;
		SYSTEMD_EXEC_PID: string;
		npm_package_scripts_build: string;
		XAUTHORITY: string;
		SDL_VIDEO_MINIMIZE_ON_FOCUS_LOSS: string;
		npm_package_devDependencies_prettier: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		npm_package_devDependencies_eslint_config_prettier: string;
		GTK2_RC_FILES: string;
		HOME: string;
		SSH_ASKPASS: string;
		LANG: string;
		npm_package_devDependencies_typescript: string;
		LS_COLORS: string;
		XDG_CURRENT_DESKTOP: string;
		npm_package_version: string;
		MEMORY_PRESSURE_WATCH: string;
		WEBKIT_DISABLE_DMABUF_RENDERER: string;
		npm_package_dependencies__sveltejs_adapter_netlify: string;
		GIT_ASKPASS: string;
		XDG_SEAT_PATH: string;
		CLICOLOR: string;
		INVOCATION_ID: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		MANAGERPID: string;
		IMSETTINGS_MODULE: string;
		INIT_CWD: string;
		DOTNET_BUNDLE_EXTRACT_BASE_DIR: string;
		CHROME_DESKTOP: string;
		npm_package_scripts_format: string;
		QT_QPA_PLATFORM: string;
		STEAM_FRAME_FORCE_CLOSE: string;
		KDE_SESSION_UID: string;
		npm_package_scripts_preview: string;
		npm_lifecycle_script: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
		npm_package_devDependencies_svelte_check: string;
		XDG_SESSION_CLASS: string;
		TERM: string;
		LESS_TERMCAP_mb: string;
		npm_package_name: string;
		LESS_TERMCAP_me: string;
		LESS_TERMCAP_md: string;
		LESSOPEN: string;
		npm_package_type: string;
		USER: string;
		npm_config_frozen_lockfile: string;
		npm_package_devDependencies_typescript_eslint: string;
		VSCODE_GIT_IPC_HANDLE: string;
		KDE_SESSION_VERSION: string;
		VISUAL: string;
		DISPLAY: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		LESS_TERMCAP_ue: string;
		LESS_TERMCAP_us: string;
		npm_package_devDependencies_eslint: string;
		QT_IM_MODULE: string;
		XDG_VTNR: string;
		XDG_SESSION_ID: string;
		npm_config_user_agent: string;
		npm_package_scripts_lint: string;
		PNPM_SCRIPT_SRC_DIR: string;
		npm_execpath: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_package_devDependencies_svelte: string;
		XDG_RUNTIME_DIR: string;
		NODE_PATH: string;
		DEBUGINFOD_URLS: string;
		npm_package_scripts_dev: string;
		KDEDIRS: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		QT_AUTO_SCREEN_SCALE_FACTOR: string;
		JOURNAL_STREAM: string;
		XCURSOR_THEME: string;
		XDG_DATA_DIRS: string;
		npm_package_scripts_check: string;
		GDK_BACKEND: string;
		KDE_FULL_SESSION: string;
		PATH: string;
		npm_package_devDependencies__types_eslint: string;
		npm_package_devDependencies__sveltejs_kit: string;
		HISTFILESIZE: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		npm_package_devDependencies_globals: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		KDE_APPLICATIONS_AS_SCOPE: string;
		MAIL: string;
		npm_config_registry: string;
		npm_node_execpath: string;
		npm_config_engine_strict: string;
		TERM_PROGRAM: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
