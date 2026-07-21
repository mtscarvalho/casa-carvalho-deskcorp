import { DefaultNodeTypes, SerializedBlockNode } from "@payloadcms/richtext-lexical";

import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { RichText as ConvertRichText, JSXConvertersFunction } from "@payloadcms/richtext-lexical/react";

import { YouTubeEmbed, YouTubeEmbedProps } from "@/components/YoutubeEmbed";
import { cn } from "@/lib/utils";

type RichTextProps = {
  data: SerializedEditorState;
  className?: string;
  size?: "md" | "sm";
};

type NodeTypes = DefaultNodeTypes | SerializedBlockNode<YouTubeEmbedProps>;

export function RichText({ data, className, size = "md" }: RichTextProps) {
  const jsxConverters: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
    ...defaultConverters,
    blocks: {
      YoutubeEmbed: ({ node }: { node: SerializedBlockNode<YouTubeEmbedProps> }) => <YouTubeEmbed {...node.fields} />,
    },
  });

  return <ConvertRichText className={cn("payload-richtext", className)} converters={jsxConverters} data={data} />;
}
