import type { PropertyProps } from '~/components';

export const properties: Record<string, PropertyProps> = {
  TPipe: {
    modifier: 'extends',
    type: {
      type: 'tuple',
      items: [
        {
          type: 'custom',
          name: 'BaseSchema',
          href: '../BaseSchema/',
          generics: [
            'unknown',
            'unknown',
            {
              type: 'custom',
              name: 'BaseIssue',
              href: '../BaseIssue/',
              generics: ['unknown'],
            },
          ],
        },
        {
          type: 'array',
          spread: true,
          item: {
            type: 'custom',
            name: 'PipeItem',
            href: '../PipeItem/',
            generics: [
              'any',
              'unknown',
              {
                type: 'custom',
                name: 'BaseIssue',
                href: '../BaseIssue/',
                generics: ['unknown'],
              },
            ],
          },
        },
      ],
    },
  },
  SchemaWithPipe: {
    modifier: 'extends',
    type: {
      type: 'custom',
      name: 'Omit',
      generics: [
        {
          type: 'custom',
          name: 'FirstTupleItem',
          href: '../FirstTupleItem/',
          generics: [
            {
              type: 'custom',
              name: 'TPipe',
            },
          ],
        },
        {
          type: 'union',
          options: [
            {
              type: 'string',
              value: '_run',
            },
            {
              type: 'string',
              value: '_types',
            },
          ],
        },
      ],
    },
  },
  pipe: {
    type: {
      type: 'custom',
      name: 'TPipe',
    },
  },
  _run: {
    type: {
      type: 'function',
      params: [
        {
          name: 'dataset',
          type: {
            type: 'custom',
            name: 'Dataset',
            href: '../Dataset/',
            generics: ['unknown', 'never'],
          },
        },
        {
          name: 'config',
          type: {
            type: 'custom',
            name: 'Config',
            href: '../Config/',
            generics: [
              {
                type: 'custom',
                name: 'InferIssue',
                href: '../InferIssue/',
                generics: [
                  {
                    type: 'custom',
                    name: 'FirstTupleItem',
                    href: '../FirstTupleItem/',
                    generics: [
                      {
                        type: 'custom',
                        name: 'TPipe',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        },
      ],
      return: {
        type: 'custom',
        name: 'Dataset',
        href: '../Dataset/',
        generics: [
          {
            type: 'custom',
            name: 'InferOutput',
            href: '../InferOutput/',
            generics: [
              {
                type: 'custom',
                name: 'LastTupleItem',
                href: '../LastTupleItem/',
                generics: [
                  {
                    type: 'custom',
                    name: 'TPipe',
                  },
                ],
              },
            ],
          },
          {
            type: 'custom',
            name: 'InferIssue',
            href: '../InferIssue/',
            generics: [
              {
                type: 'custom',
                name: 'TPipe',
                indexes: ['number'],
              },
            ],
          },
        ],
      },
    },
  },
  _types: {
    type: {
      type: 'union',
      options: [
        {
          type: 'object',
          entries: [
            {
              key: 'input',
              value: {
                type: 'custom',
                name: 'InferInput',
                href: '../InferInput/',
                generics: [
                  {
                    type: 'custom',
                    name: 'FirstTupleItem',
                    href: '../FirstTupleItem/',
                    generics: [
                      {
                        type: 'custom',
                        name: 'TPipe',
                      },
                    ],
                  },
                ],
              },
            },
            {
              key: 'output',
              value: {
                type: 'custom',
                name: 'InferOutput',
                href: '../InferOutput/',
                generics: [
                  {
                    type: 'custom',
                    name: 'LastTupleItem',
                    href: '../LastTupleItem/',
                    generics: [
                      {
                        type: 'custom',
                        name: 'TPipe',
                      },
                    ],
                  },
                ],
              },
            },
            {
              key: 'issue',
              value: {
                type: 'custom',
                name: 'InferIssue',
                href: '../InferIssue/',
                generics: [
                  {
                    type: 'custom',
                    name: 'TPipe',
                    indexes: ['number'],
                  },
                ],
              },
            },
          ],
        },
        'undefined',
      ],
    },
  },
};
