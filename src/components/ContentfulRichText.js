import React from "react";
import RichTextToReact from "rich-text-to-react";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";

const ContentfulRichText = (props) => {
  const { json } = props;

  const renderingOptions = {
    renderMark: {},
    renderNode: {
      [INLINES.HYPERLINK]: (node, key) => (
        <Link
          key={key}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "rgba(62,149,153,1)",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
          href={node.data.uri}
        >
          {node.content[0].value}
        </Link>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node, key) => {
        let { title, description, file } = node.data.target.fields;
        if (!file) return null;
        file = file["en-US"] ? file["en-US"] : file;

        const mimeType = file.contentType;
        const mimeGroup = mimeType.split("/")[0];
        let content;

        switch (mimeGroup) {
          case "image":
            content = (
              <img
                width="100%"
                title={title ? title["en-US"] : null}
                alt={description ? description["en-US"] : null}
                src={file.url}
              />
            );
            break;
          case "video":
            content = (
              <video controls="below" fit="contain">
                <source key="video" src={file.url} type={mimeType} />
              </video>
            );
            break;
          case "application": {
            if (mimeType === "application/pdf")
              content = <embed src={file.url} width="100%" />;
            break;
          }
          default:
            content = `Unrecognized format. mime-group:${mimeGroup}, mime-type: ${mimeType}`;
            break;
        }
        return <Box key={key}>{content}</Box>;
      },
    },
  };

  return <RichTextToReact document={json} options={renderingOptions} />;
};

export default ContentfulRichText;
