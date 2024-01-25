package com.example.showAddict;

import com.example.showAddict.repositories.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import javax.annotation.PostConstruct;

@SpringBootApplication(scanBasePackages = "com.example.showAddict")
@EnableJpaRepositories
public class ShowAddictApplication {
  @Autowired
  UsersRepository repository;
	public static void main(String[] args) {
//    SpringApplication.run(ShowAddictApplication.class, args);
    ConfigurableApplicationContext appContext =SpringApplication.run(ShowAddictApplication.class, args);
		UsersRepository repo = appContext.getBean(UsersRepository.class);
    System.out.println("We should be seeing exactly 1 User from the Users table!!!!!!");
    System.out.println(repo.findAll());
//		ShowAddictApplication sa = new ShowAddictApplication();
//		sa.seeThis();
	}
//	@PostConstruct
//	public void seeThis() {
//    System.out.println("We about to see 1 user in the Users table!!!!!!!!");
//    System.out.println(repository.findAll());
//  }

}
