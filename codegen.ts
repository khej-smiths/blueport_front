import { config as dotenvConfig } from "dotenv";
dotenvConfig({ path: ".env.development" });

import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: `${import.meta.env.VITE_PUBLIC_API_ENDPOINT}`,
  documents: ["app/shared/api/mutations/*.{ts,tsx}", "app/shared/api/queries/*.{ts,tsx}"],
  ignoreNoDocuments: true,
  generates: {
    "./app/shared/api/gql/": {
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
