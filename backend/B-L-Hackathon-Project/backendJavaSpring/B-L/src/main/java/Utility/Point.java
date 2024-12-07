package Utility;

public class Point {
    private final float X;
    private final float Y;

    public Point(float X, float Y) {
        this.X = X;
        this.Y = Y;
    }
    public static Point Of(float X, float Y){
        return new Point(X,Y);
    }

    public float getX() {
        return X;
    }

    public float getY() {
        return Y;
    }
}
