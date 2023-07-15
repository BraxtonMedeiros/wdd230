document.addEventListener("DOMContentLoaded", function () {
  const membersContainer = document.getElementById("members-container");
  const gridViewButton = document.getElementById("grid-view");
  const listViewButton = document.getElementById("list-view");

  gridViewButton.addEventListener("click", function () {
    membersContainer.classList.add("grid-view");
    membersContainer.classList.remove("list-view");
  });

  listViewButton.addEventListener("click", function () {
    membersContainer.classList.add("list-view");
    membersContainer.classList.remove("grid-view");
  });

  // Fetch JSON data
  fetch("./data/members.json")
    .then((response) => response.json())
    .then((data) => {
      // Iterate through each member
      data.businesses.forEach((member) => {
        const memberCard = document.createElement("div");
        memberCard.classList.add("member-card");

        const memberImage = document.createElement("img");
        memberImage.src = member.image;
        memberCard.appendChild(memberImage);

        const memberName = document.createElement("h2");
        memberName.textContent = member.name;
        memberName.classList.add("member-title"); // Add class to the title element
        memberCard.appendChild(memberName);

        const memberAddress = document.createElement("p");
        memberAddress.classList.add("member-address"); // Add class to the address element
        memberAddress.textContent = member.address;
        memberCard.appendChild(memberAddress);

        const memberPhone = document.createElement("p");
        memberPhone.classList.add("member-phone"); // Add class to the phone number element
        memberPhone.textContent = "Phone: " + member.phone;
        memberCard.appendChild(memberPhone);

        const memberWebsite = document.createElement("a");
        memberWebsite.classList.add("member-website"); // Add class to the website element
        memberWebsite.href = member.website;
        memberWebsite.textContent = "Website";
        memberCard.appendChild(memberWebsite);

        membersContainer.appendChild(memberCard);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
