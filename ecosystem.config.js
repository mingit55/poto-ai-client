require('dotenv').config();
module.exports = {
  apps: [
    {
      name: 'ai.zzik-da.site',
      script: "./.output/server/index.mjs",
      env: {
        PORT: process.env.PORT,
      },
    },
  ],
};
