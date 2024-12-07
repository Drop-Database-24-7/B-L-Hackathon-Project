package DROP_DATABASE.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;

@Data
@Getter
@Setter
public class Satelite {
    @JsonProperty("info")
    Info InfoObject;
    @JsonProperty("positions")
    ArrayList< Object > positions = new ArrayList < Object > ();
}

