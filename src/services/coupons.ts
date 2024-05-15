import { TebexHeadlessClient } from "..";
import { CouponResponse } from "../types";

export class CouponsService {
  constructor(private readonly client: TebexHeadlessClient) {}

  public async applyCoupon(
    ident: string,
    coupon: string
  ): Promise<CouponResponse> {
    const response = await this.client.context.axios.post(
      `${this.client.context.accountsEndpoint}/baskets/${ident}/coupons`,
      {
        coupon_code: coupon,
      }
    );

    return this.client.handleResponse(response, false);
  }
}
