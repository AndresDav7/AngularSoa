package com.example.demorest.services;


import java.util.List;

import com.example.demorest.models.Cliente;

public interface ICliente  {

	Cliente create (Cliente c);
	
	Cliente update (Cliente c);
	
	Cliente findById (Integer id);
	
	List<Cliente> findall ();
	
	void delete(Integer id);
	
}
