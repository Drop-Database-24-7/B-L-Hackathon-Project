package DROP_DATABASE.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class Image {
    @JsonProperty("date")
    String date;
    @JsonProperty("id")
    String id;
    @JsonProperty("resource")
    ImageResource resource;
    @JsonProperty("service_version")
    String serviceVersion;
    @JsonProperty("url")
    String imageUrl;
}
