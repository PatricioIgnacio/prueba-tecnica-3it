package com.gestion.musica.controlador;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gestion.musica.modelo.Estilo;
import com.gestion.musica.repositorio.EstiloRepositorio;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:4200/")
public class EstiloControlador {

	@Autowired
	private EstiloRepositorio repositorio;

	@GetMapping("/estilos")
	public List<Estilo> listarTodosLosEstilos() {
		return repositorio.findAll();
	}
}
