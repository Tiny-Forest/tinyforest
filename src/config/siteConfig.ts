// Configuration file for Tiny Forest website
// Update videos and images here

import { YouTubeLink } from "@/components/YouTubeLink";

export const siteConfig = {
  // Company Information
  company: {
    name: "Tiny Forest",
    tagline: "Invest in Nature, Place that Heals",
    description: "Wake up everyday to fresh air, green views, and a slower, healthier life, rooted in pure soil. Tiny Forest brings this peace directly to you.",
    phone: ["+91 99946 80316, +91 70922 11099"],
    whatsappUrl: "https://wa.me/+919994680316",
    email: "tinyforestgardens@gmail.com",
    Youtubelink: "https://www.youtube.com/@TinyForestGardens",
    address: {
      line1: "Tiruchirappalli, Tamil Nadu"
    },
    logo: "/logo.png",
  },

  // Hero Section
  hero: {
    subtitle: "A Sustainable Agroforestry lifestyle",
    titleHighlight: "Where every tree tells a Story.",
    title: " Place that Heals",
    description: "Wake up everyday to fresh air, green views, and a slower, healthier life, rooted in pure soil. Tiny Forest brings this peace directly to you.",
    videoUrl: "https://pub-95cf346dcb2f490d8c4145e006736fcf.r2.dev",
    backgroundImage: "Farm Land"
  },

  // How It Works Section
  howItWorks: {
    label: "About Us",
    title: "Tiny Forest is a meticulously planned eco-community",
    description: "See how Tiny Forest transforms land into thriving, sustainable forests while helping you grow your investment—step by step.",
    content: "Nestled near Panjapur and Archampatti, Tiny Forest is more than just a project — it’s a way of life rooted in sustainability, health, and harmony with nature. Spanning 7 acres with 27 Lands in Panjapur and 6 acres with 20 Lands in Archampatti, it offers a rare opportunity to build your farmhouse or regenerative retreat, embracing a disease-free, chemical-free lifestyle in the lap of pure soil. For over 2.5 years, the land has been lovingly nurtured and enriched, not for business, but as our heartfelt way of giving back to nature. More than ten experts from diverse fields have collaborated to bring this living masterpiece to life — where organic farming and the cultivation of native trees blend seamlessly to promote health and wellness. Every tree has been hand-picked from different regions to create a space that breathes purity and balance — a sanctuary where you can escape the chaos, breathe fresh air, and let nature heal you.",
    stats: {
      number: "35+",
      text: "Hand Picked Trees. From every corner."
    },
  },

  // Video Sections
  videoSections: [
    {
      title: "Panjappur Project Development",
      description:
        "Watch the transformation of the Panjappur site into a thriving green farm.",
      youtubeUrl: "https://www.youtube.com/embed/oC4T3Y0hp5c",
      videoThumbnail: "/panjappur_thumb.jpg",
      steps: [
        {
          icon: "CircleDot",
          title: "Health & Organic Living",
          description: "Residents get access to chemical-free fruits, vegetables, and medicinal plants. The green environment reduces stress and supports a healthier lifestyle."
        },
        {
          icon: "Trees",
          title: "Environmental Sustainability",
          description: "Tiny Forest restores soil, water, and air quality using organic inputs and native trees. It builds a long-term self-sustaining ecosystem that supports biodiversity."
        },
        {
          icon: "Droplets",
          title: "Tree and plant diversity",
          description: "Tiny Forest includes a wide variety of fruit trees, medicinal trees, vegetables, and greens to create a rich, balanced ecosystem. This diversity supports better soil health, attracts pollinators, ensures year-round yield, and strengthens overall biodiversity."
        },
        {
          icon: "TrendingUp",
          title: "Scale and Lands",
          description: "Spread across 7 acres with 27 lands, the project offers a thoughtfully planned environment filled with endless greenery and a lifestyle free from overcrowding. This project is close to our heart — the result of over 2.5 years devoted solely to nurturing the soil."
        }
      ]
    },
    {
      title: "Archampatti Site Overview",
      description:
        "See how Tiny Forest developed its Archampatti farmland into a lush ecosystem.",
      youtubeUrl: "https://www.youtube.com/embed/5-H1UcHXJcw",
      videoThumbnail: "/archampatti_thumb.jpg",
      steps: [
        {
          icon: "CircleDot",
          title: "Eco-Friendly Restoration",
          description: "Tiny Forest helps revive soil fertility, improve water retention, and purify the air through the use of natural and native vegetation. It creates a resilient ecosystem that gradually becomes self-sustaining and rich in biodiversity."
        },
        {
          icon: "Trees",
          title: "Wellness & Natural Living",
          description: " People can enjoy fresh, chemical-free produce such as fruits, herbs, and vegetables.The lush green environment promotes mental calmness and encourages a healthier daily lifestyle."
        },
        {
          icon: "Droplets",
          title: "Rich Flora Variety",
          description: "The forest contains diverse species of fruit-bearing trees, medicinal plants, leafy greens, and vegetables to form a balanced ecosystem.This plant variety boosts soil quality, attracts beneficial insects, ensures continuous harvests, and enhances overall ecological balance."
        },
        {
          icon: "TrendingUp",
          title: "Scale and Lands",
          description: "The development covers 6 Acres and contains 20 planned Lands, offering abundant greenery and a living situation intentionally structured to avoid feeling crowded."
        }
      ]
    },
    {
      title: "Soil Preparation — The Heartbeat of Tiny Forest.",
      description:
        "Through careful ploughing, biofertilizers, and organic enrichment, we transform barren ground into living, fertile soil that sustains both people and planet.",
      youtubeUrl: "https://youtu.be/8KShgqofAJI",
      videoThumbnail: "/panjappur_thumb.jpg",
      steps: [
        {
          icon: "Droplets",
          title: "Deep Ploughing (Every 3 Months)",
          description: "Every three months, we deeply plough the soil to keep it soft, breathable, and full of life. This process mixes in organic matter, improves water flow, and helps destroy weeds and pest larvae — allowing roots to grow freely and soil microbes to thrive."
        },
        {
          icon: "Droplets",
          title: "Cow Dung Enrichment",
          description: "We infuse 150 tons of native cow dung slurry into the land. Rich in natural microbes and organic carbon, this powerful blend enhances soil fertility, stimulates root health, and builds a strong foundation for sustainable, chemical-free growth."
        },
        {
          icon: "Droplets",
          title: "Natural Manures & Compost",
          description: "Each planting pit receives 20 kg goat manure and 10 kg vermicompost — ensuring balanced nutrition, strong growth, and soil vitality."
        },
        {
          icon: "TrendingUp",
          title: "Regenerative Green Cycle",
          description: "Every 6 months, 20 millet and green-manure varieties are grown (not harvested) to fix nitrogen, add carbon, and naturally regenerate the soil."
        },
        {
          icon: "TrendingUp",
          title: "Organic Boosters & Biofertilizers",
          description: "We apply Panchagavya, Meen Amilam, EM solutions, and beneficial live cultures like Azospirillum and Phosphobacteria. These organic boosters strengthen root systems, enhance microbial diversity, and create living soil that flourishes season after season."
        }
      ]
    }
  ],
  youtube: {
    channelUrl: "https://www.youtube.com/@TinyForestGardens", // Replace with your real channel link
    brochureUrl: "https://drive.google.com/uc?export=download&id=1aiuqzG1aC6ePTOumjnuLfVRPQYnht3aK",
  },
  // Why Choose Section
  whyChoose: {
    label: "IMPORTANT NOTE",
    title: "Why Choose Tiny Forest",
    reasons: [
      {
        title: "We say what we do.",
        image: "/sustainable_investment.png"
      },
      {
        title: "Health-Focused Community",
        image: "/soil_tree.png"
      },
      {
        title: "Peaceful, Pollution-Free Lifestyle",
        image: "/transparent_growth.png"
      },
      {
        title: "Sustainable Agroforestry Design",
        image: "/potential_finance.png"
      }
    ]
  },

  // Testimonials
  testimonials: {
    label: "OUR TESTIMONIALS",
    title: "WHAT OUR CUSTOMERS ARE TALKING ABOUT",
    items: [
      {
        name: "Ravichandran K",
        role: "Former Lead ICS Engineer",
        image: "/ravichandran.jpeg",
        quote: "The main reason is my desire to move away from city life and come to this kind of lifestyle. I have lived in many cities and many countries. Even though I have lived in big cities around the world, I wanted a life like this, and that is the reason I bought land here"
      },
      {
        name: "Arul Mohan",
        role: "PUBLIC RELATION OFFICER",
        image: "/ArulMohan.jpg",
        quote: "I’ve been with Tiny Forest Archampatti since 2021, and the growth here is unbelievable. My land has nearly 60 varieties of fruit and medicinal trees,  mango, jamun, sapota, jackfruit, guava, and many more. The farm uses modern drip irrigation fully controlled through a mobile app. Truly, Tiny Forest is one of the best farmland projects in Tamil Nadu, and I am proud to own a land here."
      },
      // {
      //   name: "Alvanthan",
      //   role: "Scientist",
      //   image: "/picture.png",
      //   quote: "They are giving quality of water, land and air"
      // }
    ]
  },

  // High Quality Farms Section
  highQualityFarms: {
    title: "Providing High Quality Farms",
    features: [
      {
        icon: "TrendingUp",
        title: "Caring for the Soil",
        description: "We enrich the soil with organic manures like farmyard compost, rock phosphate, and bio-fertilizers for lasting fertility. Native cow-based preparations like Panchagavya and Jeevamrutham naturally boost plant growth and immunity. Every six months, we add neem cake to strengthen plants and protect them from pests naturally."
      },
      {
        icon: "Sprout",
        title: " Growing with Nature",
        description: "We practice Integrated Pest Management using natural traps and pest-repelling border plants. Our diverse crops — millets, legumes, herbs, and flowers — nurture biodiversity and balanced soil cycles. Pruning and support poles ensure healthy growth, sunlight access, and strong plant structure."
      },
      {
        icon: "Target",
        title: " Sustaining Water and Life",
        description: "Trenching and circular bunds improve water percolation and moisture retention. Ploughing loosens and aerates the soil, helping roots grow deep and strong. Every step focuses on harmony between soil, water, and plant life for long-term sustainability."
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
        description: "Soursop trees bear nutrient-packed fruits known for their medicinal benefits. They enrich the ecosystem by attracting birds and pollinators.",
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
        description: "Their soothing fragrance calms the mind, refreshes the home, reduces stress, and promotes sleep. Used traditionally for cooling and relieving headaches.",
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
        description: "Menthol aids digestion, reducing nausea, bloating, and gas. Its fresh aroma relieves headaches and combats bad breath.",
        image: "/trees/mint.png"
      }
    ]
  },

  // Contact Form
  contact: {
    label: "CONTACT NOW",
    title: "GET IN TOUCH NOW",
    description: "Creating sustainable micro-forests across the nation. Invest in nature, invest in your future.",
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
    text: "Breathe. This is what peace feels like.",
    buttonText: "DISCOVER MORE"
  }
};
