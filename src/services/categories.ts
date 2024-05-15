import { TebexHeadlessClient } from "..";
import { Category } from "../types";

export class CategoriesService {
  constructor(private readonly client: TebexHeadlessClient) {}

  public async getCategories(
    includeCategories: boolean = true
  ): Promise<Category[]> {
    const response = await this.client.context.axios.get(
      `${this.client.context.accountsEndpoint}/categories?includePackages=${
        includeCategories ? 1 : 0
      }`
    );

    return this.client.handleResponse(response);
  }

  public async getCategory(
    id: Category["id"],
    includeCategories: boolean = true
  ): Promise<Category> {
    const response = await this.client.context.axios.get(
      `${
        this.client.context.accountsEndpoint
      }/categories/${id}?includePackages=${includeCategories ? 1 : 0}`
    );

    return this.client.handleResponse(response);
  }
}
