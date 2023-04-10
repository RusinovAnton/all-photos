const showMoreLinkTemplate = document.createElement("template");
showMoreLinkTemplate.innerHTML =
  '<a href="#" role="button" class="d-block show-more__link text-dark">Show more...</a>';

const stylesTemplate = document.createElement("template");
stylesTemplate.innerHTML = `
  <style>
    [data-show-more-expand="false"] [data-show-more-target] {
       display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden; 
    }
  </style>
  `;

export class ShowMore {
  constructor(collection) {
    this.collection = collection;

    this.init();
  }

  init() {
    if (!this.collection?.length) return;

    this.collection.forEach((node) => {
      const height = node.getBoundingClientRect().height;
      // TODO: improvement
      // if the font-size property of card body is changed this hardcoded property must be recalculated
      const TWO_LINES_HEIGHT = 48;
      if (height <= TWO_LINES_HEIGHT) {
        return;
      }

      node.dataset.showMoreTarget = "";
      node.parentNode.dataset.showMoreExpand = "false";

      const showMoreLink =
        showMoreLinkTemplate.content.cloneNode(true).firstChild;
      showMoreLink.addEventListener("click", this.toggleShowMore.bind(this));
      node.parentNode.appendChild(showMoreLink);
    });

    const styleElement = stylesTemplate.content.cloneNode(true);
    document.body.appendChild(styleElement);
  }

  toggleShowMore(event) {
    event.preventDefault();
    const expandRoot = event.target.closest("[data-show-more-expand]");
    if (!expandRoot) return;

    expandRoot.dataset.showMoreExpand = "true";

    event.target.remove();
  }
}
