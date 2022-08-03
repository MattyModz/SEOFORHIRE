export default {
  name: "job",
  title: "Job",
  type: "document",
  fields: [
    {
      name: "title",
      title: "JobTitle",
      type: "string",
    },
    {
      name: "slug",
      description: "uses hyphens between words '-' ",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "term",
      description: "Full time, part time..",
      title: "Term",
      type: "string",
    },
    {
      name: "salary",
      title: "Salary",
      type: "string",
    },
    {
      name: "about",
      title: "About",
      type: "blockContent",
    },
    {
      name: "requirments",
      title: "Requirments",
      type: "blockContent",
    },
    {
      name: "benefits",
      title: "Benefits",
      type: "blockContent",
    },
  ],
};
