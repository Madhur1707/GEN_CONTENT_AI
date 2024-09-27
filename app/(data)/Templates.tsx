export default [
  {
    name: "Youtube SEO Title",
    desc: "Generate youtube seo title depends on your video information",
    category: "Youtube Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/400/400426.png",
    aiPrompt:
      "Give me some titles for my video which is suitable according youtube seo.",
    slug: "Youtube-Seo-Title",
    form: [
      {
        label: "Enter Your Video niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter video Outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Code Generator",
    desc: "An AI tool that generates code snippets based on your specifications.",
    category: "Development Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/7069/7069896.png",
    aiPrompt:
      "Generate a code snippet in [programming language] based on the following requirements: [specifications].",
    slug: "Code-Generator",
    form: [
      {
        label: "Enter Programming Language",
        field: "input",
        name: "language",
        required: true,
      },
      {
        label: "Enter Code Requirements",
        field: "textarea",
        name: "requirements",
        required: true,
      },
    ],
  },
  {
    name: "Tagline Generator",
    desc: "Generates creative taglines for your brand or business.",
    category: "Branding Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/12472/12472467.png",
    aiPrompt:
      "Generate 5 catchy taglines for a [business type] that target [audience].",
    slug: "Tagline-Generator",
    form: [
      {
        label: "Enter Business Type",
        field: "input",
        name: "business",
        required: true,
      },
      {
        label: "Enter Target Audience",
        field: "input",
        name: "audience",
        required: true,
      },
    ],
  },
  {
    name: "Blog Generator",
    desc: "Generates blog content based on your niche and outline.",
    category: "Content Creation Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/3669/3669967.png",
    aiPrompt:
      "Generate a blog post in [niche] based on the following outline: [outline].",
    slug: "Blog-Generator",
    form: [
      {
        label: "Enter Blog Niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter Blog Outline",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Landing Page Headline",
    desc: "Generates attention-grabbing headlines for landing pages.",
    category: "Landing Page Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/7624/7624299.png",
    aiPrompt:
      "Generate 3 compelling headlines for a landing page targeting [audience] for [product/service].",
    slug: "Landing-Page-Headline-Generator",
    form: [
      {
        label: "Enter Product/Service",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter Target Audience",
        field: "input",
        name: "outline",
        required: true,
      },
    ],
  },

  {
    name: "Youtube Tags",
    desc: "Generate youtube tags depends on your video description information",
    category: "Youtube Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/10884/10884883.png",
    aiPrompt:
      "Give me 5 youtube tags that helps me to better reach to audience related with tags",
    slug: "Youtube-Tag",
    form: [
      {
        label: "Enter Your Tag niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter Youtube Tag Outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Instagram Post",
    desc: "An AI tool that Generate Instagram Post depends on your information",
    category: "Instagram Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/733/733558.png",
    aiPrompt:
      "Give me 5 blog idea in bullet wise only based on give niche & Outline topic give me result in Rich text editor format",
    slug: "Insta-Post",
    form: [
      {
        label: "Enter Your Blog niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter Blog Outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Product Description Generator",
    desc: "Generates product descriptions for e-commerce or landing pages.",
    category: "E-commerce Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/3502/3502601.png",
    aiPrompt:
      "Generate a product description for a [product] that appeals to [target audience] and highlights [product type].",
    slug: "Product-Description-Generator",
    form: [
      {
        label: "Enter Product Name",
        field: "input",
        name: "product",
        required: true,
      },
      {
        label: "Enter Target Audience",
        field: "input",
        name: "audience",
        required: true,
      },
    ],
  },
];
