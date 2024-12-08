package DROP_DATABASE.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class ImageResource {
    @JsonProperty("dataset")
    String dataSet;
    @JsonProperty("planet")
    String planet;
}
