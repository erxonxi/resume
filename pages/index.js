import NextLink from 'next/link';
import {
	Link,
	Container,
	Heading,
	Box,
	Image,
	Button,
	List,
	ListItem,
	Icon,
	useColorModeValue
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear } from '../components/bio';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { IoLogoInstagram, IoLogoGithub } from 'react-icons/io5';

const Home = () => (
	<Layout>
		<Container>
			<Box
				borderRadius="lg"
				mb={6}
				p={3}
				textAlign="center"
				bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
			>
				¡Hola, soy un pequeño desarollador de España!
			</Box>

			<Box display={{ md: 'flex' }}>
				<Box flexGrow={1}>
					<Heading as="h2" variant="page-title">
						Rubén Ruiz
					</Heading>
					<p>Desarollador Web</p>
				</Box>
				<Box
					flexShrink={0}
					mt={{ base: 4, md: 0 }}
					ml={{ md: 6 }}
					textAlign="center"
				>
					<Image
						borderColor="whiteAlpha.800"
						borderWidth={2}
						borderStyle="solid"
						maxWidth="100px"
						display="inline-block"
						borderRadius="full"
						src="/images/rubenruiz.png"
						alt="Profile image"
					/>
				</Box>
			</Box>

			<Section delay={0.1}>
				<Heading as="h3" variant="section-title">
					Trabajo
				</Heading>
				<Paragraph>
					Actualmente trabajo en Gestión de Calidad en Nemon Inteligence In Bissnes,
					realizando pruebas automatizadas en entornos de prueba.
				</Paragraph>
				<Paragraph>
					En mi tiempo libre me encanta trabajar en pequeños proyectos para continuar
					aprendiendo nuevas tecnologias o probando nuevos lenguajes.
				</Paragraph>
				<Box align="center" my={4}>
					<NextLink href="/works">
						<Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
							Mis Proyectos
						</Button>
					</NextLink>
				</Box>
			</Section>

			<Section delay={0.2}>
				<Heading as="h3" variant="section-title">
					Biografia
				</Heading>
				<BioSection>
					<BioYear>jul.2020 to dic.2021</BioYear>
					Nemon Inteligence In Bissness - Desarrollador Junior
				</BioSection>
				<BioSection>
					<BioYear>ene.2022 to present</BioYear>
					Nemon Inteligence In Bissness - Desarrollador Quality Assurance
				</BioSection>
			</Section>

			<Section delay={0.3}>
				<Heading as="h3" variant="section-title">
					Pasiones
				</Heading>
				<Paragraph>
					No solo el mundo del desarrollo me encanta, la parte de la arquitectura y sistemas también me fascina.
					Gracias a últimos avances como Docker o Kubernetes se ha vuelto más sencillo hasta para los desarrolladores.
					Y si hablamos de música, que decir, la música electrónica se ha ganado mi puesto número uno.
				</Paragraph>
			</Section>

			<Section delay={0.3}>
				<Heading as="h3" variant="section-title">
					¿Donde me puedes encontrar?
				</Heading>
				<List>
					<ListItem>
						<Link href="https://github.com/erxonxi" target="_blank">
							<Button
								variant="ghost"
								colorScheme="teal"
								leftIcon={<Icon as={IoLogoGithub} />}
							>
								@erxonxi
							</Button>
						</Link>
					</ListItem>
					<ListItem>
						<Link href="https://instagram.com/ruben.ruiz02" target="_blank">
							<Button
								variant="ghost"
								colorScheme="teal"
								leftIcon={<Icon as={IoLogoInstagram} />}
							>
								@ruben.ruiz02
							</Button>
						</Link>
					</ListItem>
				</List>

				<Box align="center" my={4}>
					<NextLink href="/posts">
						<Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
							Publicaciones Populares
						</Button>
					</NextLink>
				</Box>
			</Section>
		</Container>
	</Layout>
);

export default Home;
