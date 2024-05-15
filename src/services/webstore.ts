import { TebexHeadlessClient } from "..";
import { Webstore } from "../types";

export class WesbtoreService {
  constructor(private readonly client: TebexHeadlessClient) {}

  public async getWebstore(): Promise<Webstore> {
    const response = await this.client.context.axios.get(
      this.client.context.accountsEndpoint
    );

    return this.client.handleResponse(response);
  }
}
