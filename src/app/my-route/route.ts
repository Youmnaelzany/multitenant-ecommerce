import { getPayload } from "payload";

import configPromise from "@/payload.config";

export const GET = async () => {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    collection: "categories", // Explicitly cast to the correct type
  });

  return Response.json(data);
};
