export default {
  //the identifier for the schema used in api's
  name: "testimonials",
  //This is the display name for the schema
  title: "Testimonials",
  //Documents have the type 'document'. there will be different types we'll see
  type: "document",

  //These are the list of fields of our document
  fields: [
    {
      //identifier
      name: "name",
      //Display Name
      title: "Name",
      //the type of field
      type: "string",
    },
    {
      name: "company",
      title: "Company",
      type: "string",
    },
    {
      name: "imageurl",
      title: "ImgURL",
      type: "image",
      options: {
        // this crops the image
        hotspot: true,
      },
    },
    {
      name: "feedback",
      title: "Feedback",
      type: "string",
    },
  ],
};
