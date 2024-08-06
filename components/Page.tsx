import React from "react";

export interface PageProps {
  children?: React.ReactNode;
}

const Page = ({ children }: PageProps) => {
  return (
    <main className="w-full min-h-screen flex justify-center">
      <div className="flex flex-col w-full max-w-4xl px-8 md:py-24 py-8">
        {children}
      </div>
    </main>
  );
};

export default Page;
