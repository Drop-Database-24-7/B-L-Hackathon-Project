package Utility;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class Point {
    private double X;
    private double Y;

    public Point(double x, double y) {
        this.X = x;
        this.Y = y;
    }

}
