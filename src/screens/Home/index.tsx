import { StatusBar, HStack, Text, VStack, Center, Divider, FlatList, Button as ButtonNativeBase, useToast } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import uuid from 'react-native-uuid'

import ImageEmpytTasks from '@assets/empyt.svg'

import { Input } from "@components/Input";
import { Header } from "@components/Header";
import { TaskCard } from "@components/TaskCard";

type TaskProps = {
  id: string,
  description: string,
  isCompleted: boolean,
}

export function Home(){
  const [taskName, setTaskName] = useState('')
  const [amountTaskCompleted, setAmountTaskCompleted] = useState(0)
  const [tasks, setTasks] = useState<TaskProps[]>([])

  const toast = useToast()

  function handleAddTaskName() {
    if (taskName.length === 0) {
      toast.show({
        title: 'Digite uma tarefa para adicionar.',
        placement: 'top',
        bgColor: 'orange.400',
      })
      return 
    }

    const taskAlreadyExists = tasks.find(task => task.description === taskName)

    if (taskAlreadyExists) {
      toast.show({
        title: 'Essa tarefa já existe.',
        placement: 'top',
        bgColor: 'orange.400',
      })
      return 
    }
    
    setTasks(prevState => [...prevState, {
      id: `${uuid.v4()}`,
      description: taskName,
      isCompleted: false,
    }])

    setTaskName('')
  }

  function handleDeleteTask(id: string) {
    setTasks(prevState => prevState.filter(item => item.id !== id))

    toast.show({
      title: 'Tarefa removida!',
      placement: 'top',
      bgColor: 'purple.500'
    })
  }

  // const totalTaskCompleted = tasks.reduce((acc, task) => {
  //   return acc + task.isCompleted
  // }, )

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
            <Text 
                bg='gray.400' 
                color='gray.100' 
                fontSize={12} 
                fontWeight='bold' 
                px={2}
                py='3px'

                ml={2}
                rounded='full'
              >
                {tasks.length}
              </Text>
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
            <Text
              bg='gray.400' 
              color='gray.100' 
              fontSize={12} 
              fontWeight='bold' 
              px={2}
              py='3px'
              ml={2}
              rounded='full'
              >
                {amountTaskCompleted}
            </Text>
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
              isCompleted={item.isCompleted}
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