import { Suspense } from "react";

import EnquiryForm from "@/components/forms/EnquiryForm";

export default function FormPage() {
  return (
    <Suspense fallback={null}>
      <EnquiryForm />
    </Suspense>
  );
}
