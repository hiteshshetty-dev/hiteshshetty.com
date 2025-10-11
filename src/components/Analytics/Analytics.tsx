import Script from "next/script";

const Analytics = () => {
  return (
    <Script
      defer
      src="https://cloud.umami.is/script.js"
      data-website-id="cd0b50a8-b74f-4f8c-96ca-440421507e56"
    />
  );
};

export default Analytics;
