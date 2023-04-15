import { Input as InputNativeBase } from 'native-base'
import { IInputProps } from 'native-base'

type Props = IInputProps & {}

export function Input({ ...rest }: Props){
  return (
    <InputNativeBase
      flex={1}
      placeholder='Adicione uma nova tarefa'
      placeholderTextColor='gray.300'
      bg='gray.500'
      px={4}
      mr={1}
      fontSize={16}
      border
      borderWidth={1}
      borderRadius={8}
      color='gray.100'
      borderColor='gray.900'
      fontFamily='body'
      _focus={{
        bg: 'gray.600',
        borderColor: 'purple.500'
      }}
      {...rest}
    />
  );
}