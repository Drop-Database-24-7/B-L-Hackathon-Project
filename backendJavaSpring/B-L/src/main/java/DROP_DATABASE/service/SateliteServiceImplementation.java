package DROP_DATABASE.service;

import DROP_DATABASE.controller.SateliteComponent;
import DROP_DATABASE.controller.SateliteController;
import DROP_DATABASE.dto.Satelite;
import org.springframework.stereotype.Service;

@Service
public class SateliteServiceImplementation implements SateliteService {

    private final SateliteComponent sateliteComponent;

    public SateliteServiceImplementation(SateliteComponent sateliteComponent){
        this.sateliteComponent = sateliteComponent;
    }
    @Override
    public Satelite getSatelite(int id, float observer_lat, float observer_lng) {
        return sateliteComponent.getSatelite(id,observer_lat,observer_lng);
    }
}
