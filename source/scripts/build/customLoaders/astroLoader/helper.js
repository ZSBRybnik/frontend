const dynamicImport = () => {
  return import("@astrojs/compiler");
};

module.exports = dynamicImport;
