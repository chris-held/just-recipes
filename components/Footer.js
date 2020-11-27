import Link from "next/link";

const Footer = () => {
  return (
    <>
      <section className="flex m-auto p-4 max-w-4x">
      <Link href="/suggestions" as={`/suggestions`}>
        <a className="text-lg text-center m-auto text-accent">Have a suggestion?</a>
      </Link>
      </section>
    </>
  );
};

export default Footer;
