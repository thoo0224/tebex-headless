import { TebexHeadlessClient } from "..";
import { Basket } from "../types";

export class BasketService {
  constructor(private readonly client: TebexHeadlessClient) {}

  public async getBasket(ident: string): Promise<Basket> {
    const response = await this.client.context.axios.get<any>(
      `${this.client.context.accountsEndpoint}/baskets/${ident}`
    );

    const data = response.data.data;
    return data;
  }

  public async createBasket(): Promise<Basket> {
    const response = await this.client.context.axios.post<any>(
      `${this.client.context.accountsEndpoint}/baskets`,
      {}
    );

    const data = response.data.data;
    return data;
  }
}
