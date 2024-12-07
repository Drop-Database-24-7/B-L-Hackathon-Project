package DROP_DATABASE.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Setter
@Getter
public class Info {
    @JsonProperty("satname")
    private String satname;
    @JsonProperty("satid")
    private float satid;
    @JsonProperty("transactionscount")
    private float transactionscount;

}
