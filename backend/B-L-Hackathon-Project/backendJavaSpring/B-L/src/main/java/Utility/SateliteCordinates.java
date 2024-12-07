package Utility;
@lombok.Setter
public class SateliteCordinates {
    private int satid;
    private String satname;
    private double satlat;
    private double satlng;

    public SateliteCordinates(int satid,String satname, double satlat, double satlng) {
        this.satid = satid;
        this.satname = satname;
        this.satlat = satlat;
        this.satlng = satlng;
    }

    public int getSatid() {
        return satid;
    }

    public String getSatname() {
        return satname;
    }

    public double getSatlat() {
        return satlat;
    }

    public double getSatlng() {
        return satlng;
    }
}
