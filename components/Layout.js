import Head from "next/head";

const Layout = ({ children, title, ...props }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
      </Head>
      <section className="flex m-auto p-4 max-w-4xl">
        <div className="w-full">{children}</div>
      </section>
    </>
  );
};

export default Layout;
