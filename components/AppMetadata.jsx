const author = "Egor Masiutkin";
const description =
	"Product Manager from China, who loves to make wonderful things that interest people - customer friendly - benefits to all";
const url = "https://egormasiutkin.netlify.app";
export const AppMetadata = {
	metadataBase: new URL("https://egormasiutkin.netlify.app/"),
	title: {
		default: `Portfolio | ${author}`,
		template: `%s | ${author}`
	},
	description: description,
	icons: {
		icon: "/favicon.png"
	},
	keywords: [
		"Hu Fang",
		"Yedda Hu",
		"Hu Fang - Product Manager",
		"Yedda Hu - Product Manager",
		"Product Manager"
	],
	creator: author,
	authors: [{ name: author, url: url }],
	colorScheme: "dark",
	openGraph: {
		title: `${author} | Portfolio`,
		description: description,
		url: url,
		siteName: `${author} | Portfolio`,
		images: [
			{
				url: "https://hufang.netlify.app/screenshot.webp",
				width: 800,
				height: 600,
				alt: "My personal portfolio website"
			},
			{
				url: "https://hufang.netlify.app/screenshot.webp",
				width: 1800,
				height: 1600,
				alt: "My personal portfolio website"
			}
		],
		locale: "en-US",
		type: "website"
	}
};
