import React, { useCallback, useRef } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

import logo from '../../assets/logo.svg';
import Input from '../../components/Input';

import { Container, Content, Background } from './styles';

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string()
          .min(8, 'No mínimo 8 caracteres'),
      });

      console.log('Here');

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (error) {
      const errors = getValidationErrors(error);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="Logo Angeloni" />

        <Form ref={formRef}  onSubmit={handleSubmit}>
          <Input name="email" icon={FiMail} type="text" placeholder="Email" />
          <Input name="password" icon={FiLock} type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </Form>
      </Content>
    </Container>
  );
};

export default Login;
