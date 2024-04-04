import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
// import { sendContactMail } from '../../services/sendMail';
import emailjs from "@emailjs/browser";
import {
  Container,
  ContentFormulario,
  Forms,
  Button,
  DividerForm,
  Divider,
} from "./styles";
import Loader from "../elements/Loader";

export function Form() {
  interface FormProps {
    nome: string;
    email: string;
    whatsapp: string;
  }

  const [data, setData] = useState<FormProps>({
    nome: "",
    email: "",
    whatsapp: "",
  });

  const [loading, setLoading] = useState(false);
  const form = useRef<any>();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (!data.nome || !data.email || !data.whatsapp) {
      toast("Preencha todos os campos para enviar sua mensagem!", {
        style: {
          background: "#d45d5d",
          color: "#fff",
        },
      });
      setLoading(false);
      return;
    }
    emailjs
      .send(
        "service_tu6udpk",
        "template_x31g9y7",
        data as any,
        "YT46z6LoUF1_KndVe"
      )
      .then(
        (result: any) => {
          toast("Mensagem enviado com sucesso!", {
            style: {
              background: "#007505",
              color: "#fff",
            },
          });
          console.log(result);

          setLoading(false);
        },
        (error: any) => {
          toast(
            "Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente",
            {
              style: {
                background: "#d45d5d",
                color: "#fff",
              },
            }
          );
          console.log(error);

          setLoading(false);
        }
      );
  };

  return (
    <Container id="contato">
      <ContentFormulario>
        <Divider>
          <img
            src="https://s3-alpha-sig.figma.com/img/31d1/18c4/158d0aa26fba0b758fadd5a3eb1de1a4?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=omt1NQWOSOMVFB-vqegrlF5cewS80J3VpAPil6Bp-qEbSddmJgKWRm9E5FVvLGb5R80qK6ZdFkZcXnvHlxIPl88IjhKrQkH1M5BYDUOKnJlLvLETR3USeUxpZCqTEdUpa4gm7PDkwDohYe1X50mmmTxD~yP-TvArQ7y~jlJR-f0BJ5HVRJBG2j9M10cUo9F9LbK7Z2NbxKdJON-2GBKpEexaOybbU4YfY8-gkQthub0U7676lVsJaoP5NwSdovRz-mY~mzsVcoz8f9yZIKlVADTtiECkhGuznIQyiAEkCCeOozr-XXCPftHlkLYKw07h2~PV8wVDcZSnKbP~dcOc7Q__"
            alt=""
          />
        </Divider>
        <h1>Faça sua reserva aqui</h1>
        <p>Preencha o formulário abaixo para solicitar uma entrevista</p>
        <Forms action="" onSubmit={sendEmail} ref={form}>
          <div className="formItem">
            <label htmlFor="nome">Nome*</label>
            <input
              type="text"
              name="nome"
              id="nome"
              value={data.nome}
              onChange={(e) => setData({ ...data, nome: e.target.value })}
              required
            />
          </div>
          <div className="formItem">
            <label htmlFor="email">Digite seu melhor e-mail*</label>
            <input
              type="mail"
              name="email"
              id="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              required
            />
          </div>
          <div className="formItem">
            <label htmlFor="whatsapp">WhatsApp*</label>
            <input
              type="text"
              name="whatsapp"
              id="whatsapp"
              maxLength={16}
              value={data.whatsapp}
              onChange={(e) =>
                setData({
                  ...data,
                  whatsapp: e.target.value.replace(
                    /(\d{2})(\d{1})(\d{4})(\d{4})/,
                    "($1) $2 $3-$4"
                  ),
                })
              }
              required
            />
          </div>

          <DividerForm />

          <Button disabled={loading} type="submit">
            {loading ? <Loader /> : "Enviar"}
          </Button>
        </Forms>
      </ContentFormulario>
    </Container>
  );
}
