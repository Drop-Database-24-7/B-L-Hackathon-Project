package Utility;
@lombok.Setter
public class SateliteCordinates {
    private int satid;
    private String satname;
    private float satlat;
    private float satlng;

    public SateliteCordinates(int satid,String satname, float satlat, float satlng) {
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
    public float getSatlat() {
        return satlat;
    }
    public float getSatlng() {
        return satlng;
    }
}
