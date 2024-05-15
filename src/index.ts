import axios, { AxiosInstance } from "axios";
import { PackagesService } from "./services";

const BASE_URL = "https://headless.tebex.io";

export class ClientContext {
  constructor(
    public readonly axios: AxiosInstance,
    public readonly identifier: string,
    public readonly accountsEndpoint: string,
    public readonly basketsEndpoint: string
  ) {}
}

export class TebexHeadlessClient {
  public readonly context: ClientContext;
  public readonly packages: PackagesService;

  constructor(webstoreIdentifier: string) {
    const axiosInstance = axios.create({
      baseURL: BASE_URL,
      headers: {
        Accept: "application/json",
      },
    });

    this.context = new ClientContext(
      axiosInstance,
      webstoreIdentifier,
      `${BASE_URL}/api/accounts/${webstoreIdentifier}`,
      `${BASE_URL}/api/basket/${webstoreIdentifier}`
    );

    this.packages = new PackagesService(this.context);
  }
}
