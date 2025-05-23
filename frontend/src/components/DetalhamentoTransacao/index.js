"use client"


import { Form, Formik } from "formik";
import style from "./detalhamentoTransacao.module.scss";
import DadosTransacao from "./DadosTransacao/index";
import HeaderDetalhamento from "../HeaderDetalhamento";


const DetalhamentoTransacao = ({ hrefAnterior, diretorioAtual, diretorioAnterior, transacao }) => {
  const formData = {
    data: transacao.data,
    descricao: transacao.descricao || "" ,
    agricultorId: transacao.agricultor.id || "",
    itens: transacao.itens || {},
    bancoSementesId: transacao.bancoSementesId || "",
  }
  return (
    <div id="header" className={style.container}>
      <HeaderDetalhamento
        diretorioAnterior={diretorioAnterior}
        diretorioAtual={diretorioAtual}
        hrefAnterior={hrefAnterior}
      />
      <div className={style.container__ContainerForm}>
        <Formik
          initialValues={formData}
        >
          {(formik) => {
            return (
              <Form
                className={style.container__ContainerForm_form}
              >
                <DadosTransacao formik={formik} hrefAtual={diretorioAtual} transacao={transacao} />
                <div className={style.container__ContainerForm_buttons}>
                  <button type="button"
                    className={style.container__ContainerForm_buttons_linkWhite} onClick={hrefAnterior}>
                    <h1>Voltar</h1>
                  </button>
                </div>
              </Form>
            )
          }
          }
        </Formik>
      </div>
    </div>
  );
}


export default DetalhamentoTransacao;