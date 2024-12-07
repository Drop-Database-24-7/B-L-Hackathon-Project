package DROP_DATABASE.service;

import DROP_DATABASE.dto.Satelite;
import DROP_DATABASE.dto.SatelitesAbove;
import Utility.Point;
import org.springframework.context.annotation.Bean;
import java.util.List;

public interface SateliteService {

    Satelite getSatelite(int id, Point observerPoint);

    SatelitesAbove getAllAbove(Point observerPoint );
}
