import * as S from "./styles";
import { Button } from "@/components/ui";
import { HiOfficeBuilding } from "react-icons/hi";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Input } from "@/components/templates";
import { useAuthContext } from "../../hook";

export const Form = () => {
  const { email, isPassword, password, setEmail, setIsPassword, setPassword, setForgotPassword } = useAuthContext();

  return (
    <S.Container>
      <S.Header>
        <S.Logo><HiOfficeBuilding /></S.Logo>
        <h1>CRM Empresarial</h1>
        <p>Faça login para acessar sua conta</p>
      </S.Header>

      <S.Main>
        <S.Label>
          <p>Email</p>
          <Input
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </S.Label>
        <S.Label>
          <p>Senha</p>
          <Input
            placeholder="••••••"
            type={isPassword ? "password" : "email"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            hasIcon
            icon={isPassword ? <FaEye /> : <FaEyeSlash />}
            onClickIcon={() => setIsPassword(!isPassword)}
          />
        </S.Label>
        <span onClick={() => setForgotPassword(true)}>Esqueceu a senha?</span>
        <Button
          className="w-full bg-[#1463E1] hover:bg-[#143ae1]"
          onClick={() => false}
        >Entrar</Button>
      </S.Main>

      <S.Footer>
        <p>Não tem uma conta?</p>
        <span>Fale com o administrador</span>
      </S.Footer>
    </S.Container>
  )
}