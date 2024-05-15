import { TebexHeadlessClient } from "..";
import { Package } from "../types";

export class PackagesService {
  constructor(private readonly client: TebexHeadlessClient) {}

  /**
   * Get all packages
   *
   * @param options Options
   * @param options.basketIdent Provide the identifier of the basket
   * @param options.ipAddress An IPv4 address can be provided with authenticated requests
   * @returns An array of packages
   */
  public async getPackages(options?: {
    basketIdent?: string;
    ipAddress?: string;
  }): Promise<Package[]> {
    const response = await this.client.context.axios.get(
      `${this.client.context.accountsEndpoint}/packages`,
      {
        params: options,
      }
    );

    return this.client.handleResponse(response);
  }

  /**
   * Get a package
   *
   * @param id The package id
   * @param options Options
   * @param options.basketIdent Provide the identifier of the basket
   * @param options.ipAddress An IPv4 address can be provided with authenticated requests
   * @returns The package
   */
  public async getPackage(
    id: Package["id"],
    options?: {
      basketIdent?: string;
      ipAddress?: string;
    }
  ): Promise<Package> {
    const response = await this.client.context.axios.get(
      `${this.client.context.accountsEndpoint}/packages/${id}`,
      {
        params: options,
      }
    );

    return this.client.handleResponse(response);
  }
}
