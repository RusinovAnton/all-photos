import { mockDescription } from "./utils/mock-description.js";

export class PhotosApi {
  url = "https://picsum.photos/v2/list";
  page = null;
  perPage = null;
  data = [];

  constructor(page = 1, perPage = 9) {
    this.page = page;
    this.perPage = perPage;
  }

  async fetch() {
    const params = new URLSearchParams();
    const currentPage = this.page++;

    params.append("page", currentPage);
    params.append("limit", this.perPage);

    try {
      const data = await fetch(`${this.url}?${params.toString()}`)
        .then((response) => response.json())
        .then((list) =>
          list.map((item) => ({ ...item, description: mockDescription() }))
        );

      this.data = this.data.concat(data);

      return {
        data,
        page: currentPage,
        error: null,
      };
    } catch (error) {
      console.log(error);
      this.page--;
      throw {
        data: [],
        page: currentPage,
        error,
      };
    }
  }
}
