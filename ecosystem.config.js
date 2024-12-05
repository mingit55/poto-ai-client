require('dotenv').config();
module.exports = {
  apps: [
    {
      name,
      script: "./.output/server/index.mjs",
      env: {
        PORT: process.env.PORT,
      },
    },
  ],
};
