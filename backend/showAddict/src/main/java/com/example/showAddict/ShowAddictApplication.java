package com.example.showAddict;

import com.example.showAddict.models.Users;
import com.example.showAddict.repositories.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

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
//		ShowAddictApplication sa = new ShowAddictApplication();
//		sa.seeThis();
	}

//  @Bean
//  public WebMvcConfigurer corsConfigurer() {
//    return new WebMvcConfigurer() {
//      @Override
//      public void addCorsMappings(CorsRegistry registry) {
//        registry.addMapping("/users/validUsername").allowedOrigins("http://localhost:4200");
//        registry.addMapping("/users/validUsernames").allowedOrigins("http://localhost:4200");
//      }
//    };
//  }
//	@PostConstruct
//	public void seeThis() {
//    System.out.println("We about to see 1 user in the Users table!!!!!!!!");
//    System.out.println(repository.findAll());
//  }

}
