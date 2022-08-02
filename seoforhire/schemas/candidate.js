export default {
  name: "candidate",
  title: "Candidate",
  type: "document",

  fields: [
    {
      name: "candidaterole",
      title: "Role",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "candidaterole",
        maxLength: 96,
      },
    },
    {
      name: "jobid",
      title: "JobId",
      type: "string",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "experience",
      title: "Experience",
      type: "string",
    },
    {
      name: "salary",
      title: "Salary",
      type: "string",
    },
    {
      name: "specialism",
      title: "Specialism",
      type: "string",
    },
    {
      name: "about",
      title: "About",
      type: "blockContent",
    },
  ],
};
