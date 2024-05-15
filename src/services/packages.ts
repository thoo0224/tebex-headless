import { TebexHeadlessClient } from "..";
import { Package } from "../types";

export class PackagesService {
  constructor(private readonly client: TebexHeadlessClient) {}

  /**
   * Get all packages
   *
   * @returns An array of packages
   */
  public async getPackages(): Promise<Package[]> {
    const response = await this.client.context.axios.get(
      `${this.client.context.accountsEndpoint}/packages`
    );

    return this.client.handleResponse(response);
  }

  /**
   * Get a package
   *
   * @param id The package ID
   * @returns The package
   */
  public async getPackage(id: Package["id"]): Promise<Package> {
    const response = await this.client.context.axios.get(
      `${this.client.context.accountsEndpoint}/packages/${id}`
    );

    return this.client.handleResponse(response);
  }
}
