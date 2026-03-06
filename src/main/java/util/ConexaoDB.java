package util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConexaoDB {
	
	private static final String URL = "jdbc:postgresql://ep-twilight-moon-acwrtu3o-pooler.sa-east-1.aws.neon.tech/aulas";
	private static final String USUARIO = "senaipato";
	private static final String SENHA = "SenaiPatoBranco";
	
	public static Connection getConexao() throws SQLException {
		Connection conexao = DriverManager.getConnection(URL, USUARIO, SENHA);
		System.out.println("Conexão deu boa");
		return conexao;
	}
	
	public static void fecharConexao(Connection conexao) {
		if (conexao != null) {
			try {
				conexao.close();
				System.out.println("Fechei");
			} catch (SQLException r) {
				System.err.println("Não fechou");
				System.err.println("Problema: " + r.getMessage());
			}
		}
	}
	
}
