export default [
  {
    name: "Blog Title",
    desc: "An AI tool that Generate blog title depends on your blog information",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4186/4186534.png",
    aiPrompt:
      "Give me 5 blog idea in bullet wise only based on give niche & Outline topic give me result in Rich text editor format",
    slug: "Generate Blog Title",
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
    name: "Blog Content",
    desc: "An AI tool that Generate blog Content depends on your blog Title",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/2593/2593549.png",
    aiPrompt:
      "Give me 5 blog idea in bullet wise only based on give niche & Outline topic give me result in Rich text editor format",
    slug: "Generate Blog Content",
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
    name: "Blog Topic Ideas",
    desc: "An AI tool that Generate blog title depends on your blog information",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/2593/2593549.png",
    aiPrompt:
      "Give me 5 blog idea in bullet wise only based on give niche & Outline topic give me result in Rich text editor format",
    slug: "Generate-topic-ideas ",
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
    name: "Youtube SEO Title",
    desc: "An AI tool that Generate blog title depends on your blog information",
    category: "Youtube Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/10884/10884883.png",
    aiPrompt:
      "Give me 5 blog idea in bullet wise only based on give niche & Outline topic give me result in Rich text editor format",
    slug: "youtube-seo-title",
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
    name: "Youtube Tags",
    desc: "An AI tool that Generate blog title depends on your blog information",
    category: "Youtube Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/10884/10884883.png",
    aiPrompt:
      "Give me 5 blog idea in bullet wise only based on give niche & Outline topic give me result in Rich text editor format",
    slug: "youtube-tag",
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
];
