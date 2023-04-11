import { ShowMore } from "./show-more.js";

const showMorePlugin = new ShowMore();

const cardTemplateBase = document.createElement("template");
cardTemplateBase.innerHTML = `<div class="col-xl-6"><div class="card h-100"></div></div>`;

function getCardInnerHTML(src, title, description) {
  return `<img
    src="${src}"
    class="card-img-top"
    alt="${title}"
  />
  <div class="card-body">
    <h2 class="card-title">${title}</h2>
    <p data-show-more="">
      ${description}
    </p>
  </div>
  <div class="card-footer bg-transparent">
    <button class="btn btn-primary me-3">
      Save to collection
    </button>
    <button class="btn btn-outline-secondary">Share</button>
  </div>`;
}

export class PhotosListRenderer {
  #initialIntersect = false;
  #container = null;
  #loadMoreBtn = null;
  #loadMoreBtnText = "";
  #onLoadMore = () => {};

  constructor(loadMoreBtn, photosContainerNode, onLoadMore) {
    this.#container = photosContainerNode;
    this.#loadMoreBtn = loadMoreBtn;
    this.#loadMoreBtnText = loadMoreBtn.innerText;
    this.#onLoadMore = onLoadMore || this.#onLoadMore;

    this.#init();
  }

  renderData(data) {
    console.log(data);

    if (!data?.length) {
      return;
    }

    const cardTemplates = this.#makeCardsList(data);
    const descriptionNodes = cardTemplates.map((cardTemplate) => {
      const cardDescriptionNode = cardTemplate.querySelector(
        ".card [data-show-more]"
      );
      this.#container.append(cardTemplate);
      return cardDescriptionNode;
    });

    showMorePlugin.initElements(descriptionNodes);

    return true;
  }

  setLoadingState(isLoading) {
    const btn = this.#loadMoreBtn;

    if (isLoading) {
      btn.disabled = true;
      btn.innerText = "Loading...";
      btn.classList.add("disabled");
    } else {
      btn.disabled = false;
      btn.innerText = this.#loadMoreBtnText;
      btn.classList.remove("disabled");
    }
  }

  renderError() {
    // TODO: handle loading error
  }

  clearContainer() {
    this.#container.innerHTML = "";
  }

  #init = () => {
    this.clearContainer();
    this.#loadMoreBtn.addEventListener("click", this.#onLoadMore);
    const observer = new IntersectionObserver((event) => {
      this.#handleIntersection(event);
    });
    observer.observe(this.#loadMoreBtn);
  };

  #handleIntersection() {
    if (!this.#initialIntersect) {
      this.#initialIntersect = true;
      return;
    }

    this.#onLoadMore();
  }

  #makeCardsList = (data) => {
    const list = data.map(({ download_url, author, description }) => {
      const cardTemplate = cardTemplateBase.content.cloneNode(true);
      const card = cardTemplate.querySelector(".card");
      card.innerHTML = getCardInnerHTML(download_url, author, description);
      return cardTemplate;
    });

    return list;
  };
}
