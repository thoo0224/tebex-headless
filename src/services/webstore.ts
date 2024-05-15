import { TebexHeadlessClient } from "..";
import { Webstore } from "../types";

export class WesbtoreService {
  constructor(private readonly client: TebexHeadlessClient) {}

  /**
   * Get the webstore information
   *
   * @returns The webstore information
   */
  public async getWebstore(): Promise<Webstore> {
    const response = await this.client.context.axios.get(
      this.client.context.accountsEndpoint
    );

    return this.client.handleResponse(response);
  }
}
