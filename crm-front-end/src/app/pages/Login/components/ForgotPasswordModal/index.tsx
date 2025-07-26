import { DialogCN, Button } from "@/components/ui";
import type { Dispatch, SetStateAction } from "react";
import { Input } from "@/components/templates";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import * as S from "./styles";
import { useForgotPasswordModal } from "./hook";

type DialogUnitProps = {
  show: boolean;
  close: Dispatch<SetStateAction<boolean>>;
}

export const ForgotPasswordModal = ({ show, close,  }: DialogUnitProps) => {
  const { code, email, password, passwordConfirm, setCode, setEmail, setPassword, setPasswordConfirm, setShowPassword, setShowPasswordConfirm, showPassword, showPasswordConfirm, hasCode, setHasCode  } = useForgotPasswordModal();

  return (
    <DialogCN.Dialog open={show} modal={true} onOpenChange={() => close(false)}>
      <DialogCN.DialogContent className="flex flex-col items-start justify-center gap-6 bg-white border-none px-8">
        <DialogCN.DialogHeader>
          <DialogCN.DialogTitle className="text-lg">{hasCode ? "Nova Senha" : "Recuperar Senha"}</DialogCN.DialogTitle>
          <DialogCN.DialogDescription className="text-base -mt-2">
            {hasCode ? "Digite o código recebido e sua nova senha" : "Digite seu email para receber o código de recuperação"}
          </DialogCN.DialogDescription>
        </DialogCN.DialogHeader>

        {hasCode ?
          <div className="w-full flex flex-col gap-4">
            <S.Label>
              <p className="font-medium">Código de Recuperação</p>
              <Input
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Digite o código recebido"
                type="text"
              />
            </S.Label>
              <label>
              <p className="font-medium">Nova Senha</p>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••"
                type={showPassword ? "text" : "password"}
                hasIcon
                icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                onClickIcon={() => setShowPassword(!showPassword)}
              />
            </label>
              <label>
              <p className="font-medium">Confirmar Nova Senha</p>
              <Input
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                placeholder="••••••"
                type={showPasswordConfirm ? "text" : "password"}
                hasIcon
                onClickIcon={() => setShowPasswordConfirm(!showPasswordConfirm)}
                icon={showPasswordConfirm ? <FaEyeSlash /> : <FaEye />}
              />
            </label>
          </div>
          :
          <div className="w-full">
            <label>
              <p className="font-medium">Email</p>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                type="email"
              />
            </label>
          </div>
        }

        <DialogCN.DialogFooter className="w-full">
          {hasCode ?
            <div className="w-full flex justify-center gap-4 items-center">
              <Button
                className="w-[216px] border-2 border-zinc-400 bg-white text-zinc-700 hover:bg-zinc-200"
                onClick={() => setHasCode(false)}
              >Voltar</Button>
              <Button
                className="w-[216px] border-2 border-transparent bg-[#1463E1] hover:bg-[#143ae1]"
                onClick={() => false}
              >Alterar Senha</Button>
            </div>
            :
            <div className="w-full flex justify-center gap-4 items-center">
              <Button
                className="w-[216px] border-2 border-zinc-400 bg-white text-zinc-700 hover:bg-zinc-200"
                onClick={() => close(false)}
              >Cancelar</Button>
              <Button
                className="w-[216px] border-2 border-transparent bg-[#1463E1] hover:bg-[#143ae1]"
                onClick={() => setHasCode(true)}
              >Enviar Código</Button>
            </div>
          }
        </DialogCN.DialogFooter>
      </DialogCN.DialogContent>
    </DialogCN.Dialog>
  )
}