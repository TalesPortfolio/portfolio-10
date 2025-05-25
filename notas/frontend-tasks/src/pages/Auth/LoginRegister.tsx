import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "./styles";
import api from '../../services/api';

// Interfaces para tipagem da resposta da API
interface User {
  id: number;
  email: string;
  name: string;
  surname: string;
  city: string;
  timezone: string;
}

interface AuthResponse {
  user: User;
}

const LoginRegister = () => {
  const [aba, setAba] = useState<"login" | "cadastro">("login");
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    surname: "",
    city: "",
    timezone: "UTC",
  });

  const [loading, setLoading] = useState(false); // Estado de carregamento
  const navigate = useNavigate();

  const aoMudar = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const aoEnviar = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (aba === "cadastro") {
        // Cadastrar usuário
        await api.post("/Users", {
          email: form.email,
          password: form.password,
          name: form.name,
          surname: form.surname,
          city: form.city,
          timezone: form.timezone || "UTC",
        });

        alert("Usuário cadastrado!");
        setAba("login");
      } else {
        // Fazer login
        const res = await axios.post<AuthResponse>(
          "http://localhost:4000/login",
          {
            email: form.email,
            password: form.password,
          }
        );

        // Salvar usuário no localStorage
        if (!res.data?.user) {
          throw new Error("Login falhou: usuário não encontrado.");
        }

        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/tarefas");
      }
    } catch (error: any) {
      // Tratamento de erro
      const mensagemErro =
        error.response?.data?.error ||
        error.message ||
        "Erro ao processar solicitação";

      alert(mensagemErro);
    } finally {
      setLoading(false); // Finaliza carregamento
    }
  };

  return (
    <S.Container>
      <div>
        <S.Tab ativa={aba === "login"} onClick={() => setAba("login")}>
          Login
        </S.Tab>
        <S.Tab ativa={aba === "cadastro"} onClick={() => setAba("cadastro")}>
          Cadastro
        </S.Tab>
      </div>

      <S.Formulario onSubmit={aoEnviar}>
        {aba === "cadastro" && (
          <>
            <S.Campo
              name="name"
              placeholder="Nome"
              value={form.name}
              onChange={aoMudar}
              required
            />
            <S.Campo
              name="surname"
              placeholder="Sobrenome"
              value={form.surname}
              onChange={aoMudar}
              required
            />
            <S.Campo
              name="city"
              placeholder="Cidade"
              value={form.city}
              onChange={aoMudar}
              required
            />
          </>
        )}

        <S.Campo
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={aoMudar}
          required
        />
        <S.Campo
          type="password"
          name="password"
          placeholder="Senha"
          value={form.password}
          onChange={aoMudar}
          required
        />

        <S.Botao type="submit" disabled={loading}>
          {loading ? "Carregando..." : aba === "login" ? "Entrar" : "Cadastrar"}
        </S.Botao>
      </S.Formulario>
    </S.Container>
  );
};

export default LoginRegister;
