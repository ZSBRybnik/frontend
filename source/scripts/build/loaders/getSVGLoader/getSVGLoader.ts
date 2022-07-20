const getSVGLoader = () => {
  return {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
    options: { babel: false },
  };
};

export default getSVGLoader;
