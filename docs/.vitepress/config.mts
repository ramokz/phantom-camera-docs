import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Phantom Camera",
	description: "A Camera Addon for Godot",
	head: [
		[
			"link",
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/assets/icons/phantom-camera.svg",
			},
		],
		["link", { rel: "icon", type: "image/png", href: "/favicon.png" }],

		["meta", { property: "og:type", content: "website" }],
		["meta", { property: "og:title", content: "Phantom Camera" }],
		[
			"meta",
			{
				property: "og:description",
				content: "A Camera Addon for Godot",
			},
		],
		["meta", { property: "og:url", content: "https://phantom-camera.dev" }],
		["meta", { property: "og:image", content: "/meta-image.png" }],
		["meta", { property: "og:image:width", content: "1200" }],
		["meta", { property: "og:image:height", content: "630" }],
	],
	cleanUrls: true,
	appearance: "force-dark",
	transformHead({ assets }) {
		const fontFile = assets.find((file) => /Nunito\.\w+\.ttf/);
		const codeFontFile = assets.find((file) => /JetBrainsMono\.\w+\.ttf/);
		if (fontFile) {
			return [
				[
					"link",
					{
						rel: "preload",
						href: fontFile,
						as: "font",
						type: "font/ttf",
						crossorigin: "",
					},
				],
			];
		}
		if (codeFontFile) {
			return [
				[
					"link",
					{
						rel: "preload",
						href: codeFontFile,
						as: "font",
						type: "font/ttf",
						crossorigin: "",
					},
				],
			];
		}
	},
	srcExclude: ["**/parts/*.md"],
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		logo: "/assets/icons/phantom-camera.svg",
		editLink: {
			pattern:
				"https://github.com/ramokz/phantom-camera-docs/edit/main/docs/:path",
			text: "Suggest changes to this page",
		},
		nav: [
			{
				text: "Home",
				link: "/",
			},
			{
				text: "Docs",
				link: "/overview/what-is-this",
			},
			{
				text: "FAQ",
				link: "/support/faq",
			},
			{
				text: "Discussions",
				link: "https://github.com/ramokz/phantom-camera/discussions",
			},
		],

		outline: {
			label: "This page",
			level: [1, 3],
		},

		sidebar: [
			{
				text: "Overview",
				items: [
					{
						text: "What is this?",
						link: "/overview/what-is-this",
					},
					{
						text: "Installation",
						link: "/overview/installation",
					},
					{
						text: "Scene Requirements",
						link: "/overview/scene-requirements",
					},
					{
						text: "License",
						link: "/overview/license",
					},
				],
			},
			{
				text: "Core Nodes",
				items: [
					{
						text: "PhantomCamera2D",
						link: "/core-nodes/phantom-camera-2d",
					},
					{
						text: "PhantomCamera3D",
						link: "/core-nodes/phantom-camera-3d",
					},
					{
						text: "PhantomCameraHost",
						link: "/core-nodes/phantom-camera-host",
					},
					{
						text: "Multiple Phantom Cameras",
						link: "/core-nodes/multiple-phantom-cameras",
					},
				],
			},
			{
				text: "Secondary Nodes",
				items: [
					{
						text: "PhantomCameraNoise2D",
						link: "/secondary-nodes/phantom-camera-noise-emitter-2d",
					},
					{
						text: "PhantomCameraNoise3D",
						link: "/secondary-nodes/phantom-camera-noise-emitter-3d",
					},
					{
						text: "PhantomCameraTweenDirector",
						link: "/secondary-nodes/phantom-camera-tween-director",
					},
				],
			},
			{
				text: "Priority",
				link: "/priority",
			},
			{
				text: "PhantomCameraNoise",
				link: "/phantom-camera-noise",
			},
			{
				text: "Follow Modes",
				items: [
					{
						text: "Overview",
						link: "/follow-modes/overview",
					},
					{
						text: "Glued",
						link: "/follow-modes/glued",
					},
					{
						text: "Simple",
						link: "/follow-modes/simple",
					},
					{
						text: "Group",
						link: "/follow-modes/group",
					},
					{
						text: "Path",
						link: "/follow-modes/path",
					},
					{
						text: "Framed",
						link: "/follow-modes/framed",
					},
					{
						text: "Third Person (3D)",
						link: "/follow-modes/third-person",
					},
				],
			},
			{
				text: "Look At Modes (3D)",
				items: [
					{
						text: "Overview",
						link: "/look-at-modes/overview",
					},
					{
						text: "Mimic",
						link: "/look-at-modes/mimic",
					},
					{
						text: "Simple",
						link: "/look-at-modes/simple",
					},
					{
						text: "Group",
						link: "/look-at-modes/group",
					},
				],
			},
			{
				text: "Resource Types",
				items: [
					{
						text: "PhantomCameraTween",
						link: "/resource-types/phantom-camera-tween",
					},
					{
						text: "TweenDirectorResource",
						link: "/resource-types/tween-director-resource",
					},
					{
						text: "Camera3DResource",
						link: "/resource-types/camera-3d-resource",
					},
					{
						text: "PhantomCameraNoise2D",
						link: "/resource-types/phantom-camera-noise-2d",
					},
					{
						text: "PhantomCameraNoise3D",
						link: "/resource-types/phantom-camera-noise-3d",
					},
				],
			},
			{
				text: "PhantomCameraManager",
				link: "/phantom-camera-manager",
			},
			{
				text: "Viewfinder",
				link: "/viewfinder",
			},
			{
				text: "Timeline Animation",
				link: "/timeline-animation",
			},
			{
				text: "Editor Updater",
				link: "/editor-updater",
			},
			{
				text: "C# Wrapper",
				link: "/c-sharp-wrapper",
			},
			{
				text: "Support",
				items: [
					{ text: "FAQ", link: "/support/faq" },
					{ text: "How To Contribute", link: "/support/how-to-contribute" },
					{ text: "Contact", link: "/support/contact" },
				],
			},
			{
				text: "Roadmap",
				link: "/roadmap",
			},
		],

		search: {
			provider: "algolia",
			options: {
				appId: "FCA0M2RPZ7",
				apiKey: "e0bad5c9ed0efeb70f0e49066cd34705",
				indexName: "phantom-camera",
			},
		},

		socialLinks: [
			{ icon: "github", link: "https://github.com/ramokz/phantom-camera" },
			{ icon: "mastodon", link: "https://mastodon.social/@marcusskov" },
			{
				icon: {
					svg: `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M4.52397 2.63436C6.7405 4.2984 9.12464 7.67236 9.99997 9.48303C10.8754 7.6725 13.2594 4.29836 15.476 2.63436C17.0753 1.43366 19.6666 0.504628 19.6666 3.46086C19.6666 4.05126 19.3281 8.42053 19.1296 9.12986C18.4395 11.596 15.9248 12.225 13.6879 11.8443C17.5979 12.5098 18.5926 14.714 16.4445 16.9183C12.3648 21.1046 10.5808 15.8679 10.1235 14.5261C10.0397 14.2801 10.0005 14.165 9.99991 14.2629C9.99933 14.165 9.96012 14.2801 9.87632 14.5261C9.41919 15.8679 7.63522 21.1048 3.55532 16.9183C1.40719 14.714 2.40182 12.5096 6.31189 11.8443C4.07496 12.225 1.56022 11.596 0.870224 9.12986C0.671684 8.42046 0.333191 4.0512 0.333191 3.46086C0.333191 0.504628 2.92459 1.43366 4.52386 2.63436H4.52397Z"/>
</svg>`,
				},
				link: "https://bsky.app/profile/marcusskov.com",
				ariaLabel: "Bluesky",
			},
			{
				icon: {
					svg: `<svg width="176" height="129" viewBox="0 0 176 129" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M82.2969 0.208984C119.131 0.208984 126.861 0.664728 139.817 1.79883C162.783 4.52293 175.968 15.6674 175.968 36.8086V40.2168C175.968 59.09 160.281 73.864 142.092 73.8643H133.906L132.543 79.5479C130.725 88.4176 127.317 95.4623 123.452 101.829C115.495 114.329 101.17 128.653 71.6162 128.653H64.5713C42.0614 128.653 22.2819 120.924 11.3721 100.689C2.1232 83.7316 0.127434 65.4954 0.0117188 37.71L0 34.9902C6.49975e-05 15.8957 7.50755 5.2141 26.374 2.4834C39.7859 0.43701 57.5193 0.208987 82.2969 0.208984ZM89.3584 21.8105C80.0396 21.8106 73.6715 26.587 68.8955 33.1758C64.5742 26.5808 57.9848 21.8105 48.6592 21.8105C32.7448 21.8108 22.2852 34.767 22.2852 49.3193L22.2969 49.9463C22.5263 63.0927 29.9417 74.4671 39.3398 83.4229C45.7069 89.5609 55.7113 95.9295 62.5283 100.021C64.5744 101.156 66.6208 101.84 68.8955 101.84C71.6255 101.84 73.8938 101.156 75.7188 100.021C82.5417 95.9295 92.5387 89.5609 98.6787 83.4229C108.454 74.331 115.954 62.7375 115.954 49.3193C115.954 34.7668 105.045 21.8105 89.3584 21.8105ZM139.601 20.2188C135.964 20.2189 133.918 22.2648 133.918 24.9951V50.6797C133.918 53.41 135.964 55.4559 139.601 55.4561C151.195 55.4561 157.562 48.8608 157.562 37.9512C157.561 27.0418 151.194 20.2188 139.601 20.2188Z"/>
</svg>`,
				},
				link: "https://ko-fi.com/ramokz",
				ariaLabel: "Ko-Fi",
			},
		],
	},
});
