import { TextField } from "@/components/forms";
import { Button } from "@/components/ui/button";
import React from "react";

function LoginPage() {
  return (
    <div className="h-dvh flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow p-4 py-8 max-w-9/12 w-full lg:max-w-4/12 items-center rounded-xl flex flex-col gap-8">
        <TextField name={"name"} label="معرف المستخدم" type="text" />
        <TextField name={"name"} label="معرف المستخدم" type="text" />
        <Button>تسجيل الدخول</Button>
      </div>
    </div>
  );
}

export default LoginPage;
