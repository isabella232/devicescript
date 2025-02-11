// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

async function createConfig() {
    /** @type {import('@docusaurus/types').Config} */
    const config = {
        title: "DeviceScript",
        tagline:
            "Portable, small footprint virtual machine for embedded devices with a hint of TypeScript.",
        url: "https://microsoft.github.io/",
        baseUrl: "/devicescript/",
        onBrokenLinks: "throw",
        favicon: "img/favicon.svg",
        trailingSlash: false,

        // GitHub pages deployment config.
        // If you aren't using GitHub pages, you don't need these.
        organizationName: "microsoft", // Usually your GitHub org/user name.
        projectName: "devicescript", // Usually your repo name.
        deploymentBranch: "gh-pages",

        // Even if you don't use internalization, you can use this field to set useful
        // metadata like html lang. For example, if your site is Chinese, you may want
        // to replace "en" with "zh-Hans".
        i18n: {
            defaultLocale: "en",
            locales: ["en"],
        },
        presets: [
            [
                "classic",
                /** @type {import('@docusaurus/preset-classic').Options} */
                ({
                    docs: {
                        routeBasePath: "/",
                        sidebarPath: require.resolve("./sidebars.js"),
                        remarkPlugins: [],
                    },
                    blog: false,
                    theme: {
                        customCss: require.resolve("./src/css/custom.css"),
                    },
                }),
            ],
        ],

        themeConfig:
            /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
            ({
                colorMode: {
                    disableSwitch: false,
                },
                docs: {
                    sidebar: {
                        hideable: true,
                        autoCollapseCategories: true,
                    },
                },
                navbar: {
                    title: "DeviceScript",
                    hideOnScroll: true,
                    logo: {
                        alt: "DeviceScript language",
                        src: "img/logo.svg",
                        srcDark: "img/logo_dark.svg",
                    },
                    items: [
                        {
                            type: "doc",
                            docId: "intro",
                            position: "left",
                            label: "Docs",
                        },
                        {
                            type: "doc",
                            docId: "api/cli",
                            position: "left",
                            label: "API",
                        },
                        {
                            href: "https://github.com/microsoft/devicescript/",
                            label: "GitHub",
                            position: "right",
                        },
                    ],
                },
                footer: {
                    style: "dark",
                    links: [
                        {
                            title: "Docs",
                            items: [
                                {
                                    label: "Developer",
                                    to: "/developer",
                                },
                                {
                                    label: "Language Reference",
                                    to: "/language",
                                },
                                {
                                    label: "API",
                                    to: "/api/cli",
                                },
                            ],
                        },
                        {
                            title: "Community",
                            items: [
                                {
                                    label: "Discussions",
                                    href: "https://github.com/microsoft/devicescript/discussions",
                                },
                            ],
                        },
                        {
                            title: "Legal",
                            items: [
                                {
                                    label: "Privacy & Cookies",
                                    href: "https://go.microsoft.com/fwlink/?LinkId=521839",
                                },
                                {
                                    label: "Terms Of Use",
                                    href: "https://www.microsoft.com/en-us/legal/terms-of-use",
                                },
                                {
                                    label: "Trademarks",
                                    href: "https://www.microsoft.com/trademarks",
                                },
                            ],
                        },
                    ],
                    copyright: `Copyright © ${new Date().getFullYear()} Microsoft.`,
                },
                prism: {
                    theme: lightCodeTheme,
                    darkTheme: darkCodeTheme,
                },
            }),
        markdown: {
            mermaid: true,
        },
        themes: ["@docusaurus/theme-mermaid"],
    }

    const renderCodeBlocks = (
        await import("./src/remark/render-code-blocks.mjs")
    ).default

    // add custom codeblocks to the default docs
    config.presets?.forEach(preset =>
        preset[1].docs.remarkPlugins?.push(renderCodeBlocks)
    )
    config.plugins?.forEach(plugin =>
        plugin[1]?.remarkPlugins?.push(renderCodeBlocks)
    )

    return config
}

module.exports = createConfig
