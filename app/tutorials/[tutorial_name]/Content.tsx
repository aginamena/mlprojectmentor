import React from "react";
import {
  Typography,
  Box,
  TableContainer,
  TableRow,
  TableCell,
  TableBody,
  Table,
  TableHead,
} from "@mui/material";

import Image from "next/image";
import Link from "next/link";

const components: Record<string, React.ElementType> = {
  Typography,
  Box,
  TableContainer,
  TableRow,
  TableCell,
  TableBody,
  Table,
  TableHead,
  Image,
  Link,
  span: "span",
};

type UIComponentNode = {
  type: string;
  props?: Record<string, React.ElementType>;
  children?: (string | UIComponentNode)[];
};

export function Content({ node }: { node: UIComponentNode }) {
  if (node.type == "br") return <br />;
  const Component = components[node.type];

  if (node.type == "Image")
    return (
      <Component {...node.props} style={{ width: "100%", height: "auto" }} />
    );

  const children = Array.isArray(node.children)
    ? node.children.map((child, i) =>
        typeof child === "string" ? child : <Content key={i} node={child} />
      )
    : node.children;
  return (
    <Component
      {...node.props}
      style={
        node.type == "Table"
          ? { minWidth: 650 }
          : node.type == "Link"
          ? { textDecoration: "underline" }
          : {}
      }
    >
      {children}
    </Component>
  );
}
