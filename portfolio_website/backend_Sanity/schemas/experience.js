export default {
  name: "experiences",
  title: "Experiences",
  type: "document",
  fields: [
    {
      name: "year",
      title: "Year",
      type: "string",
    },
    {
      name: "works",
      title: "Works",
      type: "array",
      //when we use type array, we hva to have a obj member 'of' which contains the
      //array of reference schema.
      of: [{ type: "workExperience" }],
    },
  ],
};
