package providers;

import db.DbConnection;
import model.Candidatos;

import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class CandidatosProvider {

    DbProvider connection = new DbProvider();

    //Metodo para la creacion de un usuario
    public void create(Candidatos candidato) throws SQLException {
        candidato.setTotalVotos(0);
        String sql = ("INSERT INTO usuarios(nombre,totalVotos) VALUES ('$NOMBRE',$TOTALVOTOS)")
                .replace("$NOMBRE",candidato.getNombre())
                .replace("$TOTALVOTOS",""+candidato.getTotalVotos());
        connection.connection(sql);
    }


    //Metodo para la obtencion de todos los usuarios con todos sus parametros
    public ArrayList<Candidatos> getAllCandidatos() throws SQLException {
        ArrayList<Candidatos> output = new ArrayList<>();

        String sql = "SELECT * FROM usuarios";
        DbConnection connection =  new DbConnection();
        connection.connect();
        ResultSet resultSet =  connection.getDataBySQL(sql);

        while(resultSet.next()){
            int id = resultSet.getInt(resultSet.findColumn("id"));
            String nombre = resultSet.getString(resultSet.findColumn("nombre"));
            int totalVotos = resultSet.getInt(resultSet.findColumn("totalVotos"));

            Candidatos user = new Candidatos(id,nombre,totalVotos);
            output.add(user);
        }

        connection.disconnect();
        return output;
    }


    public void addVote(int id)  throws SQLException{
        String sql = ("UPDATE usuarios SET totalVotos= $TOTALVOTOS WHERE id=$ID");
        Candidatos candidato = getCandidato(id);
        int votosTotales = candidato.getTotalVotos()+1;//Sumo un solo voto por cada invocacion del metodo(pulsacion boton votar)
        candidato.setTotalVotos(votosTotales);
        sql = sql.replace("$ID",""+candidato.getId());
        sql = sql.replace("$TOTALVOTOS",""+candidato.getTotalVotos());
        connection.connection(sql);
    }

    public Candidatos getCandidato(int idParam) throws SQLException {
        Candidatos output = new Candidatos();

        String sql = "SELECT * FROM usuarios";
        DbConnection connection =  new DbConnection();
        connection.connect();
        ResultSet resultSet =  connection.getDataBySQL(sql);

        while(resultSet.next()){
            int id = resultSet.getInt(resultSet.findColumn("id"));
            String nombre = resultSet.getString(resultSet.findColumn("nombre"));
            int totalVotos = resultSet.getInt(resultSet.findColumn("totalVotos"));

            if(idParam == id){
                output.setId(id);output.setNombre(nombre);output.setTotalVotos(totalVotos);
            }
        }

        connection.disconnect();
        return output;
    }
}
