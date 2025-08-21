import { FaqContent, ParagraphContent } from "@/data/faqData";
import { Typography, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Link from "next/link";
import React from "react";
import { FaCircle } from "react-icons/fa";

export function FaqContentRenderer({ content }: { content: FaqContent[] }) {
  return (
    <>
      {content.map((para: FaqContent, i: number) => {
        if (para.type !== "paragraph") return null;

        const inlineChildren = para.children.filter(c => c.type !== "list");
        const lists = para.children.filter(c => c.type === "list");

        return (
          <React.Fragment key={i}>
            {inlineChildren.length > 0 && (
              <Typography component="p">
                {inlineChildren.map((child: ParagraphContent, j: number) => {
                  switch (child.type) {
                    case "text":
                      return <React.Fragment key={j}>{child.value}</React.Fragment>;
                    case "link":
                      return (
                        <Link
                          key={j}
                          href={child.href}
                          style={{ color: "#226C3B", textDecoration: "none" }}
                        >
                          {child.value}
                        </Link>
                      );
                    default:
                      return null;
                  }
                })}
              </Typography>
            )}

            {/* Render lists separately */}
            {lists.map((child: ParagraphContent, j: number) => {
              if (child.type !== "list") return null;
              return(
              <List key={j}>
                {child.items.map((li, k) => (
                  <ListItem key={k}>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <FaCircle style={{ fontSize: "10px", color: "#226C3B" }} />
                    </ListItemIcon>
                    <ListItemText>{li}</ListItemText>
                  </ListItem>
                ))}
              </List>)
            }
            )}
          </React.Fragment>
        );
          })}
    </>
  );
}