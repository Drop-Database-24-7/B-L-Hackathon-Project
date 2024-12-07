package DROP_DATABASE.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Data
@Setter
public class SatelitesAbove {
    @JsonProperty("info")
    InfoAbove infoAbove;
    @JsonProperty("above")
    List<Object> above = new ArrayList<>();

    public List<Object> getAbove() {
        return above;
    }

    public InfoAbove getInfoAbove() {
        return infoAbove;
    }
}
