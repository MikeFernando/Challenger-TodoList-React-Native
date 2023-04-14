import { Box, Checkbox, HStack, Icon } from "native-base";
import { TouchableOpacity } from "react-native";
import { EvilIcons  } from '@expo/vector-icons';
import { _Text } from "react-native";

type Props = {
  description: string
  isCompleted: boolean
  onRemove: () => void
}

export function TaskCard({ description, isCompleted, onRemove }: Props){
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
            _text={{
              color: 'gray.100',
            }}
            _checked={{
              onChange: () => isCompleted = true,
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