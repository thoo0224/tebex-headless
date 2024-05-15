import dotenv from "dotenv";
dotenv.config();

jest.retryTimes(1);

import * as matchers from "jest-extended";
expect.extend(matchers);
