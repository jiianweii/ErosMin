import OTP from "@/components/auth/register/OTP";
import Registration from "@/components/auth/register/Registration";
import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [steps, setSteps] = useState(0);

  function nextStep() {
    setSteps((step) => (step <= 2 ? step + 1 : step));
  }
  function prevStep() {
    setSteps((step) => (step > 0 ? step - 1 : step));
  }

  return steps === 0 ? (
    <Registration email={email} setEmail={setEmail} nextStep={nextStep} />
  ) : (
    <OTP prevStep={prevStep} />
  );
};

export default Register;
