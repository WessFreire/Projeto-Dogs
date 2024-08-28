import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Foms/Input';
import Button from '../Foms/Button';
import useForm from '../../Hooks/useForm';
import UserContext from '../../UserContext';
import Error from '../Helper/Error';
import styles from './LoginForm.module.css';
import stylesBTN from '../Foms/Button.module.css';
import Head from '../Helper/Head';

const LoginForm = () => {
  const username = useForm('');
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }
  return (
    <section className="animeLeft">
      <Head title="login" />
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input type="text" label="Usuário" name="username" {...username} />
        <Input type="password" label="Senha" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error && 'Dados incorrétos'} />
      </form>
      <Link to="/login/perdeu" className={styles.perdeu}>
        Perdeu a senha
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site</p>
      </div>
      <Link to="/login/criar" className={stylesBTN.button}>
        Cadastro
      </Link>
    </section>
  );
};

export default LoginForm;
