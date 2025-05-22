import { config as dotenvConfig } from "dotenv";
dotenvConfig({ path: ".env.development" });

import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/graphql/`,
  documents: ["src/**/*.{ts,tsx}"],
  ignoreNoDocuments: true,
  generates: {
    "./src/shared/api/gql/": {
      preset: "client",
      config: {
        documentMode: "string",
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
