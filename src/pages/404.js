import React from 'react';

import '../styles/css/404.css';
import ErrorImg from '@images/art/error404.jpg';
import Layout from '@common/Layout';
import { Container } from '@components/global';

const NotFoundPage = () => (
  <Layout>
    <Container>
      <section class="errorSection">
        <h1 class="errorTitle">PAGINA NO ENCONTRADA</h1>
        <img class="errorImg" src={ErrorImg} alt="Error404" />
      </section>
    </Container>
  </Layout>
);

export default NotFoundPage;
