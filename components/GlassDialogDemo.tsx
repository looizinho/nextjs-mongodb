"use client";
import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Glass } from "@/components/Glass";

const GlassDialogDemo = () => (
  <Dialog.Root>
    <Dialog.Trigger
      style={{
        padding: "10px 16px",
        borderRadius: 8,
        border: "1px solid rgba(255,255,255,.2)",
        background: "rgba(255,255,255,.06)",
        color: "white",
        cursor: "pointer",
      }}
    >
      Abrir Dialog (Glass)
    </Dialog.Trigger>

    <Dialog.Portal>
      <Dialog.Overlay
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,.35)",
          backdropFilter: "blur(2px)",
        }}
      />

      <Dialog.Content
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Glass padding="24px" cornerRadius={18} blurAmount={0.5} saturation={160}>
          <div style={{ color: "white", width: 360 }}>
            <Dialog.Title style={{ margin: 0, fontSize: 18 }}>Editar perfil</Dialog.Title>
            <Dialog.Description style={{ opacity: 0.85, fontSize: 14, marginTop: 6 }}>
              Faça alterações no seu perfil. Clique em salvar quando terminar.
            </Dialog.Description>

            <div style={{ display: "grid", gap: 10, marginTop: 16 }}>
              <label htmlFor="name" style={{ fontSize: 14, opacity: 0.9 }}>Nome</label>
              <input id="name" defaultValue="Pedro Duarte" style={{
                padding: "8px 10px",
                borderRadius: 6,
                border: "1px solid rgba(255,255,255,.25)",
                background: "rgba(0,0,0,.15)",
                color: "white",
                outline: "none",
              }} />

              <label htmlFor="username" style={{ fontSize: 14, opacity: 0.9, marginTop: 8 }}>Usuário</label>
              <input id="username" defaultValue="@peduarte" style={{
                padding: "8px 10px",
                borderRadius: 6,
                border: "1px solid rgba(255,255,255,.25)",
                background: "rgba(0,0,0,.15)",
                color: "white",
                outline: "none",
              }} />
            </div>

            <div style={{ display: "flex", marginTop: 20, justifyContent: "flex-end", gap: 8 }}>
              <Dialog.Close asChild>
                <button style={{
                  padding: "8px 12px",
                  borderRadius: 6,
                  border: "none",
                  background: "#3b82f6",
                  color: "white",
                  cursor: "pointer",
                }}>
                  Salvar alterações
                </button>
              </Dialog.Close>

              <Dialog.Close asChild>
                <button aria-label="Close" style={{
                  padding: "8px 12px",
                  borderRadius: 6,
                  border: "1px solid rgba(255,255,255,.25)",
                  background: "transparent",
                  color: "white",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}>
                  <Cross2Icon /> Fechar
                </button>
              </Dialog.Close>
            </div>
          </div>
        </Glass>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default GlassDialogDemo;