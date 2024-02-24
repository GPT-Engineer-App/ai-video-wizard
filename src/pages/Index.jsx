import React from "react";
import { Box, Button, Container, Heading, Text, VStack, Image, SimpleGrid, Icon, useColorModeValue, Link, Stack, Input, Textarea } from "@chakra-ui/react";
import { FaPlay, FaCloudUploadAlt, FaRobot } from "react-icons/fa";

const Index = () => {
  const bg = useColorModeValue("gray.50", "gray.800");
  const color = useColorModeValue("gray.800", "white");

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={10} textAlign="center">
        <Box>
          <Heading as="h1" size="2xl" mb={2}>
            AI-Powered Video Creation
          </Heading>
          <Text fontSize="xl">Generate stunning videos effortlessly with the power of AI</Text>
        </Box>

        <Box>
          <Image borderRadius="md" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhaSUyMHZpZGVvJTIwY3JlYXRpb258ZW58MHx8fHwxNzA4NzcwMjUyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="AI Video Creation" />
        </Box>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Feature icon={<FaPlay />} title="Interactive Demos" text="Watch AI create videos in real-time with interactive examples." />
          <Feature icon={<FaCloudUploadAlt />} title="Easy Uploads" text="Upload your scripts and let AI do the rest to bring your story to life." />
          <Feature icon={<FaRobot />} title="Advanced AI" text="Leverage cutting-edge AI algorithms for high-quality video production." />
        </SimpleGrid>

        <Stack spacing={4} direction={{ base: "column", md: "row" }} w="full">
          <Input placeholder="Enter your email" bgColor={bg} color={color} />
          <Button rightIcon={<FaCloudUploadAlt />} colorScheme="blue" variant="solid">
            Get Started
          </Button>
        </Stack>

        <Stack spacing={6} w="full">
          <Textarea placeholder="Type your script here..." bgColor={bg} color={color} />
          <Button leftIcon={<FaRobot />} colorScheme="green" size="lg" isFullWidth variant="solid">
            Create Video
          </Button>
        </Stack>
      </VStack>

      <Box textAlign="center" fontSize="sm" mt={10}>
        <Text>
          Powered by{" "}
          <Link href="https://gpt.ai" isExternal color="blue.500">
            GPT AI
          </Link>
        </Text>
      </Box>
    </Container>
  );
};

const Feature = ({ icon, title, text }) => {
  return (
    <VStack>
      <Icon as={icon} w={10} h={10} />
      <Heading as="h3" size="lg">
        {title}
      </Heading>
      <Text color={useColorModeValue("gray.600", "gray.400")}>{text}</Text>
    </VStack>
  );
};

export default Index;
