export const newsPosts = [
  {
    title: "Advancements in Rice Milling Technology",
    type: "Rice",
    image: "https://www.millingandmillers.com/wp-content/uploads/2023/06/wheat-in-market.jpg",
    content: "Rice milling technology has seen significant advancements in recent years, revolutionizing the way rice is processed globally. ...",
    slug: "advancements-rice-milling-technology",
    seq: 1
  },
  {
    title: "Sustainable Rice Farming Practices",
    type: "Rice",
    image: "https://www.agfoundation.org/imgz/_w1600/2023-11-01_12-43-41.jpg",
    content: "Sustainable rice farming is essential for long-term agricultural viability, especially in water-scarce regions. ...",
    slug: "sustainable-rice-farming-practices",
    seq: 2
  },
  {
    title: "Rice Market Trends and Global Trade",
    type: "Rice",
    image: "https://www.agfoundation.org/imgz/_w1600/2023-11-01_12-43-41.jpg",
    content: "The global rice market is dynamic, influenced by trade policies, weather events, and consumer preferences. ...",
    slug: "rice-market-trends-global-trade",
    seq: 3
  },
  {
    title: "AI Automation in Rice Milling",
    type: "Rice",
    image: "https://www.millingandmillers.com/wp-content/uploads/2023/05/fortified-rice-kernels-800x445.webp",
    content: "Exploring how AI-driven sensors and automation improve yield and reduce waste across modern rice mills.",
    slug: "rice-automation-ai",
    seq: 4
  },
  {
    title: "Wheat Storage & Preservation Techniques",
    type: "Wheat",
    image: "https://www.millingandmillers.com/wp-content/uploads/2023/05/fortified-rice-kernels-800x445.webp",
    content: "New storage solutions and preservation methods helping reduce post-harvest losses for wheat producers.",
    slug: "wheat-storage-tech",
    seq: 5
  },
  {
    title: "Biofuel Policy Update 2026",
    type: "Biofuel",
    image: "https://www.millingandmillers.com/wp-content/uploads/2023/05/fortified-rice-kernels-800x445.webp",
    content: "Recent policy shifts affecting biofuel incentives, feedstock use, and international trade implications.",
    slug: "biofuel-policy-update-2026",
    seq: 6
  },
  {
    title: "Grain Quality Research Advances",
    type: "General",
    image: "https://www.agfoundation.org/imgz/_w1600/2023-11-01_12-43-41.jpg",
    content: "Researchers publish new methods to assess and improve grain quality from farm to mill.",
    slug: "grain-quality-research",
    seq: 7
  },
  {
    title: "Millers Conference 2026 Highlights",
    type: "Industry",
    image: "https://www.millingandmillers.com/wp-content/uploads/2023/05/fortified-rice-kernels-800x445.webp",
    content: "Key takeaways from the annual millers conference: tech, sustainability, and market forecasts.",
    slug: "millers-conference-2026",
    seq: 8
  },
];

export function getNewsPosts(reversed = false) {
  const copy = newsPosts.slice(); // shallow copy
  return reversed ? copy.reverse() : copy;
}
