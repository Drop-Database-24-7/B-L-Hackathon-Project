package Utility;

public class SateliteMath {

    public static double Distance(Point p1, Point p2) {
        double dx = p2.getX() - p1.getX();
        double dy = p2.getY() - p1.getY();
        double answer;
        answer = Math.sqrt(dx * dx + dy * dy);
        return answer;
    }
}
