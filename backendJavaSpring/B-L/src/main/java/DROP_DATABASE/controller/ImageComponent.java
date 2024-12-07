package DROP_DATABASE.controller;

import DROP_DATABASE.dto.Image;
import DROP_DATABASE.dto.Satelite;
import Utility.Point;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class ImageComponent {
    private final RestTemplate restTemplate;
    private final static String API_KEY = "ZgIxhHzAajsd6J2SSnLpWS6RJtyXKeAemAB53csy"; //for developement purposes TODO: move it to a config file

    public ImageComponent(RestTemplate restTemplate){
        this.restTemplate = restTemplate;
    }

    public Image getImage(Point location){
        String apiUrl = "https://api.nasa.gov/planetary/earth/assets?lon="
                + location.getY()
                + "&lat="
                + location.getX()
                + "&dim=0.45&api_key="
                + API_KEY;
        return restTemplate.getForObject(apiUrl, Image.class);
    }
}
