package Utility;
@lombok.Setter
public class SateliteTmp {
    private int satid;
    private String satname;
    private String launchDate;
    private double satlat;
    private double satlng;
    private double satalt;

    public SateliteTmp(int satid, String satname, String launchDate, double satlat, double satlng, double satalt) {
        this.satid = satid;
        this.satname = satname;
        this.launchDate = launchDate;
        this.satlat = satlat;
        this.satlng = satlng;
        this.satalt = satalt;
    }

    public int getSatid() {
        return satid;
    }

    public String getSatname() {
        return satname;
    }

    public String getLaunchDate() {
        return launchDate;
    }

    public double getSatlat() {
        return satlat;
    }

    public double getSatlng() {
        return satlng;
    }

    public double getSatalt() {
        return satalt;
    }
}
