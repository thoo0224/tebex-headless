import { TebexHeadlessClient } from "..";
import { Category } from "../types";

export class CategoriesService {
  constructor(private readonly client: TebexHeadlessClient) {}

  /**
   * Get all categories
   *
   * @param includeCategories Whether to include categories in the response
   * @returns An array of categories
   */
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

  /**
   * Get a category by ID
   *
   * @param id The ID of the category
   * @param includeCategories Whether to include packages in the response
   * @returns A category
   */
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
