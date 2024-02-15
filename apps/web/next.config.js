/** @type {import('next').NextConfig} */
module.exports = {
	transpilePackages: ["@repo/ui"],
	images: {
		domains: ["assets.example.com", "13.209.16.46"], // 여기에 호스트네임 추가
		remotePatterns: [
			{
				protocol: "http",
				hostname: "assets.example.com",
				port: "",
				pathname: "http://13.209.16.46:8090/**",
			},
		],
	},
	experimental: {
		missingSuspenseWithCSRBailout: false,
	},
};
