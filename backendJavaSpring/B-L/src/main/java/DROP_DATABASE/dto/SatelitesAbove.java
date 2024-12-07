package DROP_DATABASE.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.Setter;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;

@Data
@Setter
public class SatelitesAbove {
    @JsonProperty("info")
    InfoAbove infoAbove;
    @JsonProperty("above")
    List<LinkedHashMap<String,Object>> above = new ArrayList<>();

    public List<LinkedHashMap<String,Object>> getAbove() {
        return above;
    }

    public InfoAbove getInfoAbove() {
        return infoAbove;
    }
}
