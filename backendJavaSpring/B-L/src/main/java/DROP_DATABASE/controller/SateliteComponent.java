package DROP_DATABASE.controller;

import DROP_DATABASE.dto.Satelite;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class SateliteComponent {
    private final RestTemplate restTemplate;

    public SateliteComponent(RestTemplate restTemplate){
        this.restTemplate = restTemplate;
    }

    public Satelite getSatelite(int id, float observer_lat, float observer_lng){
        String apiKey = "EBGCQ5-AKDT2G-DS7HUN-5DR1"; //for developement purposes TODO: move it to a config file
        String apiUrl =
                "https://api.n2yo.com/rest/v1/satellite/positions/"
                        + id
                        + "/"
                        + observer_lat
                        + "/"
                        + observer_lng
                        + "/0/1/&apiKey="
                        + apiKey;
        return restTemplate.getForObject(apiUrl, Satelite.class);
    }

}
