import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::game.game",
  ({ strapi }) => ({
    async populate(ctx) {
      // console.log("RODANDO NO SERVIDOR");
      const options = {
        limit: 48,
        order: "desc:trending",
        ...ctx.query,
      };

      // console.log(ctx.query);
      // await strapi.service("api::game.game").populate(ctx.query);
      await strapi.service("api::game.game").populate(options);

      // ctx.send("FINALIZADO NO CLIENT");
      ctx.send("Finished populating games!");
    },
  })
);
