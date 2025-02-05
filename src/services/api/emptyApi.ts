import { baseQueryWithReauth } from "../auth/baseQueryWithReauth.ts";
import {
  buildCreateApi,
  coreModule,
  reactHooksModule,
} from "@reduxjs/toolkit/query/react";

const createApi = buildCreateApi(
  coreModule(),
  reactHooksModule({ unstable__sideEffectsInRender: true }),
);

// initialize an empty api service that we'll inject endpoints into later as needed
export const emptySplitApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
