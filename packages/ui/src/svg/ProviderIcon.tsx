import { SVGProps } from "react";

export const MenuArrow = ({
	width,
	height,
	fill,
	className,
}: SVGProps<SVGAElement>) => {
	return (
		<svg
			width={width}
			height={height}
			fill={fill}
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<g id="Frame">
				<path
					id="Vector"
					d="M10.175 18.5793C9.95844 18.5797 9.74858 18.5043 9.58185 18.3661C9.488 18.2883 9.41043 18.1928 9.35357 18.085C9.29672 17.9771 9.26169 17.8591 9.2505 17.7378C9.2393 17.6164 9.25217 17.494 9.28835 17.3776C9.32454 17.2612 9.38333 17.153 9.46137 17.0594L13.6133 12.0919L9.60965 7.11523C9.53267 7.02044 9.47518 6.91136 9.44049 6.79427C9.4058 6.67719 9.39459 6.5544 9.40751 6.43297C9.42043 6.31154 9.45722 6.19385 9.51576 6.08669C9.57431 5.97952 9.65346 5.88498 9.74866 5.8085C9.84455 5.72413 9.95685 5.66049 10.0785 5.62158C10.2001 5.58266 10.3285 5.56931 10.4556 5.58237C10.5826 5.59542 10.7056 5.63459 10.8168 5.69743C10.928 5.76027 11.025 5.84541 11.1017 5.94751L15.578 11.5081C15.7143 11.6739 15.7888 11.8819 15.7888 12.0966C15.7888 12.3112 15.7143 12.5192 15.578 12.6851L10.9442 18.2457C10.8512 18.3578 10.7331 18.4465 10.5995 18.5044C10.4658 18.5624 10.3204 18.588 10.175 18.5793Z"
					fill="#333333"
				/>
			</g>
		</svg>
	);
};

export const ButtonPlue = ({ width, height, fill }: SVGProps<SVGAElement>) => {
	return (
		<svg
			width={width}
			height={height}
			fill={fill}
			viewBox="0 0 24 25"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M12 5.96094V19.9609"
				stroke="#337AFF"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				d="M5 12.9609H19"
				stroke="#337AFF"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
		</svg>
	);
};

export const ButtonEdit = ({ width, height, fill }: SVGProps<SVGAElement>) => {
	return (
		<svg
			width={width}
			height={height}
			fill={fill}
			viewBox="0 0 22 21"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M17.4717 3.14127L18.7092 4.32252C19.4333 5.00502 19.4333 6.11627 18.7092 6.79877L6.58167 18.375H2.75V14.7175L12.2833 5.60877L14.8775 3.14127C15.5925 2.45877 16.7567 2.45877 17.4717 3.14127ZM4.58333 16.625L5.87583 16.6775L14.8775 8.07627L13.585 6.84252L4.58333 15.435V16.625Z"
				fill={fill}
			/>
		</svg>
	);
};

export const SnsKakao = ({ width, height, fill }: SVGProps<SVGAElement>) => {
	return (
		<svg
			width={width}
			height={height}
			fill={fill}
			viewBox="0 0 42 43"
			xmlns="http://www.w3.org/2000/svg"
			xlinkHref="http://www.w3.org/1999/xlink"
		>
			<circle cx="21" cy="21.7168" r="21" fill="#FFE200" />
			<circle cx="21" cy="21.7168" r="21" fill="url(#pattern0)" />
			<defs>
				<pattern
					id="pattern0"
					patternContentUnits="objectBoundingBox"
					width="1"
					height="1"
				>
					<use
						xlinkHref="#image0_3_1942"
						transform="translate(0.135513 0.135513) scale(0.00182243)"
					/>
				</pattern>
				<image
					id="image0_3_1942"
					width="400"
					height="400"
					xlinkHref="data:image/jpeg;base64,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gQCERehUg4Ct5vQn0wOWDqJpPocB4FDnw3i1OfA1dzc4AJIADkoLb5dE5qPjNsaAz2H8ZCUIUugYXT5cy2eT7BPZqdN3TaNx7iiF3sD54DRKlz4d0A9oH1wNXc3OJlMplm2w7sHBe4tP+rT/AKiCMguQAYsgEA4IYhHIS6yYZIT2anTd02hBCCQYmuTtSs7ig41ThwErStBQLr0JEInB+hdMRvkKWn3kffDFKHdQyAkAxEDv6u5ucUPv2hm+/JWHqT9uyE9mp03dNoWo02Fmza90igQQCC4KhFPG3sinDqY33jdAgA5MAEAVLsgbiNSG6fi8vv6u5t4kl3rFCQYPCCBaRjkDNloT2tCe1oT2oOlMKBzUrG4RCbIP2ZEfEJ7JxXFMLTftab9o9PEn4dyyeYIVAxBWm0LUabWSFY2g2yPEAZ/xuuSH6fi+cWZ8fWSz877bBDjAmRHhGwbDlgEBcifUBhkEBjBIVFqBTLaUsaI7YjycBpaU3S9FIAmtoIQ8wnxaBE5UUz6QRYah57jjjgwgKAScAJp3wthNAYIS6apsBnwRSYocxchnw2lFmsJgofGWcbAuQysjiRbIbpImH0xPNu3FBPEldenCz8+GM9xwsGiX9Qvv4xo6i0KWenb8M0d4I0t9O/HBeFcSIR9HimKYj8EbiwTFMSgixQFg5CHK8RzrKqnNgVF3P1W5sCpuQ7HaNrW5KACwsS+Iz3syKi7nTfeyAqblCBYWamHKULgzflynZdJ8c3Ka3JXVyCfl3LTEBINWuHVccySteGqykKC5kbwOWWRanQApjXL5yolUsDor0UrXYSwWc5EiQIchyQNNUgDkpnB1i13ZMLHsIMPp0AAGAYDnWpL+FDm/GeSKgCYXANrLuUxG3gPgQzTLQ75RzWOExj15+Q32EIoLkcneiYonZe1foJ4VSVNiagAp70BeCjVDXVCpOqqk/UN5KzYkCUxHUY/Daw5ImfGe7Ka0BVsYfmU8iD/H/AHfcOAmlRwLUy46bHFP5rGFyPAQGQ2SAFgVeBHlaBAABgGA/NPMwYmhnsCm1QzwWqCcVZjn88PM4VaCn+iFywzGqAAAAQAFn/KH/9oADAMBAAIAAwAAABD33333333333333333333333333333333333333333333333333333333333333333333333333333333333333HzH333333333333333333G0BIAACIB3H333333333333nwAAAAAAAAAADzX333333333wIAAAAAAAAAAAAALz3333333nMAAAAAAAAAAAAAADPX3333338AAAAAAAAAAAAAAAAD/wB99999qA0887D5AC7AAVAUiAW99999pCAjm6jMwMX9AAVCVCACV9999rAAAXqGSQ2X9AAWPpAAAX9999pCAAXqX8Ocd9AAFBeBAC999999CAAQtdjyxx4z0dAfDAW999999tAAACCAAACAAACAACAE999999vJAAAAAAAAAAAAAAAd/wDfffffffBAAAAAAAAAAAAABnPfffffffffTggAAAAAAAABlPffffffffffffQwAAAAACCVr/ffffffffffffbowAxzTzX/AH333333333333333kEL7333333333333333333332d/33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333/8QAIhEBAAIBBAIDAQEAAAAAAAAAAQARMRAgITBBYUBRcWCB/9oACAEDAQE/EP5ZLLPeQbD8MS1hGE8pFOXYIwzykJwglj24lfEorepFZL+Jz1ALYvAx3KqcQBZ02KMfAsU46OAefhcg8b790sDWmviOQnHURI6A99f9umdhDoNK93Ok64RlcWIKPmKlLOVglpH20zakemQD7iK3V2Hbk2mH90Dkgid1WmbXBAoogD8tmDabDaYf2U8AUz1wAKJfkzakP7E/YiVxqaDdfmpAuBQlefuWVHE9kqScylPuBLueogA8pmXpYSIsZ0rzfwDx8LmHnosWY+BYtx0gKYqsx3KrcQBR1Jcv5lFT1IqJXzIV23DvE4J4SEZQWh3WDqhxDPcUyT1oBg+FVX7mZbzIAUfGQKn7n87/AP/EACoRAQABAgUCBgMBAQEAAAAAAAERACExQVFhcZGhECAwgcHwQLHR4WDx/9oACAECAQE/EP8AlQVgrE5wn4r6V8VgM5R8UiMP4UqT2P3ke9Fgjpc9cD2moGZ9VPax2oGA4AfryAwHIH91gM+qjtc7UWiOlj1wfeKlSe5+sn29UwMrgFDjQ04+7lwX3KNlDIPvX0nZUyT71odaGvH2c+G+7TgYTEfSwwwAo3EmLkbf1i7F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"
				/>
			</defs>
		</svg>
	);
};

export const SnsNaver = ({ width, height, fill }: SVGProps<SVGAElement>) => {
	return (
		<svg
			width={width}
			height={height}
			fill={fill}
			viewBox="0 0 42 43"
			xmlns="http://www.w3.org/2000/svg"
			xlinkHref="http://www.w3.org/1999/xlink"
		>
			<circle cx="21" cy="21.7168" r="21" fill="#03c75a" />
			<circle cx="21" cy="21.7168" r="21" fill="url(#pattern0)" />
			<defs>
				<pattern
					id="pattern0"
					patternContentUnits="objectBoundingBox"
					width="1"
					height="1"
				>
					<use xlinkHref="#image0_3_1943" transform="scale(0.00333333)" />
				</pattern>
				<image
					id="image0_3_1943"
					width="300"
					height="300"
					xlinkHref="data:image/png;base64,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"
				/>
			</defs>
		</svg>
	);
};

export const SnsGoogle = ({ width, height, fill }: SVGProps<SVGAElement>) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xlinkHref="http://www.w3.org/1999/xlink"
			width={width}
			height={height}
			fill={fill}
		>
			<g filter="url(#a)">
				<circle cx="24" cy="21.717" r="21" fill="#fff" />
				<circle cx="24" cy="21.717" r="21" fill="url(#b)" />
			</g>
			<defs>
				<pattern
					id="b"
					width="1"
					height="1"
					patternContentUnits="objectBoundingBox"
				>
					<use xlinkHref="#c" transform="matrix(.00284 0 0 .00284 .185 .178)" />
				</pattern>
				<filter
					id="a"
					width="47.2"
					height="47.2"
					x=".4"
					y=".117"
					color-interpolation-filters="sRGB"
					filterUnits="userSpaceOnUse"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						result="hardAlpha"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					/>
					<feOffset dy="2" />
					<feGaussianBlur stdDeviation="1.3" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix values="0 0 0 0 0.548503 0 0 0 0 0.734413 0 0 0 0 1 0 0 0 0.08 0" />
					<feBlend
						in2="BackgroundImageFix"
						result="effect1_dropShadow_3_1944"
					/>
					<feBlend
						in="SourceGraphic"
						in2="effect1_dropShadow_3_1944"
						result="shape"
					/>
				</filter>
				<image
					xlinkHref="data:image/png;base64,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"
					id="c"
					width="222"
					height="227"
				/>
			</defs>
		</svg>
	);
};

export const Bookmark = ({ width, height, fill }: SVGProps<SVGAElement>) => {
	return (
		<svg
			width={width}
			height={height}
			fill="none"
			viewBox="0 0 16 20"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="fill_mark 1" clipPath="url(#clip0_89_10154)">
				<path
					id="Vector"
					d="M8.93613 14.1814L8.9361 14.1814C8.36528 13.785 7.63473 13.785 7.0639 14.1814L7.06387 14.1814L1.08053 18.3366C1.03782 18.3662 1.01216 18.3678 1.0007 18.3677C0.985585 18.3675 0.958368 18.3627 0.922386 18.3385C0.849927 18.2899 0.75 18.1622 0.75 17.9394V1.17647C0.75 1.02191 0.803507 0.901894 0.864348 0.830316C0.923832 0.760335 0.974393 0.75 1 0.75H15C15.0256 0.75 15.0762 0.760338 15.1357 0.830314C15.1965 0.901888 15.25 1.0219 15.25 1.17647V17.9394C15.25 18.1622 15.1501 18.2899 15.0776 18.3385C15.0416 18.3627 15.0144 18.3675 14.9993 18.3677C14.9879 18.3678 14.9622 18.3662 14.9195 18.3366L14.4917 18.9526L14.9195 18.3366L8.93613 14.1814Z"
					fill={fill}
					stroke="#7FACFF"
					stroke-width="1.5"
				/>
			</g>
			<defs>
				<clipPath id="clip0_89_10154">
					<rect width="16" height="20" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};

export const Heart = ({ width, height, fill }: SVGProps<SVGAElement>) => {
	return (
		<svg
			width="12"
			height="12"
			fill="none"
			viewBox="0 0 10 10"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="heart full">
				<path
					id="Vector"
					d="M4.95234 7.29112L4.95125 7.29016C3.97017 6.42826 3.21796 5.76523 2.70198 5.15407C2.19381 4.55216 2 4.0971 2 3.66469C2 2.98214 2.54914 2.4165 3.3125 2.4165C3.61151 2.4165 3.90902 2.51122 4.15576 2.67622C4.65881 3.01261 5.34119 3.01261 5.84424 2.67622C6.09098 2.51122 6.38849 2.4165 6.6875 2.4165C7.45086 2.4165 8 2.98214 8 3.66469C8 4.09712 7.80619 4.5522 7.29786 5.15472C6.78185 5.76633 6.02983 6.43005 5.04898 7.29358C5.04871 7.29383 5.04843 7.29407 5.04815 7.29432L5.00188 7.33481L4.95234 7.29112Z"
					fill={fill}
					stroke="#EE5C5C"
					strokeWidth="1.5"
				/>
			</g>
		</svg>
	);
};

export const Viewer = ({ width, height, fill }: SVGProps<SVGAElement>) => {
	return (
		<svg
			width="12"
			height="12"
			fill="none"
			viewBox="0 0 12 12"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="eyes">
				<path
					id="Vector"
					d="M6 3.5C4.45275 3.5 2.73565 4.32581 1.87058 5.5639C1.58272 5.97588 1.58272 6.52412 1.87058 6.9361C2.73565 8.17419 4.45275 9 6 9C7.54725 9 9.26435 8.17419 10.1294 6.9361C10.4173 6.52412 10.4173 5.97588 10.1294 5.5639C9.26435 4.32581 7.54725 3.5 6 3.5ZM6 8.08333C4.99636 8.08333 4.18182 7.262 4.18182 6.25C4.18182 5.238 4.99636 4.41667 6 4.41667C7.00364 4.41667 7.81818 5.238 7.81818 6.25C7.81818 7.262 7.00364 8.08333 6 8.08333ZM6 5.15C5.39636 5.15 4.90909 5.64133 4.90909 6.25C4.90909 6.85867 5.39636 7.35 6 7.35C6.60364 7.35 7.09091 6.85867 7.09091 6.25C7.09091 5.64133 6.60364 5.15 6 5.15Z"
					fill="#808080"
				/>
			</g>
		</svg>
	);
};

export const Comment = () => {
	return (
		<svg
			width="12"
			height="12"
			viewBox="0 0 12 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="chat">
				<path
					id="Vector"
					d="M8.9803 8.12004L8.70107 7.9211C8.63246 8.01737 8.61828 8.14217 8.66359 8.25138L8.9803 8.12004ZM8.11758 8.98208L8.23858 8.6613C8.13175 8.62098 8.01189 8.63652 7.91881 8.70267L8.11758 8.98208ZM9.56402 9.52786L9.44297 9.84864C9.57088 9.89691 9.71524 9.86455 9.81033 9.76635C9.90546 9.66816 9.93312 9.52283 9.88073 9.39652L9.56402 9.52786ZM9.31428 6C9.31428 6.71666 9.08722 7.37925 8.70107 7.9211L9.25952 8.31904C9.72571 7.66487 10 6.86395 10 6H9.31428ZM6 2.68571C7.83044 2.68571 9.31428 4.16957 9.31428 6H10C10 3.79086 8.20914 2 6 2V2.68571ZM2.68571 6C2.68571 4.16957 4.16957 2.68571 6 2.68571V2C3.79086 2 2 3.79086 2 6H2.68571ZM6 9.31428C4.16957 9.31428 2.68571 7.83044 2.68571 6H2C2 8.20914 3.79086 10 6 10V9.31428ZM7.91881 8.70267C7.37737 9.08786 6.71566 9.31428 6 9.31428V10C6.86272 10 7.66263 9.72649 8.3163 9.26144L7.91881 8.70267ZM9.68507 9.20708L8.23858 8.6613L7.99652 9.30286L9.44297 9.84864L9.68507 9.20708ZM8.66359 8.25138L9.24731 9.6592L9.88073 9.39652L9.297 7.98875L8.66359 8.25138Z"
					fill="#808080"
				/>
			</g>
		</svg>
	);
};
