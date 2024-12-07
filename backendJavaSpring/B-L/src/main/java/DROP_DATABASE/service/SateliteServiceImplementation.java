package DROP_DATABASE.service;

import DROP_DATABASE.controller.SateliteComponent;
import DROP_DATABASE.dto.Satelite;
import DROP_DATABASE.dto.SatelitesAbove;
import Utility.Point;
import org.springframework.stereotype.Service;
@Service
public class SateliteServiceImplementation implements SateliteService {
    private final SateliteComponent sateliteComponent;
    public SateliteServiceImplementation(SateliteComponent sateliteComponent){
        this.sateliteComponent = sateliteComponent;
    }
    @Override
    public Satelite getSatelite(int id, Point observerPoint) {
        return sateliteComponent.getSatelite(id,observerPoint.getX(), observerPoint.getY());
    }
    @Override
    public SatelitesAbove getAllAbove(Point observerPoint) {
        return sateliteComponent.getAllAbove(observerPoint);
    }
}
