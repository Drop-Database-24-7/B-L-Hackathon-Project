package DROP_DATABASE.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Setter
@Getter
public class InfoAbove {
    @JsonProperty("category")
    private String category;
    @JsonProperty("transactionscount")
    private float transactionsCount;
    @JsonProperty("satcount")
    private float satCount;
}
