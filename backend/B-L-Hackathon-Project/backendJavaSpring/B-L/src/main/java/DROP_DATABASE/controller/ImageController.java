package DROP_DATABASE.controller;

import DROP_DATABASE.dto.Image;
import DROP_DATABASE.dto.ImageResource;
import DROP_DATABASE.service.ImageService;
import Utility.Point;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/image")
public class ImageController {

    private final ImageService imageService;

    public ImageController(ImageService imageService){
        this.imageService = imageService;
    }

    @RequestMapping("/{lat}/{lng}")
    public Image getImage(@PathVariable float lat, @PathVariable float lng) {
        return imageService.getImage(Point.Of(lat,lng));
    }

}
