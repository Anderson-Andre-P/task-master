import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { colors, fontSizes, spacing, typography } from '../theme';
import AppTextInput from '../components/AppTextInput';
import { TextTitle } from '../components/Texts/TextTitle';
import { TextBody } from '../components/Texts/TextBody';
import { StyleGuide } from '../theme/StyleGuide';
import { PrimaryButton } from '../components/Buttons/FullButtons/PrimaryButton';
import { SeccondaryButton } from '../components/Buttons/FullButtons/SeccondaryButton';
import { CalloutButton } from '../components/Texts/CalloutButton';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  return (
    <SafeAreaView>
      <View
        style={{
          paddingTop: StyleGuide.spacing * 2,
          paddingBottom: StyleGuide.spacing * 2,
          paddingHorizontal: StyleGuide.spacing * 2,
        }}
      >
        <View
          style={{
            alignItems: 'center',
            marginTop: 60,
          }}
        >
          <TextTitle text={'Faça o login!!!'} />

          <TextBody
            text={'Bem-vindo de volta, sentimos sua falta!'}
            isDark={false}
          />
        </View>

        <AppTextInput placeholder="E-mail" />
        <AppTextInput placeholder="Senha" />

        <CalloutButton text={'Esqueceu a sua senha?'} />

        <View
          style={{
            marginTop: StyleGuide.spacing * 3,
          }}
        >
          <PrimaryButton text={'Entrar'} onPress={() => navigate('Home')} />
          <SeccondaryButton
            text={'Criar uma nova conta'}
            onPress={() => navigate('Register')}
          />
        </View>

        <View
          style={{
            marginVertical: StyleGuide.spacing * 3,
          }}
        >
          <CalloutButton text={'Ou continue com'} />

          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor: colors.lightCardBackground,
                borderRadius: 10 / 2,
                marginHorizontal: 10,
              }}
            >
              <Ionicons
                name="logo-google"
                color={colors.lightIcons}
                size={10 * 2}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor: colors.lightCardBackground,
                borderRadius: 10 / 2,
                marginHorizontal: 10,
              }}
            >
              <Ionicons
                name="logo-apple"
                color={colors.lightIcons}
                size={10 * 2}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor: colors.lightCardBackground,
                borderRadius: 10 / 2,
                marginHorizontal: 10,
              }}
            >
              <Ionicons
                name="logo-facebook"
                color={colors.lightIcons}
                size={10 * 2}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
