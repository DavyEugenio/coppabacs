package br.edu.ufape.lmts.sementes.controller.dto.response;

import java.util.List;

import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.Agricultor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Getter @Setter @NoArgsConstructor
public class AgricultorResponse extends UsuarioResponse {
	private String nomePopular;
	private String atividadesRurais; 
	private List<infraestruturaHidricaResponse> infraestruturaHidrica;
	private List<InfraestruturaComunidadeResponse> infraestruturaComunidade;
	private List<SementesResponse> sementes;
	private long bancoId;

	public AgricultorResponse(Agricultor obj) {
		super(obj);	
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		modelMapper.map(obj, this);
		if(obj.getBancoSementes() != null)
			this.bancoId = obj.getBancoSementes().getId();
	}

}