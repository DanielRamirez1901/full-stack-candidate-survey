package services;

import model.Candidatos;
import providers.CandidatosProvider;

import javax.ws.rs.*;
import java.sql.SQLException;
import java.util.ArrayList;

@Path("candidatos")
public class CandidatosServices {

    Response response = new Response();

    @GET
    @Path("echo")
    public String echo(){
        return "echo";
    }


    @POST
    @Path("create")
    @Consumes("application/json")
    public javax.ws.rs.core.Response create(Candidatos candidato){
        try {
            CandidatosProvider provider = new CandidatosProvider();
            provider.create(candidato);
            return response.successfully();
        } catch (SQLException exception) {
            exception.printStackTrace();
            return  response.successfully();
        }
    }


    @GET
    @Path("all")
    public javax.ws.rs.core.Response getAll(){
        try {
            CandidatosProvider provider = new CandidatosProvider();
            ArrayList<Candidatos> candidatos = provider.getAllCandidatos();
            return javax.ws.rs.core.Response
                    .ok(candidatos)
                    .header("Content-Type","application/json")
                    .build();
        } catch (SQLException exception) {
            exception.printStackTrace();
            return response.unsuccessfully();
        }

    }


    @PUT
    @Path("addVote/{id}")
    public javax.ws.rs.core.Response addProduct(@PathParam("id") int id){
        try {
            CandidatosProvider provider = new CandidatosProvider();
            provider.addVote(id);
            return  response.successfully();
        } catch (SQLException exception) {
            exception.printStackTrace();
            return response.unsuccessfully();
        }
    }

}
