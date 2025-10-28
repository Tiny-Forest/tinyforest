// Configuration file for Tiny Forest website
// Update videos and images here

import { YouTubeLink } from "@/components/YouTubeLink";

export const siteConfig = {
  // Company Information
  company: {
    name: "Tiny Forest",
    tagline: "Invest in Nature, Grow Your Wealth",
    description: "Tiny Forest buys and nurtures land, plants premium trees, and ensures sustainable growth for you.",
    phone: ["+91 82203 91187", "+91 99946 80316"],
    whatsappUrl: "https://wa.me/918220391187",
    email: "tinyforestgardens@gmail.com",
    Youtubelink: "https://www.youtube.com/@TinyForestGardens",
    address: {
      line1: "Tamil Nadu"
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
        image: "/picture.png",
        quote: "best place to live"
      },
      {
        name: "Alvanthan",
        role: "Scientist",
        image: "/picture.png",
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
        name: "Neem Tree",
        description: "The neem tree has strong medicinal properties and repels pests naturally. It purifies air, provides deep shade, and supports sustainable living.",
        image: "/trees/neem.png"
      },
      {
        name: "Mango",
        description: "The mango tree provides delicious, vitamin-rich fruits. Its shade keeps surroundings cool, and it improves air quality by absorbing carbon dioxide.",
        image: "/trees/mango.png"
      },
      {
        name: "Jackfruit Tree",
        description: "Jackfruit trees produce large, energy-rich fruits and provide timber for durable furniture. They help in soil conservation and add beauty and greenery to the land.",
        image: "/trees/jackfruit.png"
      },
      {
        name: "Banana Tree",
        description: "Banana trees yield nutrient-rich fruits and leaves useful for traditional cooking. They help maintain soil moisture and support biodiversity around them.",
        image: "/trees/banana.png"
      },
      {
        name: "Lemon Tree",
        description: "Lemon trees offer vitamin C-rich fruits used for food and health remedies. Their pleasant aroma purifies air and attracts pollinators like bees.",
        image: "/trees/lemon.png"
      },
      {
        name: "Coconut Tree",
        description: "Coconut water is a natural electrolyte drink. Its oil, fiber, and milk provide healthy fats and antioxidants, supporting livelihoods and preventing erosion.",
        image: "/trees/coconut.png"
      },
      {
        name: "Black Plum Tree",
        description: "The black plum tree offers antioxidant-rich fruits that manage blood sugar and improve digestion. It gives deep shade and purifies air.",
        image: "/trees/black-plum.png"
      },
      {
        name: "Amla Tree",
        description: "The amla tree produces highly medicinal fruits rich in vitamin C. It strengthens soil health and is valuable for traditional Ayurvedic medicine.",
        image: "/trees/amla.png"
      },
      {
        name: "Guava Tree",
        description: "Guava trees yield vitamin-rich fruits that boost immunity. They are hardy, fast-growing, and help improve the soil’s organic content.",
        image: "/trees/guava.png"
      },
      {
        name: "Sapota Tree",
        description: "Sapota trees produce sweet, energy-filled fruits and dense foliage for shade. They help reduce air pollution and enhance the landscape's greenery.",
        image: "/trees/sapota.png"
      },
      {
        name: "Papaya Tree",
        description: "Papaya trees provide vitamin-rich fruits that aid digestion. Their rapid growth and low maintenance make them perfect for eco-friendly farming.",
        image: "/trees/papaya.png"
      },
      {
        name: "Manila Tamarind Tree",
        description: "The Manila tamarind tree offers tangy, protein-rich pods and provides strong shade. It improves soil fertility and supports wildlife habitats.",
        image: "/trees/manila-tamarind.png"
      },
      {
        name: "Soursop Tree",
        description:"Soursop trees bear nutrient-packed fruits known for their medicinal benefits. They enrich the ecosystem by attracting birds and pollinators.",
        image: "/trees/soursop.png"
      },
      {
        name: "Water Apple Tree",
        description: "The water apple tree yields refreshing, water-rich fruits that help in hydration. Its lush foliage adds beauty and supports a cool microclimate.",
        image: "/trees/water-apple.png"
      },
      {
        name: "Indian Jujube Tree",
        description: "The jujube tree produces vitamin-rich fruits and thrives even in dry regions. It provides food for birds and helps in preventing soil erosion.",
        image: "/trees/jujube.png"
      },
      {
        name: "Mandarin Orange Tree",
        description: "Mandarin orange trees produce juicy fruits packed with vitamin C. Their bright foliage purifies air and adds color and fragrance to the land.",
        image: "/trees/mandarin-orange.png"
      },
      {
        name: "Drumstick Tree",
        description: "The Moringa tree yields nutrient-rich \"superfood\" leaves and pods. It grows fast, improves soil fertility, and provides essential vitamins/minerals.",
        image: "/trees/drumstick.png"
      },
      {
        name: "Hummingbird Tree",
        description: "The hummingbird tree offers edible leaves and flowers, is packed with nutrients, enriches soil with nitrogen, and creates a green environment.",
        image: "/trees/hummingbird.png"
      },
      {
        name: "Beleric Tree",
        description: "The beleric tree is valued in traditional medicine for its fruit. It helps purify the air and contributes to ecological balance.",
        image: "/trees/beleric.png"
      },
      {
        name: "Chebulic Myrobalan",
        description: "Its medicinal fruits and decomposing leaves improve soil fertility naturally, supporting biodiversity and enriching land. The tree provides shade and habitat.",
        image: "/trees/chebulic-myrobalan.png"
      },
      {
        name: "Indian Beech Tree",
        description: "The Indian beech tree produces oil-rich seeds for remedies and biofuel. It gives strong shade, supports pollinators, and improves soil fertility.",
        image: "/trees/beech.png"
      },
      {
        name: "Mahua Tree",
        description: "The mahua tree yields flowers and seeds used for food, oil, and medicine. It supports rural livelihoods and helps in maintaining biodiversity.",
        image: "/trees/mahua.png"
      },
      {
        name: "Indian Laurele",
        description: "This tree prevents soil erosion and stabilizes land, especially in coastal areas. Its dense canopy shelters wildlife; seeds yield traditional medicine oil.",
        image: "/trees/laurele.png"
      },
      {
        name: "Arjuna Tree",
        description: "The Arjuna tree's bark is known for heart-healing in traditional medicine. It strengthens riverbanks, prevents soil erosion, and enhances greenery.",
        image: "/trees/arjuna.png"
      },
      {
        name: "Holy Basil",
        description: "Used in herbal medicine, it's a powerful adaptogen that reduces stress and boosts immunity. Organically grown, it repels insects and improves soil health.",
        image: "/trees/basil.png"
      },
      {
        name: "Jasmine",
        description:"Their soothing fragrance calms the mind, refreshes the home, reduces stress, and promotes sleep. Used traditionally for cooling and relieving headaches.",
        image: "/trees/jasmine.png"
      },
      {
        name: "Brinjal",
        description: "Rich in antioxidants and fiber, it supports heart health and helps control blood sugar. Its low calories aid weight management.",
        image: "/trees/brinjal.png"
      },
      {
        name: "Tomato",
        description: "A culinary staple rich in Lycopene, a powerful antioxidant promoting heart health and reducing cancer risk. High Vitamin C boosts immunity.",
        image: "/trees/tomato.png"
      },
      {
        name: "Jackfruit Tree",
        description: "Jackfruit trees produce large, energy-rich fruits and provide timber for durable furniture. They help in soil conservation and add beauty and greenery to the land.",
        image: "/trees/jackfruit.png"
      },
      {
        name: "Lady's Finger",
        description: "High in dietary fiber, this vegetable is excellent for digestion, preventing constipation, aiding weight loss, and managing blood sugar.",
        image: "/trees/lady-finger.png"
      },
      {
        name: "Chilli Pepper",
        description: "Contains Capsaicin, which boosts metabolism and aids pain relief. Used in cooking to add flavour and heat, enhancing appetite.",
        image: "/trees/chilli.png"
      },
      {
        name: "Cluster Beans",
        description: "Good source of fiber, protein, and iron for digestion and anemia. Contains calcium and Vitamin K for bone health.",
        image: "/trees/cluster-beans.png"
      },
      {
        name: "Ridge Gourd",
        description: "Low in calories and high in water, it aids weight management and detoxifies liver and kidneys. Its fiber relieves constipation, improving vision.",
        image: "/trees/ridge-gourd.png"
      },
      {
        name: "Black Nightshade Leaves",
        description: "Traditionally known for anti-ulcer properties, it relieves stomach and mouth ulcers, aiding digestion. Rich in antioxidants, it treats skin conditions.",
        image: "/trees/nightshade-leaves.png"
      },
      {
        name: "Dwarf Copperleaf",
        description: "Consumed for improving eyesight and treating eye issues. It supports liver health as a detoxifier and has a cooling effect.",
        image: "/trees/dwarf-copperleaf.png"
      },
      {
        name: "Spinach",
        description: "Rich in iron, Vitamins K and A, it prevents anemia, strengthens bones. Antioxidants protect eyes and regulate blood pressure.",
        image: "/trees/spinach.png"
      },
      {
        name: "Tropical Amaranthus",
        description: "Tropical amaranthus, rich in iron, calcium, and fiber, prevents anemia, improves digestion, and reduces body heat.",
        image: "/trees/amaranthus.png"
      },
      {
        name: "Foxtail Amaranth",
        description: "Highly nutritious stems and leaves offer fiber for digestion; amaranth seeds provide gluten-free protein and calcium for bones.",
        image: "/trees/foxtail-amaranth.png"
      },
      {
        name: "Mint",
        description:"Menthol aids digestion, reducing nausea, bloating, and gas. Its fresh aroma relieves headaches and combats bad breath.",
        image: "/trees/mint.png"
      },
      {
        name: "Water Apple Tree",
        description: "The water apple tree yields refreshing, water-rich fruits that help in hydration. Its lush foliage adds beauty and supports a cool microclimate.",
        image: "/trees/water-apple.png"
      },
      {
        name: "Indian Jujube Tree",
        description: "The jujube tree produces vitamin-rich fruits and thrives even in dry regions. It provides food for birds and helps in preventing soil erosion.",
        image: "/trees/jujube.png"
      },
      {
        name: "Mandarin Orange Tree",
        description: "Mandarin orange trees produce juicy fruits packed with vitamin C. Their bright foliage purifies air and adds color and fragrance to the land.",
        image: "/trees/mandarin-orange.png"
      },
      {
        name: "Drumstick Tree",
        description: "The Moringa tree yields nutrient-rich \"superfood\" leaves and pods. It grows fast, improves soil fertility, and provides essential vitamins/minerals.",
        image: "/trees/drumstick.png"
      },
      {
        name: "Hummingbird Tree",
        description: "The hummingbird tree offers edible leaves and flowers, is packed with nutrients, enriches soil with nitrogen, and creates a green environment.",
        image: "/trees/hummingbird.png"
      },
      {
        name: "Beleric Tree",
        description: "The beleric tree is valued in traditional medicine for its fruit. It helps purify the air and contributes to ecological balance.",
        image: "/trees/beleric.png"
      },
      {
        name: "Chebulic Myrobalan",
        description: "Its medicinal fruits and decomposing leaves improve soil fertility naturally, supporting biodiversity and enriching land. The tree provides shade and habitat.",
        image: "/trees/chebulic-myrobalan.png"
      },
      {
        name: "Indian Beech Tree",
        description: "The Indian beech tree produces oil-rich seeds for remedies and biofuel. It gives strong shade, supports pollinators, and improves soil fertility.",
        image: "/trees/beech.png"
      },
      {
        name: "Mahua Tree",
        description: "The mahua tree yields flowers and seeds used for food, oil, and medicine. It supports rural livelihoods and helps in maintaining biodiversity.",
        image: "/trees/mahua.png"
      },
      {
        name: "Indian Laurele",
        description: "This tree prevents soil erosion and stabilizes land, especially in coastal areas. Its dense canopy shelters wildlife; seeds yield traditional medicine oil.",
        image: "/trees/laurele.png"
      },
      {
        name: "Arjuna Tree",
        description: "The Arjuna tree's bark is known for heart-healing in traditional medicine. It strengthens riverbanks, prevents soil erosion, and enhances greenery.",
        image: "/trees/arjuna.png"
      },
      {
        name: "Holy Basil",
        description: "Used in herbal medicine, it's a powerful adaptogen that reduces stress and boosts immunity. Organically grown, it repels insects and improves soil health.",
        image: "/trees/basil.png"
      },
      {
        name: "Jasmine",
        description:"Their soothing fragrance calms the mind, refreshes the home, reduces stress, and promotes sleep. Used traditionally for cooling and relieving headaches.",
        image: "/trees/jasmine.png"
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
