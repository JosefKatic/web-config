import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:3000/graphql',
  documents: ["libs/data-access/src/lib/**/*.graphql"],
  generates: {
    'libs/data-access/src/lib/generated/generated.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-apollo-angular'
      ],
      config: {
        addExplicitOverride: true
      }
    }
  }
};
export default config;
