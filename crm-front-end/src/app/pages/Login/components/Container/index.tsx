import * as S from "./styles";
import { Form } from "../Form";
import { IMG } from "@/assets";

export const Container = () => {
  return (
    <S.Container>
      <S.Bg style={{ backgroundImage: `url(${IMG.BgOfficeIMG})` }} />
      <Form />
      <S.TextFooter>© 2025 CRM Empresarial. Todos os direitos reservados.</S.TextFooter>
    </S.Container>
  )
}