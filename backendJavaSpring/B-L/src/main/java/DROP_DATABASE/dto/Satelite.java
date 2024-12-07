package DROP_DATABASE.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;

@Data
@Getter
@Setter
public class Satelite {
    @JsonProperty("info")
    InfoSatelite infoSateliteObject;
    @JsonProperty("positions")
    List<LinkedHashMap<String,Object>> positions = new ArrayList<>();

    public List<LinkedHashMap<String,Object>> getPositions() {
        return positions;
    }
}

