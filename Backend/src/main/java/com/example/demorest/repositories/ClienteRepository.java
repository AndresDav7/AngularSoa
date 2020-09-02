package com.example.demorest.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demorest.models.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente,Integer> {

}