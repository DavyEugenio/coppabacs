"use client"

import { useMutation } from "react-query";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from 'yup';
import style from "./agricultorForm.module.scss";
import HeaderNavegacao from "../HeaderNavegacao";
import DadosForm from "./DadosUsuario/index";
import DadosEndereco from "./DadosEndereco";
import Link from "next/link";
import { postCoppabacs } from "@/api/usuarios/coppabacs/postCoppabacs";


const FuncionarioForm = ({ diretorioAnterior, diretorioAtual, hrefAnterior }) => {


  const initialValues = {
    email: "",
    senha: "",
    confirmarSenha: "",
    nome: "",
    nomePopular: "",
    estadoCivil: "",
    cargo: "",
    contato: "",
    cpf: "",
    dataNascimento: "",
    sexo: "",
    tipo: "",
    pergunta: {
      pergunta: "",
      resposta: ""
    },
    endereco: {
      logradouro: '',
      referencia: '',
      complemento: '',
      cidade: '',
      estado: '',
      cep: '',
      numero: '',
      bairro: ''
    },
    bancoId: "",
    conjuge: {
      nome: "",
      sexo: "",
    },
  }

  const fieldNames = {
    nome: "Nome",
    nomePopular: "Nome Popular",
    cpf: "CPF",
    senha: "Senha",
    confirmarSenha: "Confirmar Senha",
    contato: "Contato",
    dataNascimento: "Data de Nascimento",
    sexo: "Sexo",
    "pergunta.pergunta": "Pergunta de Segurança",
    "pergunta.resposta": "Resposta de Segurança",
    "endereco.cep": "CEP",
    "endereco.cidade": "Cidade",
    "endereco.estado": "Estado",
    "endereco.bairro": "Bairro",
    "endereco.logradouro": "Logradouro",
    "endereco.numero": "Número",
    "endereco.complemento": "Complemento",
    "endereco.referencia": "Referência",
  };

  const validateSchema = Yup.object().shape({
    nome: Yup.string()
      .min(5, "O nome deve ter no mínimo 5 caracteres")
      .required("Obrigatório"),
    nomePopular: Yup.string().required("Obrigatório"),
    cpf: Yup.string().required("Obrigatório"),
    pergunta: Yup.object().shape({
      pergunta: Yup.string().required("Obrigatório"),
      resposta: Yup.string().required("Obrigatório"),
    }),
    sexo: Yup.string().required("Obrigatório"),
    senha: Yup.string()
      .min(8, "A senha deve ter no mínimo 8 caracteres")
      .required("Obrigatório"),
    confirmarSenha: Yup.string()
      .min(8, "A senha deve ter no mínimo 8 caracteres")
      .oneOf([Yup.ref("senha"), null], "As senhas não correspondem")
      .required("Obrigatório"),
    contato: Yup.string()
      .min(11, "O contato deve ter no mínimo 11 caracteres")
      .required("Obrigatório"),
    dataNascimento: Yup.date()
      .max(new Date(), "A data de nascimento não pode ser maior que a data atual")
      .min(new Date(1, 1, 1900), "A data de nascimento não pode ser menor que 01/01/1900")
      .required("Obrigatório"),
    endereco: Yup.object().shape({
      cep: Yup.string()
        .min(8, "O CEP deve conter no mínimo 8 caracteres")
        .required("Obrigatório"),
      estado: Yup.string().required("Obrigatório"),
      cidade: Yup.string().required("Obrigatório"),
      bairro: Yup.string().required("Obrigatório"),
      logradouro: Yup.string().required("Obrigatório"),
      numero: Yup.string().required("Obrigatório"),
      complemento: Yup.string(),
      referencia: Yup.string(),
    }),
  });

  const { status, mutate } = useMutation(newCoppabacs => postCoppabacs(newCoppabacs), {
    onSuccess: () => {
      window.location.href = "/colaboradores";
    },
    onError: (error) => {
      console.log("Erro ao cadastrar novo coordenador", error);
      if (error.response?.data?.errors) {
        const errors = error.response.data.errors.reduce((acc, curr) => {
          acc[curr.fieldName] = curr.message;
          return acc;
        }, {});
        setApiErrors(errors);
      }
    }
  });

  const formatErrors = (errors, prefix = "") =>
    Object.entries(errors).flatMap(([key, value]) => {
      const fullKey = `${prefix}${key}`;
      const readableKey = fieldNames[fullKey] || fullKey;
      return typeof value === "string"
        ? [`${readableKey}: ${value}`]
        : formatErrors(value, `${fullKey}.`);
    });

  const combineErrors = (formikErrors, apiErrors) => {
    const combined = { ...apiErrors, ...formikErrors };
    return formatErrors(combined);
  };

  const [etapas, setEtapas] = useState(0);
  return (
    <div id="header" className={style.container}>
      <HeaderNavegacao
        diretorioAnterior={diretorioAnterior}
        diretorioAtual={diretorioAtual}
        hrefAnterior={hrefAnterior}
        etapas={etapas}

      />

      <div className={style.container__header}>
        {etapas === 0 && <h1 className={style.container__header_currentNav}>1. Dados do(a) Colaborador(a)</h1>}
        {etapas >= 1 && etapas <= 2 && <h1 className={style.container__header_current}>1. Dados do(a) Colaborador(a)</h1>}

        {etapas === 1 && <h1 className={style.container__header_currentNav}>2. Endereço do(a) Colaborador(a)</h1>}
        {etapas != 1 && <h1 className={style.container__header_current}>2. Endereço do(a) Colaborador(a)</h1>}

      </div>

      <div className={style.container__ContainerForm}>
        <Formik
          initialValues={initialValues}
          validationSchema={validateSchema}
          onSubmit={(values, { setSubmitting }) => {
            mutate(values, {
              onError: (error) => {
                console.error("Erro ao cadastrar colaborador:", error);
                const apiErrors = error.response?.data?.errors || [];
                const formattedApiErrors = apiErrors.map(
                  (err) => `${fieldNames[err.fieldName] || err.fieldName}: ${err.message}`
                );

                if (formattedApiErrors.length > 0) {
                  alert("Erros nos seguintes campos\n\n" + formattedApiErrors.join("\n"));
                }
              },
            });
            setSubmitting(false);
          }}
        >
          {(formik) => {
            return (
              <Form
              className={style.container__ContainerForm_form}
              onSubmit={(e) => {
                e.preventDefault();
                const errors = formik.errors;
                if (Object.keys(errors).length > 0) {
                  alert(
                    "Erros nos seguintes campos:\n\n" + formatErrors(errors).join("\n")
                  );
                  return;
                }
                formik.handleSubmit();
              }}
              >

                {etapas === 0 && <DadosForm formik={formik} />}
                {etapas === 1 && <DadosEndereco formik={formik} hrefAnterior={hrefAnterior} />}
                {etapas === 0 && (
                  <div className={style.container__ContainerForm_buttons}>
                    <button type="button">
                      <Link className={style.container__ContainerForm_buttons_link} href="/colaboradores">
                        <h1>Voltar</h1>
                      </Link>
                    </button>
                    <button type="button" onClick={() => setEtapas(etapas + 1)}>
                      <Link href="#header" className={style.container__ContainerForm_buttons_linkWhite}>
                        <h1>Continuar</h1>
                      </Link>
                    </button>
                  </div>
                )}
                {etapas === 1 && (
                  <div className={style.container__ContainerForm_buttons}>
                    <button type="button" onClick={() => setEtapas(etapas - 1)}>
                      <Link href="#header" className={style.container__ContainerForm_buttons_link}>
                        <h1>Voltar</h1>
                      </Link>
                    </button>
                    <button
                      type="submit"
                      className={style.container__ContainerForm_buttons_linkWhite}>
                      <h1>Finalizar</h1>
                    </button>
                  </div>
                )}
              </Form>
            )
          }
          }
        </Formik>
      </div>
    </div>
  );
}


export default FuncionarioForm;