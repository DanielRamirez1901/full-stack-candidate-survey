package model;

public class Candidatos {

    private int id;
    private String nombre;
    private int totalVotos;

    public Candidatos() {
    }

    public Candidatos(int id, String nombre, int totalVotos) {
        this.id = id;
        this.nombre = nombre;
        this.totalVotos = totalVotos;
    }

    public int getId() {return id;}
    public void setId(int id) {this.id = id;}

    public String getNombre() {return nombre;}
    public void setNombre(String nombre) {this.nombre = nombre;}


    public int getTotalVotos() {return totalVotos;}
    public void setTotalVotos(int totalVotos) {this.totalVotos = totalVotos;}
}
