export default {
  components: true, // not necessary to import and define components anymore
  head: {
    // global meta
    titleTemplate: "NuxtBnB: %s",
    htmlAttrs: {
      lang: "en"
    },
    bodyAttrs: {
      class: ["my-style"]
    },
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }
    ]
  }
}
