export default {
  name: "brands",
  title: "Brands",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "imgUrl",
      title: "ImgURL",
      type: "image",
      option: {
        hotspot: true,
      },
    },
  ],
};
