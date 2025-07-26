import { DialogCN, Button } from "@/components/ui";
import type { Dispatch, SetStateAction } from "react";
import { Input } from "@/components/templates";

type DialogUnitProps = {
  show: boolean;
  close: Dispatch<SetStateAction<boolean>>;
}

export const ForgotPasswordModal = ({ show, close }: DialogUnitProps) => {
  return (
    <DialogCN.Dialog open={show} modal={true} onOpenChange={() => close(false)}>
      <DialogCN.DialogContent className="flex flex-col items-start justify-center gap-6 bg-white border-none px-8">
        <DialogCN.DialogHeader>
          <DialogCN.DialogTitle className="text-lg">Recuperar Senha</DialogCN.DialogTitle>
          <DialogCN.DialogDescription className="text-base">Digite seu email para receber o código de recuperação</DialogCN.DialogDescription>
        </DialogCN.DialogHeader>

        <div className="w-full">
          <label>
            <p>Email</p>
            <Input
              value=""
              onChange={() => false}
              placeholder="seu@email.com"
              type="email"
            />
          </label>
        </div>

        <DialogCN.DialogFooter className="w-full">
          <div className="w-full flex justify-center gap-4 items-center">
            <Button
              className="w-[216px] border-2 border-zinc-400 bg-white text-zinc-700 hover:bg-zinc-200"
              onClick={() => close(false)}
            >Cancelar</Button>
            <Button
              className="w-[216px] border-2 border-transparent bg-[#1463E1] hover:bg-[#143ae1]"
            >Enviar Código</Button>
          </div>
        </DialogCN.DialogFooter>
      </DialogCN.DialogContent>
    </DialogCN.Dialog>
  )
}