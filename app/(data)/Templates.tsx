export default [
  {
    name: "Youtube SEO Title",
    desc: "An AI tool that Generate blog title depends on your blog information",
    category: "Youtube Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/400/400426.png",
    aiPrompt:
      "Give me 5 blog idea in bullet wise only based on give niche & Outline topic give me result in Rich text editor format",
    slug: "Youtube-Seo-Title",
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
    icon: "https://cdn-icons-png.flaticon.com/128/3161/3161837.png",
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
  }
]