const baseURL = "https://yhttp://braxtonmedeiros.github.io/wdd230/";
const linksURL = "https://braxtonmedeiros.github.io/wdd230/data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching links:", error);
      }
    }
  
  getLinks();