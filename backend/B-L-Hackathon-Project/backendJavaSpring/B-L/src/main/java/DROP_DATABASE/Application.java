package DROP_DATABASE;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
@AutoConfiguration
public class Application {
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/satelite/{id}/{observer_lat}/{observer_lng}")
						.allowedOrigins("http://16.171.4.212:3000/", "*")
						.allowedMethods("GET", "POST", "PUT", "DELETE");
				registry.addMapping("/satelite/getAllAbove/{observer_lat}/{observer_lng}")
						.allowedOrigins("http://16.171.4.212:3000/", "*")
						.allowedMethods("GET", "POST", "PUT", "DELETE");
				registry.addMapping("/satelite/getAllAbove/{observer_lat}/{observer_lng}/trunc")
						.allowedOrigins("http://16.171.4.212:3000/", "*")
						.allowedMethods("GET", "POST", "PUT", "DELETE");
				registry.addMapping("/satelite/getImageForSatelite/{sateliteId}")
						.allowedOrigins("http://16.171.4.212:3000/", "*")
						.allowedMethods("GET", "POST", "PUT", "DELETE");
				registry.addMapping("/image/{lat}/{lng}")
						.allowedOrigins("http://16.171.4.212:3000/", "*")
						.allowedMethods("GET", "POST", "PUT", "DELETE");
			}
		};
	}


}
