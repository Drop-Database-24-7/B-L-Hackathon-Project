package DROP_DATABASE.controller;

import DROP_DATABASE.dto.Satelite;
import DROP_DATABASE.dto.SatelitesAbove;
import DROP_DATABASE.service.SateliteService;
import Utility.Point;
import Utility.SateliteCordinates;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;

@RestController
@RequestMapping("/satelite")
public class SateliteController {
    private final SateliteService sateliteService;

    public SateliteController(SateliteService sateliteService) {
        this.sateliteService = sateliteService;
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
    public List<SateliteCordinates> getAllAbovetrunc(@PathVariable float observer_lat, @PathVariable float observer_lng) {
        List<SateliteCordinates> sateliteTmpList = new ArrayList<>();
        for (LinkedHashMap<String, Object> saO : sateliteService.getAllAbove(Point.Of(observer_lat, observer_lng)).getAbove()) {
            int satid = (int) saO.get("satid");
            String satname = (String) saO.get("satname");
            double satlat = (double) saO.get("satlat");
            double satlng = (double) saO.get("satlng");

            SateliteCordinates sateliteCordinates = new SateliteCordinates(satid,satname, satlat, satlng);
            sateliteTmpList.add(sateliteCordinates);
        }
        return sateliteTmpList;
    }

}
