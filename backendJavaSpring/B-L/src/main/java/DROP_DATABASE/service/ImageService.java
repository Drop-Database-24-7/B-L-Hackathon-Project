package DROP_DATABASE.service;

import DROP_DATABASE.dto.Image;
import Utility.Point;

public interface ImageService {
    Image getImage(Point location);
}
