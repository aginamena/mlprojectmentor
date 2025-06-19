/* eslint-disable @typescript-eslint/no-explicit-any */
import * as parser from '@babel/parser';
import traverse from '@babel/traverse';

export function jsxToJson(jsxCode: string) {
  const ast = parser.parse(jsxCode, {
    sourceType: 'module',
    plugins: ['jsx', 'typescript'],
  });

  const output: any[] = [];

  traverse(ast, {
    JSXElement(path: { parent: { type: string; }; node: any; }) {
      if (path.parent.type !== 'JSXElement') {
        output.push(convertJSXElement(path.node));
      }
    },
  });

  return output;
}

function convertJSXElement(node: any): any {
  const type = node.openingElement.name.name;
  const props: Record<string, any> = {};

  node.openingElement.attributes.forEach((attr: any) => {
    if (attr.type === 'JSXAttribute') {
      const key = attr.name.name;
      let value;

      if (!attr.value) {
        value = true;
      } else if (attr.value.type === 'StringLiteral') {
        value = attr.value.value;
      } else if (attr.value.expression) {
        value = attr.value.expression.value ?? attr.value.expression;
      }

      props[key] = value;
    }
  });

  const children = node.children
    .map((child: any) => {
      if (child.type === 'JSXText') {
        return child.value.trim();
      } else if (child.type === 'JSXElement') {
        return convertJSXElement(child);
      }
      return null;
    })
    .filter(Boolean);

  return { type, props, children };
}



