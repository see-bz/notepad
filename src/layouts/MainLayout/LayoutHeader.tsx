import config from "@/config";
import Head from "next/head";
import { IPageKey, pages } from "@/config/pages";
import Link from "next/link";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  page: IPageKey;
}

export const LayoutHeader: React.FC<IProps> = ({
  children,
  page: pageKey,
  ...props
}) => {
  const page = pages[pageKey];
  return (
    <>
      <Head>
        <title>{page.title}</title>
        <meta name="description" content={page.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={config.APP_ICON} />
        <meta property="url" content={page.path} />
      </Head>
      <div className="layout-header" {...props}>
        <header className="header d-md-flex d-sm-block mt-3">
          <h3 className="me-3">
            <Link
              href={config.BRAND_REF_URL}
              target="_blank"
              className="fw-bold"
            >
              {config.BRAND_NAME}
            </Link>
            <Link href="/">/{config.APP_NAME}</Link>
          </h3>
          {children}
        </header>
      </div>
    </>
  );
};
