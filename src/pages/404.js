import React from 'react';

import '../styles/css/404.css';
import ErrorImg from '@images/art/error404.jpg';
import Layout from '@common/Layout';
import { Container } from '@components/global';

const NotFoundPage = () => (
  <Layout>
    <Container>
      <h1>PAGINA NO ENCONTRADA</h1>
      <img src={ErrorImg} alt="Error404" />
    </Container>
  </Layout>
);

export default NotFoundPage;
