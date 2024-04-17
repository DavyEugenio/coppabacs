import { Field, useFormikContext } from "formik";
import { useState } from "react";
import styles from "@/components/SementeForm/sementeForm.module.scss"

export default function DadosCaracteristicasAgronomicas({ formik }) {
    return (
        <>
            <h1 className={styles.title}>Características Agronômicas</h1>
            <div className={styles.sidedForm}>
                <div>
                    <label htmlFor="caracteristicasAgronomicas.cicloFenologico">Ciclo Fenológico </label>
                    <input
                        className={styles.sidedForm_input}
                        id="cicloFenologico"
                        name="caracteristicasAgronomicas.cicloFenologico"
                        placeholder="Insira o ciclo Fenológico"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.caracteristicasAgronomicas.cicloFenologico}
                        required />
                    {formik.touched.cicloFenologico && formik.errors.cicloFenologico ? (
                        <span className={styles.form__error}>{formik.errors.caracteristicasAgronomicas.cicloFenologico}</span>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="caracteristicasAgronomicas.stand"> Stand Recomendado</label>
                    <input
                        className={styles.sidedForm_input}
                        id="stand"
                        name="caracteristicasAgronomicas.stand"
                        placeholder="Insira o stand recomendado (Plantas/ha)"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.caracteristicasAgronomicas.stand}
                        required />
                    {formik.touched.stand && formik.errors.stand ? (
                        <span className={styles.form__error}>{formik.errors.caracteristicasAgronomicas.stand}</span>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="caracteristicasAgronomicas.produtividade">Produtividade </label>
                    <input
                        className={styles.sidedForm_input}
                        id="produtividade"
                        name="caracteristicasAgronomicas.produtividade"
                        placeholder="Insira a produtividade(Kg/ha)"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.caracteristicasAgronomicas.produtividade}
                        required />
                    {formik.touched.produtividade && formik.errors.produtividade ? (
                        <span className={styles.form__error}>{formik.errors.caracteristicasAgronomicas.produtividade}</span>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="caracteristicasAgronomicas.alturaPlanta">Altura da Planta </label>
                    <input
                        className={styles.sidedForm_input}
                        id="alturaPlanta"
                        name="caracteristicasAgronomicas.alturaPlanta"
                        placeholder="Insira a altura da planta (Metro)"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.caracteristicasAgronomicas.alturaPlanta}
                        required />
                    {formik.touched.alturaPlanta && formik.errors.alturaPlanta ? (
                        <span className={styles.form__error}>{formik.errors.caracteristicasAgronomicas.alturaPlanta}</span>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="caracteristicasAgronomicas.pesoMilGraos">Peso de Mil Grãos </label>
                    <input
                       className={styles.sidedForm_input}
                        id="pesoMilGraos"
                        name="caracteristicasAgronomicas.pesoMilGraos"
                        placeholder="Insira o peso de mil grãos (Grama)"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.caracteristicasAgronomicas.pesoMilGraos}
                        required />
                    {formik.touched.pesoMilGraos && formik.errors.pesoMilGraos ? (
                        <span className={style.form__error}>{formik.errors.caracteristicasAgronomicas.pesoMilGraos}</span>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="caracteristicasAgronomicas.pesoHectolitro">Peso Hectolitro </label>
                    <input
                       className={styles.sidedForm_input}
                        id="pesoHectolitro"
                        name="caracteristicasAgronomicas.pesoHectolitro"
                        placeholder="Insira o técnico responsável"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.caracteristicasAgronomicas.pesoHectolitro}
                        required />
                    {formik.touched.pesoHectolitro && formik.errors.pesoHectolitro ? (
                        <span className={styles.form__error}>{formik.errors.caracteristicasAgronomicas.pesoHectolitro}</span>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="caracteristicasAgronomicas.tipoGrao">Tipo de Grão/Fruto/Tubérculo/Raiz </label>
                    <input
                        className={styles.sidedForm_input}
                        id="tipoGrao"
                        name="caracteristicasAgronomicas.tipoGrao"
                        placeholder="Insira tipo de grão/fruto/tubérculo/raiz"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.caracteristicasAgronomicas.tipoGrao}
                        required />
                    {formik.touched.tipoGrao && formik.errors.tipoGrao ? (
                        <span className={styles.form__error}>{formik.errors.caracteristicasAgronomicas.tipoGrao}</span>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="caracteristicasAgronomicas.corGrao">Cor do Grão/Fruto/Tubérculo/Raiz </label>
                    <input
                        className={styles.sidedForm_input}
                        id="corGrao"
                        name="caracteristicasAgronomicas.corGrao"
                        placeholder="Insira a cor do grão/fruto/tubérculo/raiz"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.caracteristicasAgronomicas.corGrao}
                        required />
                    {formik.touched.corGrao && formik.errors.corGrao ? (
                        <span className={styles.form__error}>{formik.errors.caracteristicasAgronomicas.corGrao}</span>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="caracteristicasAgronomicas.corCaule">Cor do Caule </label>
                    <input
                        className={styles.sidedForm_input}
                        id="corCaule"
                        name="caracteristicasAgronomicas.corCaule"
                        placeholder="Insira a cor do caule"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.caracteristicasAgronomicas.corCaule}
                        required />
                    {formik.touched.corCaule && formik.errors.corCaule ? (
                        <span className={styles.form__error}>{formik.errors.caracteristicasAgronomicas.corCaule}</span>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="caracteristicasAgronomicas.corFolha">Cor da Folha </label>
                    <input
                        className={styles.sidedForm_input}
                        id="corFolha"
                        name="caracteristicasAgronomicas.corFolha"
                        placeholder="Insira a cor da folha"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.caracteristicasAgronomicas.corFolha}
                        required />
                    {formik.touched.corFolha && formik.errors.corFolha ? (
                        <span className={styles.form__error}>{formik.errors.caracteristicasAgronomicas.corFolha}</span>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="caracteristicasAgronomicas.corFlor">Cor da Flor/Inflorência </label>
                    <input
                        className={styles.sidedForm_input}
                        id="corFlor"
                        name="caracteristicasAgronomicas.corFlor"
                        placeholder="Insira a cor da flor/inflorencia"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.caracteristicasAgronomicas.corFlor}
                        required />
                    {formik.touched.corFlor && formik.errors.corFlor ? (
                        <span className={style.form__error}>{formik.errors.caracteristicasAgronomicas.corFlor}</span>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="caracteristicasAgronomicas.empalhamento">Empalhamento </label>
                    <input
                        className={styles.sidedForm_input}
                        id="empalhamento"
                        name="caracteristicasAgronomicas.empalhamento"
                        placeholder="Insira o empalhamento"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.caracteristicasAgronomicas.empalhamento}
                        required />
                    {formik.touched.empalhamento && formik.errors.empalhamento ? (
                        <span className={styles.form__error}>{formik.errors.caracteristicasAgronomicas.empalhamento}</span>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="caracteristicasAgronomicas.habitoCrescimento">Hábito de Crescimento </label>
                    <input
                        className={styles.sidedForm_input}
                        id="habitoCrescimento"
                        name="caracteristicasAgronomicas.habitoCrescimento"
                        placeholder="Insira o hábito de crescimento"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.caracteristicasAgronomicas.habitoCrescimento}
                        required />
                    {formik.touched.habitoCrescimento && formik.errors.habitoCrescimento ? (
                        <span className={styles.form__error}>{formik.errors.caracteristicasAgronomicas.habitoCrescimento}</span>
                    ) : null}
                </div>
            </div>

        </>
    )
}