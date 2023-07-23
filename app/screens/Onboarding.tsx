import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { colors, fontSizes, typography } from '../theme';
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
          <Text
            style={{
              fontSize: fontSizes.xxLarge,
              color: colors.primary,
              fontFamily: typography.primaryText.bold,
              textAlign: 'center',
            }}
          >
            Gerencie suas tarefas aqui
          </Text>

          <Text
            style={{
              fontSize: fontSizes.small,
              color: colors.lightText,
              fontFamily: typography.primaryText.normal,
              textAlign: 'center',
              marginTop: 20,
            }}
          >
            O melhor aplicativo de gerenciamento de tarefas que você vai
            encontrar
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            paddingTop: 60,
            flexDirection: 'row',
          }}
        >
          <TouchableOpacity
            onPress={() => navigate('Login')}
            style={{
              backgroundColor: colors.primary,
              paddingVertical: 15,
              paddingHorizontal: 12,
              marginRight: 2,
              width: '48%',
              borderRadius: 4,
              shadowColor: colors.primary,
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.3,
              shadowRadius: 10,
            }}
          >
            <Text
              style={{
                fontFamily: typography.primaryText.bold,
                color: colors.darkTitle,
                fontSize: fontSizes.medium,
                textAlign: 'center',
              }}
            >
              Entrar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate('Login')}
            style={{
              backgroundColor: colors.secondary,
              paddingVertical: 15,
              paddingHorizontal: 12,
              marginLeft: 2,
              width: '48%',
              borderRadius: 4,
            }}
          >
            <Text
              style={{
                fontFamily: typography.primaryText.bold,
                color: colors.lightTitle,
                fontSize: fontSizes.medium,
                textAlign: 'center',
              }}
            >
              Cadastrar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({});
