import { TebexHeadlessClient } from "..";
import { Package } from "../types";

export class PackagesService {
  constructor(private readonly client: TebexHeadlessClient) {}

  public async getPackages(): Promise<Package[]> {
    const response = await this.client.context.axios.get(
      `${this.client.context.accountsEndpoint}/packages`
    );

    return this.client.handleResponseError(response);
  }
}
