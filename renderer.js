console.log("Loading the script.js file");

const items = [
  {
    id: 1,
    title: "Random title 1",
    content: "Random content 1",
  },
  {
    id: 2,
    title: "Random title 2",
    content: "Random content 2",
  },
  {
    id: 3,
    title: "Random title 3",
    content: "Random content 3",
  },
  {
    id: 4,
    title: "Random title 4",
    content: "Random content 4",
  },
  {
    id: 5,
    title: "Random title 5",
    content: "Random content 5",
  },
  {
    id: 6,
    title: "Random title 6",
    content: "Random content 6",
  },
  {
    id: 7,
    title: "Random title 7",
    content: "Random content 7",
  },
  {
    id: 8,
    title: "Random title 8",
    content: "Random content 8",
  },
  {
    id: 9,
    title: "Random title 9",
    content: "Random content 9",
  },
  {
    id: 10,
    title: "Random title 10",
    content: "Random content 10",
  },
  {
    id: 11,
    title: "Random title 11",
    content: "Random content 11",
  },
  {
    id: 12,
    title: "Random title 12",
    content: "Random content 12",
  },
  {
    id: 13,
    title: "Random title 13",
    content: "Random content 13",
  },
  {
    id: 14,
    title: "Random title 14",
    content: "Random content 14",
  },
  {
    id: 15,
    title: "Random title 15",
    content: "Random content 15",
  },
  {
    id: 16,
    title: "Random title 16",
    content: "Random content 16",
  },
  {
    id: 17,
    title: "Random title 17",
    content: "Random content 17",
  },
  {
    id: 18,
    title: "Random title 18",
    content: "Random content 18",
  },
  {
    id: 19,
    title: "Random title 19",
    content: "Random content 19",
  },
  {
    id: 20,
    title: "Random title 20",
    content: "Random content 20",
  },
];

const itemsCopied = document.getElementsByClassName("items-copied")[0];
const clipboardItemsContainer = document.querySelector(".clipboard-items");

function restoreItems() {
  items.forEach((item) => {
    const clipboardItemDiv = document.createElement("div");
    clipboardItemDiv.classList.add("clipboard-item");

    const titleParagraph = document.createElement("p");
    const contentParagraph = document.createElement("p");

    titleParagraph.textContent = "Title : " + item.title;
    contentParagraph.textContent = "Content : " + item.content;

    clipboardItemDiv.appendChild(titleParagraph);
    clipboardItemDiv.appendChild(contentParagraph);

    clipboardItemsContainer.appendChild(clipboardItemDiv);
  });
}

function init() {
  // load the number of items copied
  itemsCopied.textContent = `Items Copied : ${items.length}`;

  restoreItems();
}

init();
