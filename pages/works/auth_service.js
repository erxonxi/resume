import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Center,
  Image
} from '@chakra-ui/react';
import Layout from '../../components/layouts/article';
import { Title, Meta } from '../../components/work';
import P from '../../components/paragraph';

const Work = () => (
  <Layout title="amembo">
    <Container>
      <Title>
        Servicio Autentificación <Badge>API REST</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/works/python-banner.png" alt="icon" />
      </Center>
      <P>
        Es un servicio que nos permite crear un usuario y logearnos. Al hacer
        el login recibiremos un token ( JsonWebToken ), que nos permitirá
        acceder a los endpoins que esten protegidos.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Lenguaje</Meta>
          <span>Python 3.9</span>
        </ListItem>
        <ListItem>
          <Meta>Framework</Meta>
          <span>FastAPI</span>
        </ListItem>
        <ListItem>
          <Meta>Source Code</Meta>
          <Link href="https://github.com/erxonxi/auth_service" target="_blank">
            GitHub
          </Link>
        </ListItem>
      </List>
    </Container>
  </Layout>
);

export default Work;
