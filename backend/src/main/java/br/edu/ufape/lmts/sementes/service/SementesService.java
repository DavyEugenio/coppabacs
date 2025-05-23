package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.edu.ufape.lmts.sementes.model.BancoSementes;
import br.edu.ufape.lmts.sementes.model.ResponsavelTecnico;
import br.edu.ufape.lmts.sementes.model.Sementes;
import br.edu.ufape.lmts.sementes.repository.SementesRepository;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;

@Service
public class SementesService implements SementesServiceInterface {
	@Autowired
	private SementesRepository repository;

	public Sementes saveSementes(Sementes newInstance) {
		return repository.save(newInstance);
	}

	public Sementes updateSementes(Sementes transientObject) {
		findSementesById(transientObject.getId());
		return repository.save(transientObject);
	}

	public Sementes findSementesById(long id) {
		return repository.findByAtivoTrueAndId(id)
				.orElseThrow(() -> new ObjectNotFoundException("It doesn't exist Sementes with id = " + id));
	}

	public List<Sementes> getAllSementes() {
		return repository.findByAtivoTrue();
	}

	public void deleteSementes(Sementes persistentObject) {
		this.deleteSementes(persistentObject.getId());
	}

	public void deleteSementes(long id) {
		Sementes obj = findSementesById(id);
		obj.setAtivo(false);
		repository.save(obj);
	}

	public List<Sementes> findSementesByResponsavelTecnico(ResponsavelTecnico responsavelTecnico) {
		return repository.findByAtivoTrueAndResponsavelTecnico(responsavelTecnico);
	}

	public List<Sementes> searchSementes(String string) {
		return repository.findByAtivoTrueAndNomeContainingOrAtivoTrueAndDescricaoContaining(string, string);
	}

	public Page<Sementes> searchPageSementes(String string, Pageable pageRequest) {
		return repository.findByAtivoTrueAndNomeContainingOrAtivoTrueAndDescricaoContaining(string, string, pageRequest);
	}

	public Page<Sementes> findPageSementes(Pageable pageRequest) {
		return repository.findByAtivoTrue(pageRequest);
	}

}