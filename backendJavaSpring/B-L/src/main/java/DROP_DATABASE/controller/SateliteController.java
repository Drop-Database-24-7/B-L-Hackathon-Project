package DROP_DATABASE.controller;

import DROP_DATABASE.dto.Satelite;
import DROP_DATABASE.service.SateliteService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/satelite")
public class SateliteController {
    private final SateliteService sateliteService;

    public SateliteController(SateliteService sateliteService){
        this.sateliteService = sateliteService;
    }

    @GetMapping("/{id}/{observer_lat}/{observer_lng}")
    public Satelite getSatelite(@PathVariable int id, @PathVariable float observer_lat, @PathVariable float observer_lng){
        return sateliteService.getSatelite(id,observer_lat,observer_lng);
    }

}
