export default {
  name: "funel",
  title: "Funel",
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
      name: "videourl",
      title: "Video Url",
      type: "string",
      description:
        "url must look like https://player.vimeo.com/video/419659699",
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
      name: "checkbox1",
      title: "Checkbox",
      type: "string",
    },
    {
      name: "checkbox2",
      title: "Checkbox",
      type: "string",
    },
    {
      name: "checkbox3",
      title: "Checkbox",
      type: "string",
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
