import { Checkbox, HStack, Icon, Box } from "native-base";
import { TouchableOpacity } from "react-native";
import { EvilIcons  } from '@expo/vector-icons';
import { _Text } from "react-native";
import { useState } from "react";

import { useTask } from "@hooks/useTask";

type Props = {
  description: string
  onRemove: () => void
}

export function TaskCard({ description, onRemove }: Props){
  const [toggle, setToggle] = useState(true)

  const { incrementOrDecreaseTasks } = useTask()

  function handleToggle() {
    setToggle(!toggle)
    toggle 
      ? incrementOrDecreaseTasks(true) 
      : incrementOrDecreaseTasks(false)
  }

  return (
    <HStack bg='gray.500' borderRadius={10} py={4} px={5} mt={2} borderWidth={1} borderColor='gray.400'>
      <HStack alignItems='center' justifyContent='space-between' w='100%'>
        <Box>
          <Checkbox 
            p={1}
            maxW='89%'
            borderWidth={1.5}
            borderRadius={15}
            borderColor='blue.400' 
            backgroundColor= 'gray.600'
            value={description}
            onChange={handleToggle} 
            _text={{
              color: 'gray.100',
            }}
            _checked={{
              backgroundColor: 'purple.500',
              borderColor: 'purple.500',
              _text: {
                textDecorationLine: 'line-through',
                color: 'gray.300'
              }
            }}
          >
            {description}
          </Checkbox>
        </Box>
        
        <HStack ml={2} w={'11%'}>
          <TouchableOpacity onPress={onRemove}>
            <Icon size={8} as={
              <EvilIcons name="trash" color="gray.300" />} />
          </TouchableOpacity>
        </HStack>
      </HStack>
    </HStack>
  );
}