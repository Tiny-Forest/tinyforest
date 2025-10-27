// Configuration file for Tiny Forest website
// Update videos and images here

export const siteConfig = {
  // Company Information
  company: {
    name: "Tiny Forest",
    tagline: "Invest in Nature, Grow Your Wealth",
    description: "Tiny Forest buys and nurtures land, plants premium trees, and ensures sustainable growth for you.",
    phone: ["+880123456789", "+880987654321"],
    whatsappUrl: "https://wa.me/880123456789",
    email: "needhelp@company.com",
    address: {
      line1: "No 12 MG Road,",
      line2: "Near Rockfort Temple,",
      line3: "Tiruchirappalli - 620001,",
      line4: "Tamil Nadu, India"
    },
    logo: "/logo.png", // Logo is now in the public folder
  },

  // Hero Section
  hero: {
    subtitle: "Original & Natural",
    titleHighlight: "Invest in Nature,",
    title: "Grow Your Wealth",
    description: "Tiny Forest buys and nurtures land, plants premium trees, and ensures sustainable growth for you.",
    videoUrl: "/banner_video.mp4",
    backgroundImage: "Farm Land"
  },

  // How It Works Section
  howItWorks: {
    label: "About Us",
    title: "Tiny Forest is a meticulously planned eco-community",
    description: "See how Tiny Forest transforms land into thriving, sustainable forests while helping you grow your investment—step by step.",
    content:"Tiny Forest located near Panjapur and Archampatti. Focused on a Sustainable Agroforestry Life Style. Its core mission is to promote health and wellness by seamlessly integrating organic farming and the cultivation of native trees to create a harmonious, chemical-free environment. Covering 7 Acres with 27 plots in panjapur and 6 Acres with 20 plots in archmpatti it provides an opportunity to build a farmhouse or regenerative retreat, offering residents a disease-free, less-crowded way of life rooted in pure soil. The project is guided by multidisciplinary experts in agronomy, soil science, and environmental engineering to ensure a sound investment in green living and a sustainable future. multidisciplinary experts in agronomy, soil science, and environmental engineering to ensure a sound investment in green living and a sustainable future.",
    stats: {
      number: "100+",
      text: "Land transaction completed"
    },
  },

  // Video Sections
 videoSections: [
  {
    title: "Archampatti Site Overview",
    description:
      "See how Tiny Forest developed its Archampatti farmland into a lush ecosystem.",
    youtubeUrl: "https://www.youtube.com/embed/JrB0mhLTbI0",
    videoThumbnail: "/archampatti_thumb.jpg",
    steps: [
      {
        icon: "CircleDot",
        title: "Sustainable Eco-Community:",
        description: "Its vision is to establish a Sustainable Agroforestry Community dedicated to fostering ecological balance, health, and a high quality of life for its residents."
      },
      {
        icon: "Trees",
        title: "Vision and Focus:",
        description: " Its vision is to establish a Sustainable Agroforestry Community dedicated to fostering ecological balance, health, and a high quality of life for its residents."
      },
      {
        icon: "Droplets",
        title: "Health and Wellness Objective:",
        description: " A core objective is to promote health and wellness by producing safe, chemical-free food and cultivating an environment that supports disease-free, healthy living."
      },
      {
        icon: "TrendingUp",
        title: "Scale and Layout:",
        description: "The project offers a meticulously planned environment across 7 Acres with 27 Plots, providing endless greenery and a lifestyle specifically designed to be free from overcrowding."
      }
    ]
  },
  {
    title: "Panjappur Project Development",
    description:
      "Watch the transformation of the Panjappur site into a thriving green farm.",
    youtubeUrl: "https://www.youtube.com/embed/oC4T3Y0hp5c",
    videoThumbnail: "/panjappur_thumb.jpg",
    steps: [
      {
        icon: "CircleDot",
        title: "Sustainable Eco-Community:",
        description: "Tiny Forest is a carefully designed ecological neighborhood that perfectly combines organic farming, growing native trees, and a natural lifestyle to establish a balanced and long-lasting environment."
      },
      {
        icon: "Trees",
        title: "Vision and Focus:",
        description: " The community's goal is to create a Sustainable Agro forestry Community focused on promoting ecological harmony, boosting health, and ensuring a high standard of living for everyone who resides there."
      },
      {
        icon: "Droplets",
        title: "Health and Wellness Objective:",
        description: " The main purpose is to improve health and overall well-being by cultivating safe, chemical-free food and building a setting that encourages a disease-free, healthy way of life."
      },
      {
        icon: "TrendingUp",
        title: "Scale and Layout:",
        description: "The development covers 6 Acres and contains 20 meticulously planned plots, offering abundant greenery and a living situation intentionally structured to avoid feeling crowded."
      }
    ]
  },
],
youtube: {
  channelUrl: "https://www.youtube.com/@TinyForestGardens", // Replace with your real channel link
},
  // Why Choose Section
  whyChoose: {
    label: "IMPORTANT NOTE",
    title: "Why Choose Tiny Forest",
    reasons: [
      {
        title: "Sustainable investment in nature",
        image: "/sustainable_investment.png"
      },
      {
        title: "Expert soil and tree care",
        image: "/soil_tree.png"
      },
      {
        title: "Transparent growth tracking",
        image: "/transparent_growth.png"
      },
      {
        title: "Potential financial returns",
        image: "/potential_finance.png"
      }
    ]
  },

  // Testimonials
  testimonials: {
    label: "OUR TESTIMONIALS",
    title: "WHAT THEY'RE TAKING ABOUT",
    items: [
      {
        name: "Karthik",
        role: "Businessman",
        image: "/picture.png",
        quote: "I love this place very much"
      },
      {
        name: "Senthil Murugan",
        role: "Doctor",
        image: "/mango.png",
        quote: "best place to live"
      },
      {
        name: "Alvanthan",
        role: "Scientist",
        image: "/neem.png",
        quote: "They are giving quality of water, land and air"
      }
    ]
  },

  // High Quality Farms Section
  highQualityFarms: {
    label: "GROWING FORESTS, RESTORING NATURE, AND OFFSETTING CARBON",
    title: "Providing High Quality Farms",
    features: [
      {
        icon: "TrendingUp",
        title: "Trees Planted",
        description: "Over 35 hand-picked trees nurtured across India, creating thriving mini-forests."
      },
      {
        icon: "Sprout",
        title: "Land Restored",
        description: "50 acres of underutilized farmland transformed into sustainable, flourishing forests."
      },
      {
        icon: "Target",
        title: "Carbon Offset",
        description: "Committed to reducing environmental impact, absorbing CO2 for a greener future."
      }
    ]
  },
  
  // Tree Selection
  trees: {
    label: "35+ TREES",
    title: "Tree selected by us",
    items: [
      {
        name: "Neem",
        description: "Known as the \"village pharmacy,\" neem is native to India and has medicinal properties. Its leaves, bark, and seeds are used in traditional medicine, and it is also valued for shade and soil improvement.",
        extra:"Extra information",
        image: "/neem.png"
      },
      {
        name: "Mango",
        description: "Mango trees are tropical evergreens famous for their delicious fruit. They can grow very large and provide ample shade. Mango wood is also used in furniture and crafts.",
         extra:"Extra information",
        image: "/mango.png"
      },
      {
        name: "Peepal",
        description: "Considered sacred in India, the peepal tree is known for its heart-shaped leaves. It is revered in religious traditions and provides a large canopy that supports local wildlife.",
         extra:"Extra information",
        image: "/peepal.png"
      },
      {
        name: "Teak",
        description: "Teak is a hardwood tree known for its durable, water-resistant wood used in South and Southeast Asia. It is used in furniture, shipbuilding, and building.",
         extra:"Extra information",
        image: "/teak.png"
      },
      {
        name: "Neem",
        description: "Known as the \"village pharmacy,\" neem is native to India and has medicinal properties. Its leaves, bark, and seeds are used in traditional medicine, and it is also valued for shade and soil improvement.",
        extra:"Extra information",
        image: "/neem.png"
      },
      {
        name: "Neem",
        description: "Known as the \"village pharmacy,\" neem is native to India and has medicinal properties. Its leaves, bark, and seeds are used in traditional medicine, and it is also valued for shade and soil improvement.",
        extra:"Extra information",
        image: "/neem.png"
      },{
        name: "Neem",
        description: "Known as the \"village pharmacy,\" neem is native to India and has medicinal properties. Its leaves, bark, and seeds are used in traditional medicine, and it is also valued for shade and soil improvement.",
        extra:"Extra information",
        image: "/neem.png"
      },
      {
        name: "Neem",
        description: "Known as the \"village pharmacy,\" neem is native to India and has medicinal properties. Its leaves, bark, and seeds are used in traditional medicine, and it is also valued for shade and soil improvement.",
        extra:"Extra information",
        image: "/neem.png"
      },
      {
        name: "Neem",
        description: "Known as the \"village pharmacy,\" neem is native to India and has medicinal properties. Its leaves, bark, and seeds are used in traditional medicine, and it is also valued for shade and soil improvement.",
        extra:"Extra information",
        image: "/neem.png"
      },
      {
        name: "Neem",
        description: "Known as the \"village pharmacy,\" neem is native to India and has medicinal properties. Its leaves, bark, and seeds are used in traditional medicine, and it is also valued for shade and soil improvement.",
        extra:"Extra information",
        image: "/neem.png"
      },
      {
        name: "Neem",
        description: "Known as the \"village pharmacy,\" neem is native to India and has medicinal properties. Its leaves, bark, and seeds are used in traditional medicine, and it is also valued for shade and soil improvement.",
        extra:"Extra information",
        image: "/neem.png"
      },
      {
        name: "Neem",
        description: "Known as the \"village pharmacy,\" neem is native to India and has medicinal properties. Its leaves, bark, and seeds are used in traditional medicine, and it is also valued for shade and soil improvement.",
        extra:"Extra information",
        image: "/neem.png"
      }
    ]
  },

  // Contact Form
  contact: {
    label: "CONTACT NOW",
    title: "GET IN TOUCH NOW",
    description: "Lorem ipsum dolor sit amet, adipiscing elit. In hac habitasse platea dictumst. Duis porta, quam ut finibus ultricies.",
    formFields: {
      name: "Your Name",
      phone: "Phone Number",
      email: "Your Email",
      message: "Your Message"
    },
    submitButton: "SEND MESSAGE"
  },

  // CTA Banner
  ctaBanner: {
    text: "We are Leader in Agriculture Market",
    buttonText: "DISCOVER MORE"
  }
};
