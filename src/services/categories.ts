import { TebexHeadlessClient } from "..";
import { Category } from "../types";

export class CategoriesService {
  constructor(private readonly client: TebexHeadlessClient) {}

  /**
   * Get all categories
   *
   * @param options Options for the request
   * @param options.includeCategories Whether to include packages in the response
   * @param options.basketIdent Provide the identifier of the basket
   * @param options.ipAddress An IPv4 address can be provided with authenticated requests
   * @returns An array of categories
   */
  public async getCategories(options?: {
    includeCategories?: boolean;
    basketIdent?: string;
    ipAddress?: string;
  }): Promise<Category[]> {
    const response = await this.client.context.axios.get(
      `${this.client.context.accountsEndpoint}/categories`,
      {
        params: {
          includeCategories: options?.includeCategories ? 1 : 0,
          basketIdent: options?.basketIdent,
          ipAddress: options?.ipAddress,
        },
      }
    );

    return this.client.handleResponse(response);
  }

  /**
   * Get a category by ID
   *
   * @param id The ID of the category
   * @param options Options for the request
   * @param options.includeCategories Whether to include packages in the response
   * @param options.basketIdent Provide the identifier of the basket
   * @param options.ipAddress An IPv4 address can be provided with authenticated requests
   * @returns A category
   */
  public async getCategory(
    id: Category["id"],
    options?: {
      includeCategories?: boolean;
      basketIdent?: string;
      ipAddress?: string;
    }
  ): Promise<Category> {
    const response = await this.client.context.axios.get(
      `${this.client.context.accountsEndpoint}/categories/${id}`,
      {
        params: {
          includeCategories: options?.includeCategories ? 1 : 0,
          basketIdent: options?.basketIdent,
          ipAddress: options?.ipAddress,
        },
      }
    );

    return this.client.handleResponse(response);
  }
}
