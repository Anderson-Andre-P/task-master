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
import AppTextInput from '../components/AppTextInput';
import { StyleGuide } from '../theme/StyleGuide';
import { TextTitle } from '../components/Texts/TextTitle';
import { TextBody } from '../components/Texts/TextBody';
import { PrimaryButton } from '../components/Buttons/FullButtons/PrimaryButton';
import { SeccondaryButton } from '../components/Buttons/FullButtons/SeccondaryButton';
import { CalloutButton } from '../components/Texts/CalloutButton';
import { colors } from '../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;

const RegisterScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
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
          <TextTitle text={'Criar uma conta'} />

          <TextBody
            text={'Crie uma conta e comece a gerenciar suas tarefas'}
            isDark={false}
          />
        </View>
        <View
          style={{
            marginVertical: StyleGuide.spacing * 3,
          }}
        >
          <AppTextInput placeholder="E-mail" />
          <AppTextInput placeholder="Senha" />
          <AppTextInput placeholder="Confirmar senha" />
        </View>

        <PrimaryButton text={'Cadastrar'} onPress={() => {}} />
        <SeccondaryButton
          text={'Já possuo uma conta'}
          onPress={() => navigate('Home')}
        />

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

export default RegisterScreen;
