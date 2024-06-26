"use client";
import { JobApplicationForm } from "@/components/forms/job-application-form";
import { LoginForm } from "@/components/forms/login-form";
import { RegisterForm } from "@/components/forms/register-form";
import { useMediaQuery } from "@/hooks/use-media-query";
import { OutputContext } from "@/store/output-context";
import { useContext } from "react";
import OutputContent from "./_components/output-content";
import { OutputDialog } from "./_components/output-dialog";
import { OutputDrawer } from "./_components/output-drawer";

export default function Home() {
  const { showOutput, setShowOutput, output } = useContext(OutputContext);

  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div>
      <h1 className="text-2xl mt-1 sm:mt-8 mb-16 sm:mb-20 font-bold underline decoration-double decoration-pink-400 underline-offset-8 leading-10">
        Form Validation with Zod and React Hook Form
      </h1>

      <div className="space-y-16">
        <LoginForm />
        <RegisterForm />
        <JobApplicationForm />
      </div>

      {isDesktop && output && (
        <OutputDialog showOutput={showOutput} setShowOutput={setShowOutput}>
          <OutputContent output={output} />
        </OutputDialog>
      )}
      {!isDesktop && output && (
        <OutputDrawer showOutput={showOutput} setShowOutput={setShowOutput}>
          <OutputContent output={output} />
        </OutputDrawer>
      )}
    </div>
  );
}
