import { useState } from "react";

export const useForgotPasswordModal = () => {

  const [email, setEmail] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState<boolean>(false);
  const [hasCode, setHasCode] = useState<boolean>(false);

  return { email, setCode, setPassword, setPasswordConfirm, setEmail, code, password, passwordConfirm, showPassword, showPasswordConfirm, setShowPassword, setShowPasswordConfirm, hasCode, setHasCode };
}