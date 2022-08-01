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
      type: "text",
    },
    {
      name: "requirments",
      title: "Requirments",
      type: "text",
    },
    {
      name: "benefits",
      title: "Benefits",
      type: "text",
    },
  ],
};
