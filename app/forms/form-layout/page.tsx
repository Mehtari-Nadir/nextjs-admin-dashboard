import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import SignIn from "@/components/Forms/SignIn";
import SignUp from "@/components/Forms/SignUp";
import Contact from "@/components/Forms/Contact";

export const metadata: Metadata = {
  title: "Form Layout Page | Next.js E-commerce Dashboard Template",
  description: "This is Form Layout page for TailAdmin Next.js",
  // other metadata
};

const FormLayout = () => {
  return (
    <>
      <Breadcrumb pageName="FormLayout" />
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}
          <Contact />
        </div>
        <div className="flex flex-col gap-9">
          {/* <!-- Sign In Form --> */}
          <SignIn />
          {/* <!-- Sign Up Form --> */}
          <SignUp />
        </div>
      </div>
    </>
  );
};

export default FormLayout;