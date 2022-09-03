export default {
  name: "funel",
  title: "Job Funnel",
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
      name: "employer_name",
      title: "Employer Name",
      type: "string",
    },
    {
      name: "employer_company",
      title: "Employer Company",
      type: "string",
    },

    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "letter",
      title: "Letter",
      type: "blockContent",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],
};
