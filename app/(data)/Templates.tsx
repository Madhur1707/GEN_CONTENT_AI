export default [
  {
    name: "Welcome Email Generator",
    desc: "Create personalized welcome emails for new subscribers.",
    category: "Email Marketing Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/18091/18091020.png",
    aiPrompt:
      "Generate a welcoming email for new [subscribers/customers] joining [platform or service].",
    slug: "Welcome-Email-Generator",
    form: [
      {
        label: "Enter Platform/Service Name",
        field: "input",
        name: "platform",
        required: true,
      },
      {
        label: "Enter Key Features/Benefits",
        field: "textarea",
        name: "features",
      },
    ],
  },
  {
    name: "Cold Email Generator",
    desc: "Create personalized cold emails for Services.",
    category: "Email Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/3829/3829119.png",
    aiPrompt:
      "Generate a personalized cold email for [target audience] with [product/service].",
    slug: "Cold-Email-Generator",
    form: [
      {
        label: "Enter Product/Service",
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
  {
    name: "LinkedIn Post Generator",
    desc: "Generate professional LinkedIn posts to boost engagement.",
    category: "LinkedIn Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/174/174857.png",
    aiPrompt:
      "Create a professional LinkedIn post about [topic] with key insights and calls-to-action.",
    slug: "LinkedIn-Post-Generator",
    form: [
      {
        label: "Enter Post Topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter Key Points or Takeaways",
        field: "textarea",
        name: "keypoints",
      },
    ],
  },
  {
    name: "Youtube SEO Title",
    desc: "Create SEO-friendly titles for your YouTube videos.",
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
    desc: "Generate code snippets based on your input.",
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
    desc: "Create catchy taglines for your brand or business.",
    category: "Branding Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/17130/17130709.png",
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
    desc: "Generate blog content using your niche and outline.",
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
    desc: "Create attention-grabbing headlines for landing pages.",
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
    desc: "Generate optimized YouTube tags for better reach.",
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
    desc: "Generate creative Instagram post ideas.",
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
];
