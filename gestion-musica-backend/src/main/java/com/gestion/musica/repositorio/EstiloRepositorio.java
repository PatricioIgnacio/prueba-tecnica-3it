package com.gestion.musica.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gestion.musica.modelo.Estilo;

@Repository
public interface EstiloRepositorio extends JpaRepository<Estilo, Long>{
}
