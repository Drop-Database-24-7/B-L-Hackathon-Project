package DROP_DATABASE.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Setter
@Getter
public class InfoSatelite {
    @JsonProperty("satname")
    private String satName;
    @JsonProperty("satid")
    private float satId;
    @JsonProperty("transactionscount")
    private float transactionsCount;

}
