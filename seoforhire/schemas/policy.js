export default {
  name: "policy",
  title: "Policy",
  type: "document",
  fields: [
    {
      name: "title",
      description: "Keep titles short",
      title: "Title",
      type: "string",
    },

    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],
};
