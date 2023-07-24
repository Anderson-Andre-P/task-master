import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  View,
  StyleSheet,
} from 'react-native';
import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { TextTitle } from '../components/Texts/TextTitle';
import { TextBody } from '../components/Texts/TextBody';
import { PrimaryButton } from '../components/Buttons/FullButtons/PrimaryButton';
import { SecondaryButton } from '../components/Buttons/FullButtons/SecondaryButton';
const { height } = Dimensions.get('window');

type Props = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

const OnboardingScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  return (
    <SafeAreaView>
      <View>
        <ImageBackground
          style={{
            height: height / 2.5,
            marginTop: 40,
          }}
          resizeMode="contain"
          source={require('../assets/images/welcome-img.png')}
        />
        <View
          style={{
            paddingHorizontal: 40,
            paddingTop: 40,
          }}
        >
          <TextTitle text={'Gerencie suas tarefas aqui'} />
          <TextBody
            text={
              'O melhor aplicativo para o gerenciamento de tarefas que você vai encontrar!'
            }
            isDark={false}
          />
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            paddingTop: 60,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <PrimaryButton
            text={'Entrar'}
            primaryButtonCustomStyle={styles.primaryButtonStyle}
            onPress={() => navigate('Login')}
          />
          <SecondaryButton
            text={'Cadastrar'}
            secondaryButtonCustomStyle={styles.secondaryButtonStyle}
            onPress={() => navigate('Login')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  primaryButtonStyle: {
    width: '48%',
  },
  secondaryButtonStyle: {
    width: '48%',
  },
});

export default OnboardingScreen;
