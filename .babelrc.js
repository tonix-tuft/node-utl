const plugins = [
  "@babel/plugin-proposal-object-rest-spread",
  "@babel/plugin-proposal-class-properties",
  // , [
  //   "@babel/plugin-transform-runtime",
  //   {
  //     "corejs": false,
  //     "regenerator": true
  //   }
  // ]
];

module.exports = {
  env: {
    dist: {
      presets: [
        [
          "@babel/preset-env",
          {
            targets: {
              node: "6.10",
            },
          },
        ],
      ],
      plugins,
    },
    es6: {
      presets: [
        [
          "@babel/preset-env",
          {
            targets: {
              node: "6.10",
            },
            modules: false,
          },
        ],
      ],
      plugins,
    },
  },
  sourceMaps: true,
};
