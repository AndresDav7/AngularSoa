package com.example.demorest.controllers;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.example.demorest.models.Cliente;
import com.example.demorest.services.ClienteService;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE})
@RequestMapping("/clientes")
public class ClienteController {
	
	@Autowired
	private ClienteService clienteservice;

	@GetMapping
	public List<Cliente> findAll(){
		return clienteservice.findall();
	}
	
	@PostMapping
	public Cliente create ( @RequestBody Cliente c) {
		return clienteservice.create(c);
	}
	
	
		
	@GetMapping("/{id}")
	public  Cliente findById (@PathVariable("id") Integer id) {
		return clienteservice.findById(id);
	}
	
	
	@PutMapping ("/{id}")
	public Cliente update ( @RequestBody Cliente c, @PathVariable("id") Integer id) {
		c.setIdCliente(id);
		return clienteservice.update(c);
	}
	
	
	
	@DeleteMapping ("/{IdCliente}")
	public void delete (@PathVariable("IdCliente") Integer IdCliente) {
		clienteservice.delete(IdCliente);
	}
	

}