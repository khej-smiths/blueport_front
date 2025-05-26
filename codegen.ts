import { config as dotenvConfig } from "dotenv";
dotenvConfig({ path: ".env.development" });

import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: `${process.env.NEXT_PUBLIC_API_ENDPOINT}`,
  documents: ["src/shared/api/mutations/*.{ts,tsx}", "src/shared/api/queries/*.{ts,tsx}"],
  ignoreNoDocuments: true,
  generates: {
    "./src/shared/api/gql/": {
      preset: "client",
      config: {
        documentMode: "string",
        preResolveTypes: true,
      },
      plugins: [],
    },
    "./schema.graphql": {
      plugins: ["schema-ast"],
      config: {
        includeDirectives: true,
      },
    },
  },
};

export default config;
