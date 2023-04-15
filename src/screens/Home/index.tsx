import { StatusBar, HStack, Text, VStack, Center, Divider, FlatList, Button as ButtonNativeBase, Box } from "native-base";
import { Ionicons } from "@expo/vector-icons";

import { useTask} from "@hooks/useTask";

import ImageEmpytTasks from '@assets/empyt-task.svg'

import { Input } from "@components/Input";
import { Header } from "@components/Header";
import { TaskCard } from "@components/TaskCard";

export function Home(){
  const { 
    tasks, 
    taskName, 
    setTaskName, 
    handleDeleteTask,
    handleAddTaskName, 
    amountTaskCompleted 
  } = useTask()

  return (
    <>
      <StatusBar translucent backgroundColor='transparent' />
      <Header />

      <VStack flex={1} bg='gray.600' p={6} >
        <HStack mt={-12}>
          <Input 
            value={taskName} 
            numberOfLines={1}
            onChangeText={setTaskName}
            keyboardAppearance="dark"
          />
          <ButtonNativeBase 
            bg='blue.500' 
            h={52} 
            w={52} 
            borderRadius={8}
            onPress={handleAddTaskName}
          >
            <Ionicons name="add-circle-outline" size={20} color="white" />
          </ButtonNativeBase>
        </HStack>

        <HStack justifyContent='space-between' mt={8}>
          <HStack justifyContent='center' alignItems='center'>
            <Text 
              color='blue.400' 
              fontWeight='bold' 
              fontSize={16} 
              lineHeight={17}
            >
              Criadas
            </Text>
            <Box borderWidth='1' borderColor='gray.400' rounded='full' ml={2} px={2} py={1} bg='gray.400'>
              <Text 
                  color='gray.100' 
                  fontSize={12} 
                  fontWeight='bold' 
                >
                  {tasks?.length}
              </Text>
            </Box>
          </HStack>
          
          <HStack justifyContent='center' alignItems='center'>
            <Text 
              color='purple.400' 
              fontWeight='bold' 
              fontSize={16}
              fontFamily='body'
              lineHeight={17}
            >
              Concluídas
            </Text>
            <Box borderWidth='1' borderColor='gray.400' rounded='full' ml={2} px={2} py={1} bg='gray.400'>
              <Text
                bg='gray.400' 
                color='gray.100' 
                fontSize={12} 
                fontWeight='bold' 
                rounded='full'
                >
                  {amountTaskCompleted}
              </Text>
            </Box>
          </HStack>
        </HStack>

        <Divider bg='gray.500' my={4} h={0.95} />

        <FlatList
          data={tasks}
          keyExtractor={item => item.id}
          renderItem={({ item }) => 
            <TaskCard
              key={item.id}
              description={item.description}
              onRemove={() => handleDeleteTask(item.id)}
            />
          }
          ListEmptyComponent={() => (
            <VStack mt={50}>
              <Center>
                <ImageEmpytTasks />
                <Text fontSize={16} color='gray.300' textAlign='center' fontWeight='bold' mt={5} lineHeight={20}>
                  Você ainda não tem tarefas cadastradas
                </Text>
                <Text fontSize={14} color='gray.300' textAlign='center'>
                  Crie tarefas e organize seus itens a fazer
                </Text>
              </Center>
            </VStack>
          )}
        />
      </VStack>
    </>
  );
}