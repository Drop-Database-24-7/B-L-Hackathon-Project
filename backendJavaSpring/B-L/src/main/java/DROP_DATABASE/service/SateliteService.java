package DROP_DATABASE.service;

import DROP_DATABASE.dto.Satelite;
import org.springframework.context.annotation.Bean;

public interface SateliteService {
    Satelite getSatelite(int id, float observer_lat, float observer_lng);
}
