import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

import { postgresAdapter } from "@payloadcms/db-postgres";
import { buildConfig } from "payload";

import { pt } from "@payloadcms/translations/languages/pt";

import { seoPlugin } from "@payloadcms/plugin-seo";
import { s3Storage } from "@payloadcms/storage-s3";

import { Media } from "@/collections/Media/config";
import { Users } from "@/collections/Users/config";

import { Social } from "@/globals/Social/config";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

import { PrivacyPolicy } from "./globals/PrivacyPolicy/config";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  experimental: {
    localizeStatus: true,
  },
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: `| ${process.env.SITE_TITLE}`,
      icons: [
        {
          type: "image/png",
          rel: "icon",
          url: "/payload-favicon.svg",
        },
      ],
    },
    components: {
      graphics: {
        Icon: "/components/Payload/DashboardIcon/index.tsx",
        Logo: "/components/Payload/DashboardLogo/index.tsx",
      },
    },
  },
  i18n: {
    supportedLanguages: { pt },
    translations: {
      pt: {
        version: {
          preview: "Visualização",
        },
      },
    },
  },
  editor: lexicalEditor(),
  collections: [Users, Media],
  globals: [Social, PrivacyPolicy],
  secret: process.env.PAYLOAD_SECRET || "",
  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URL || "" },
  }),
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  sharp,
  plugins: [
    seoPlugin({}),
    s3Storage({
      collections: {
        media: true,
      },
      bucket: process.env.CLOUDFLARE_R2_BUCKET!,
      config: {
        endpoint: process.env.CLOUDFLARE_R2_ENDPOINT!,
        credentials: {
          accessKeyId: process.env.CLOUDFLARE_R2_ACCESS_KEY_ID!,
          secretAccessKey: process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY!,
        },
        region: "auto",
      },
    }),
  ],
});
