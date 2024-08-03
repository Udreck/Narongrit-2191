import React from 'react';
import { View, Text } from 'react-native';
import { stylesPractice} from '../styles/styles';

interface AppFooterProps {
  footerText: string;
}

const AppFooter: React.FC<AppFooterProps> = ({ footerText }) => {
  return (
    <View style={stylesPractice.footer}>
      <Text style={stylesPractice.footerText}>{footerText}</Text>
    </View>
  );
};
export default AppFooter;