import { ImageField, TextField } from "@/components/forms";
import { Form, Formik } from "formik";
import React from "react";

function ProfilePage() {
  return (
    <div className="bg-white shadow-card p-6">
      <div>
        <p>تفاصيل الحساب</p>
        <hr />
      </div>
      <Formik initialValues={{avatar:""}}>
        {() => (
          <Form className="grid grid-cols-2 gap-4">
            <div>
              <ImageField
                name="avatar"
                label="Profile Picture"
                defaultImageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GD4pn20Ihn0GeysKDHRgGZvN1GkIMf.png"
              />
            </div>
            <div className="flex flex-col gap-4">
              <TextField
                error={null}
                name={"username"}
                label="معرف المستخدم"
                required={true}
              />
              <TextField
                error={null}
                name={"username"}
                label="معرف المستخدم"
                required={true}
              />
              <TextField
                error={null}
                name={"username"}
                label="معرف المستخدم"
                required={true}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ProfilePage;
