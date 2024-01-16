package br.edu.ufape.lmts.sementes.model;

import java.util.Date;
import java.util.List;

import br.edu.ufape.lmts.sementes.enums.TipoUsuario;
import jakarta.persistence.Entity;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Entity @Getter @Setter @EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Admin extends Usuario {

	public Admin() {
		super();
		this.addRole(TipoUsuario.ADMIN);
        this.addRole(TipoUsuario.AGRICULTOR);
        this.addRole(TipoUsuario.COPPABACS);
        this.addRole(TipoUsuario.GERENTE);
	}

	public Admin(Long id, String nome, String email, String senha, Endereco endereco, String rg, String cpf,
			Date dataNascimento, String contato, String imagem, String nomePai, String nomeMae, String nis,
			String tituloEleitor, String sexo, Conjuge conjuge, List<Postavel> postavel) {
		super(id, nome, email, senha, endereco, rg, cpf, dataNascimento, contato, imagem, nomePai, nomeMae, nis, tituloEleitor,
				sexo, conjuge, postavel);
		this.addRole(TipoUsuario.ADMIN);
		this.addRole(TipoUsuario.AGRICULTOR);
		this.addRole(TipoUsuario.COPPABACS);
		this.addRole(TipoUsuario.GERENTE);
	}
}