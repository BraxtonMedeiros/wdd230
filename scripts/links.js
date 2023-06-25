const baseURL = "https://braxtonmedeiros.github.io/wdd230/";
const linksURL = "https://braxtonmedeiros.github.io/wdd230/data/links.json";

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
  } catch (error) {
    console.error("Error fetching links:", error);
  }
}

function displayLinks(weeks) {
  const lessonList = document.getElementById("lesson");

  weeks.forEach((weekData) => {
    const { week, links } = weekData;

    const weekListItem = document.createElement("li");
    const weekHeading = document.createElement("h4");
    weekHeading.textContent = week;
    weekListItem.appendChild(weekHeading);

    const weekLinksList = document.createElement("ul");

    links.forEach((link) => {
      const { url, title } = link;
      const linkItem = document.createElement("li");
      const linkAnchor = document.createElement("a");
      linkAnchor.href = baseURL + url;
      linkAnchor.textContent = title;
      linkItem.appendChild(linkAnchor);
      weekLinksList.appendChild(linkItem);
    });

    weekListItem.appendChild(weekLinksList);
    lessonList.appendChild(weekListItem);
  });
}

getLinks();
