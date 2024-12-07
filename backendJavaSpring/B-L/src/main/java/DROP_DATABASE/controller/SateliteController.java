package DROP_DATABASE.controller;

import DROP_DATABASE.dto.Satelite;
import DROP_DATABASE.dto.SatelitesAbove;
import DROP_DATABASE.service.ImageService;
import DROP_DATABASE.service.SateliteService;
import Utility.Point;
import Utility.SateliteCordinates;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/satelite")
public class SateliteController {
    private final SateliteService sateliteService;
    private final ImageService imageService;

    public SateliteController(SateliteService sateliteService, ImageService imageService) {
        this.sateliteService = sateliteService;
        this.imageService = imageService;
    }

    @GetMapping("/{id}/{observer_lat}/{observer_lng}")
    public Satelite getSatelite(@PathVariable int id, @PathVariable float observer_lat, @PathVariable float observer_lng) {
        return sateliteService.getSatelite(id, Point.Of(observer_lat, observer_lng));
    }

    @GetMapping("/getAllAbove/{observer_lat}/{observer_lng}")
    public SatelitesAbove getAllAbove(@PathVariable float observer_lat, @PathVariable float observer_lng) {
        return sateliteService.getAllAbove(Point.Of(observer_lat, observer_lng));
    }

    @GetMapping("/getAllAbove/{observer_lat}/{observer_lng}/trunc")
    public List<SateliteCordinates> getAllAboveTrunc(@PathVariable float observer_lat, @PathVariable float observer_lng) {
        List<SateliteCordinates> sateliteTmpList = new ArrayList<>();
        for (LinkedHashMap<String, Object> saO : sateliteService.getAllAbove(Point.Of(observer_lat, observer_lng)).getAbove()) {
            int satid = (int) saO.get("satid");
            String satname = (String) saO.get("satname");
            double satlat = (double) saO.get("satlat");
            double satlng = (double) saO.get("satlng");
            SateliteCordinates sateliteCordinates = new SateliteCordinates(satid,satname, (float) satlat, (float) satlng); //strange cast, but doesn't work if I cast it earlier
            sateliteTmpList.add(sateliteCordinates);
        }
        return sateliteTmpList;
    }

    @GetMapping("/getImageForSatelite/{sateliteId}/{observer_lat}/{observer_lng}")

    public String getImageUrlForSatelite(@PathVariable String sateliteId, @PathVariable float observer_lat, @PathVariable float observer_lng ) {
        Satelite satelite = sateliteService.getSatelite(Integer.parseInt(sateliteId), Point.Of(observer_lng, observer_lat));
        LinkedHashMap<String, Object> locationMap = satelite.getPositions().getFirst();
        double lon = (double) locationMap.get("satlongitude");
        double lat = (double) locationMap.get("satlongitude");

        String returnString;
        try{
            returnString = imageService.getImage(Point.Of((float) lat,(float) lon)).getImageUrl();
        } catch (Exception e) {
            returnString = "Image not avaliable for coordinates: " + lat + " " + lon;
        }
        return  returnString;
    }
}
