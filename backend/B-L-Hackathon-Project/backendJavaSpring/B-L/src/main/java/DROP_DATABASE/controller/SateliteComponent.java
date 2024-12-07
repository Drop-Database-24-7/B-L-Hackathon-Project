package DROP_DATABASE.controller;

import DROP_DATABASE.dto.Satelite;
import DROP_DATABASE.dto.SatelitesAbove;
import Utility.Point;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Component
public class SateliteComponent {
    private final RestTemplate restTemplate;
    private final static String API_KEY = "EBGCQ5-AKDT2G-DS7HUN-5DR1"; //for developement purposes TODO: move it to a config file

    public SateliteComponent(RestTemplate restTemplate){
        this.restTemplate = restTemplate;
    }

    public Satelite getSatelite(int id, float observer_lat, float observer_lng){
        String apiUrl =
                "https://api.n2yo.com/rest/v1/satellite/positions/"
                        + id
                        + "/"
                        + observer_lat
                        + "/"
                        + observer_lng
                        + "/0/1/&apiKey="
                        + API_KEY;
        return restTemplate.getForObject(apiUrl, Satelite.class);
    }

    public SatelitesAbove getAllAbove(Point observerPoint){
        String apiUrl = "https://api.n2yo.com/rest/v1/satellite/above/"
                + observerPoint.getX()
                + "/"
                + observerPoint.getY()
                + "/"
                + "0/15/0/&apiKey="
                + API_KEY;
        return restTemplate.getForObject(apiUrl, SatelitesAbove.class);
    }

}
