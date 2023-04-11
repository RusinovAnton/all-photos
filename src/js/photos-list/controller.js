import { PhotosApi } from "./api.js";
import { throttle } from "./utils/throttle.js";
import { PhotosListRenderer } from "./view";

export class PhotosListController {
  error = null;

  constructor(loadMoreBtn, container) {
    this.loadMoreBtn = loadMoreBtn;
    this.container = container;

    this.#init();
  }

  loadData = throttle(this.handleLoadMore, 1000, this);

  #init = () => {
    this.view = new PhotosListRenderer(this.loadMoreBtn, this.container);
    this.api = new PhotosApi();

    this.loadMoreBtn.addEventListener("click", () => {
      this.loadData();
    });

    // Initial data request
    this.loadData();
  };

  async handleLoadMore() {
    let data = [];
    try {
      this.view.setLoadingState(true);
      const response = await this.api.fetch();
      data = response.data;
    } catch (error) {
      // TODO: handle server error
    } finally {
      this.view.setLoadingState(false);
    }

    this.view.renderData(data);

    return true;
  }
}
