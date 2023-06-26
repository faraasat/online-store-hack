import { categoryList, countryList, sizesList } from "@/data";

const productSchema = {
  name: "product",
  title: "products",
  type: "document",
  fields: [
    {
      name: "productId",
      title: "Product Id",
      type: "string",
      description: "Specify Id of the Product",
      validation: (Rule: any) =>
        Rule.required().error("Product Id is Required!"),
    },
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Specify Name of the Product",
      validation: (Rule: any) => Rule.required().error("Name is Required!"),
    },
    {
      name: "productType",
      title: "Product Type",
      type: "string",
      description: "Specify Type of the Product",
      validation: (Rule: any) =>
        Rule.required().error("Product Type is Required!"),
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      description: "Specify Price of the Product",
      validation: (Rule: any) =>
        Rule.required()
          .error("Price is Required!")
          .greaterThan(0)
          .error("Invalid Price!")
          .positive()
          .error("Invalid Price!"),
    },
    {
      name: "quantity",
      title: "Quantity",
      type: "number",
      description: "Specify Quantity of the Product",
      validation: (Rule: any) =>
        Rule.required()
          .error("Quantity is Required!")
          .greaterThan(0)
          .error("Invalid Quantity!")
          .positive()
          .error("Invalid Quantity!"),
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
      description: "Specify Description of the Product",
      options: { spellCheck: true },
      validation: (Rule: any) =>
        Rule.required().error("Description is Required!"),
    },
    {
      name: "brand",
      title: "Brand",
      type: "string",
      description: "Specify Brand Name of the Product",
      validation: (Rule: any) => Rule.required().error("Brand is Required!"),
    },
    {
      name: "origin",
      title: "Origin",
      type: "string",
      description: "Select the Origin Country of the Product",
      options: { layout: "dropdown", list: countryList },
      validation: (Rule: any) => Rule.required().error("Origin is Required!"),
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "string" }],
      description: "Check one or more related Categories of the Product",
      options: { list: categoryList },
      validation: (Rule: any) =>
        Rule.min(1).error("Min 1 Category is Required!"),
    },
    {
      name: "sized",
      title: "Sizes",
      type: "array",
      of: [{ type: "string" }],
      description: "Check one or more related Sizes of the Product",
      options: { list: sizesList },
      // validation: (Rule: any) =>
      //   Rule.min(2).error("Min 2 Sizes are Required!"),
    },
    {
      name: "images",
      title: "Product Images",
      type: "array",
      of: [
        {
          type: "image",
          fields: [
            {
              name: "alt",
              title: "Alt",
              type: "string",
            },
          ],
        },
      ],
      description: "Check one or more related Images of the Product",
      options: { hotspot: true },
      validation: (Rule: any) => Rule.min(1).error("Min 1 Image is Required!"),
    },
  ],
};

export default productSchema;
