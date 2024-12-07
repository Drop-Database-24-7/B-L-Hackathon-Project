package DROP_DATABASE.service;

import DROP_DATABASE.controller.ImageComponent;
import DROP_DATABASE.dto.Image;
import Utility.Point;
import org.springframework.stereotype.Service;

@Service
public class ImageServiceImplementation implements ImageService {
    private final ImageComponent imageComponent;

    public ImageServiceImplementation(ImageComponent imageComponent){
        this.imageComponent = imageComponent;
    }

    @Override
    public Image getImage(Point location) {
        return imageComponent.getImage(location);
    }
}
