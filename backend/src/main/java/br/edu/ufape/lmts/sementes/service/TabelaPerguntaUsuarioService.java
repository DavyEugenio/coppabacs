package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.edu.ufape.lmts.sementes.model.TabelaPerguntaUsuario;
import br.edu.ufape.lmts.sementes.repository.TabelaPerguntaUsuarioRepository;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;

@Service
public class TabelaPerguntaUsuarioService implements TabelaPerguntaUsuarioServiceInterface {
	@Autowired
	private TabelaPerguntaUsuarioRepository repository;

	public TabelaPerguntaUsuario saveTabelaPerguntaUsuario(TabelaPerguntaUsuario newInstance) {
		return repository.save(newInstance);
	}

	public TabelaPerguntaUsuario updateTabelaPerguntaUsuario(TabelaPerguntaUsuario transientObject) {
		return repository.save(transientObject);
	}

	public TabelaPerguntaUsuario findTabelaPerguntaUsuarioById(long id) {
		return repository.findById(id).orElseThrow(
				() -> new ObjectNotFoundException("It doesn't exist TabelaPerguntaUsuario with id = " + id));
	}

	public List<TabelaPerguntaUsuario> getAllTabelaPerguntaUsuario() {
		return repository.findAll();
	}

	public void deleteTabelaPerguntaUsuario(TabelaPerguntaUsuario persistentObject) {
		this.deleteTabelaPerguntaUsuario(persistentObject.getId());
	}

	public void deleteTabelaPerguntaUsuario(long id) {
		TabelaPerguntaUsuario obj = repository.findById(id).orElseThrow(
				() -> new ObjectNotFoundException("It doesn't exist TabelaPerguntaUsuario with id = " + id));
		repository.delete(obj);
	}

	public Page<TabelaPerguntaUsuario> findPageTabelaPerguntaUsuario(Pageable pageRequest) {
		return repository.findAll(pageRequest);
	}

}
