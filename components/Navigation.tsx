import Link from "next/link";
import React from "react";
import icon from "../app/icon.png";
import Image from "next/image";

const Navigation = () => {
  return (
    <div className="bg-stone-900 flex justify-center">
      <div className="max-w-4xl w-full px-8 py-4 flex justify-between">
        <div>
          <Link href="/">
            <Image src={icon} height={32} width={32} alt="chef's hat logo" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
