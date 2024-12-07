package Utility;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class Point {
    private double x;
    private double y;

    public Point(double x, double y) {
        this.x = x;
        this.y = y;
    }

}
