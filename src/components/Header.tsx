import { View } from "native-base";

import Logo from '@assets/logo.svg'

export function Header(){
  return (
    <View 
      bg='gray.900'
      height={173}
      justifyContent='center'
      alignItems='center'
    >
      <Logo />
    </View>
  );
}