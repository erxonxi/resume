import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';
import thumbInkdrop from '../public/images/works/python-banner.png';

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Pequeños Proyectos
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="auth_service"
            title="Servicio Autentificación"
            thumbnail={thumbInkdrop}>
            Servicio Autentificación.
            Incorpora GitHub Actions para la construcción de la imagen.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Otros
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>

      </SimpleGrid>
    </Container>
  </Layout>
);

export default Works;
