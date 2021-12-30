import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { GridItem } from '../components/grid-item';

import thumbKubernetesBanner from '../public/images/contents/kubernetes-banner.jpg';

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Publicaciones Populares
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Crear tu primer clúster de Kubernetes con k0s"
            thumbnail={thumbKubernetesBanner}
            href="https://blog.rubenruizpedreira.es/crear-tu-primer-cluster-de-kubernetes-con-k0s"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
);

export default Posts;
