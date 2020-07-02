import Head from "next/head";

const Layout = ({ children, title, ...props }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
      </Head>
      <section className="layout">
        <div className="content">{children}</div>
      </section>
    </>
  );
};

export default Layout;
