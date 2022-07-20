const getSVGLoader = () => {
  return {
    test: /\.svg$/,
    use: [
      {
        loader: "@svgr/webpack",
        options: { babel: false, typescript: true, ext: "tsx" },
      },
    ],
  };
};

export default getSVGLoader;
