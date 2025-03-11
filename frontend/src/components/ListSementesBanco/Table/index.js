"use client"

import Image from "next/image";
import styles from "./table.module.scss";
import Link from "next/link";
import { deleteSemente } from "@/api/sementes/deleteSemente";
import ExcluirButton from "@/components/ExcluirButton";
import { useState } from "react";
import { getStorageItem } from "@/utils/localStore";



export default function TableLayout({ table1, table2, table3, table4, table5, table6, listSementes, setSementes, onSelectSemente, onSelectTabela }) {
  const handleDeleteSementes = async (sementesId) => {
    await deleteSemente(sementesId);
    setSementes(listSementes.filter(sementes => sementes.id !== sementesId))
  }

  return (
    <div className={styles.content}>
      <table className={styles.content__table}>
        <thead className={styles.content__table__header}>
          <tr>
            <th>{table1}</th>
            <th>{table3}</th>
          <th>{table5}</th>

            <th className={styles.content__table__header_name3}>
              <div >
                {table6}
                <Image src="/assets/iconInformacao.svg" alt="Visualizar" width={27} height={26} />

              </div>

            </th>
          </tr>
        </thead>
        <tbody className={styles.content__table__body}>
          {listSementes.map((sementes) => {
            return sementes.tabelaBancoSementes.map((tabelaBancoSementes, index) => {
              return (
                <tr key={index}>
                  <td><Image src="/assets/sementeteste.png" alt="Foto do usuário" width={72} height={72} /></td>
                  <td>{sementes.nome}</td>
                  {/**
                   * 
                   <td>{sementes.cultura.cultura}</td>
                   <td>{tabelaBancoSementes.peso}</td>
                  */}
                  <td>{tabelaBancoSementes.safra}</td>

                  <td>
                    <div>
                      <Image src="/assets/iconOlho.svg" alt="Visualizar" onClick={() => onSelectTabela(tabelaBancoSementes, sementes.nome, sementes.cultura.cultura)} width={27} height={26} />
                    </div>
                  </td>
                </tr>
              );
            });
          })}

        </tbody>
      </table>
    </div>
  );
}