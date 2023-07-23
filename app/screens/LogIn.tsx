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

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  return (
    <SafeAreaView>
      <View
        style={{
          paddingTop: 20,
          paddingBottom: 20,
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: colors.primary,
              fontFamily: typography.primaryText.bold,
              fontSize: fontSizes.large,
              marginVertical: 10 * 3,
            }}
          >
            Faça o login por aqui
          </Text>
          <Text
            style={{
              fontFamily: typography.primaryText.bold,
              fontSize: fontSizes.medium,
              maxWidth: '60%',
              textAlign: 'center',
            }}
          >
            Bem-vindo de volta, sentimos sua falta!
          </Text>
        </View>
        <View
          style={{
            marginVertical: 10 * 3,
          }}
        >
          <AppTextInput placeholder="E-mail" />
          <AppTextInput placeholder="Senha" />
        </View>

        <View>
          <Text
            style={{
              fontFamily: typography.primaryText.bold,
              fontSize: fontSizes.medium,
              color: colors.primary,
              alignSelf: 'flex-end',
            }}
          >
            Esqueceu a sua senha?
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => navigate('Home')}
          style={{
            padding: 20,
            backgroundColor: colors.primary,
            marginVertical: 30,
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
          onPress={() => navigate('Register')}
          style={{
            padding: 20,
            backgroundColor: colors.secondary,
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
            Criar uma nova conta
          </Text>
        </TouchableOpacity>

        <View
          style={{
            marginVertical: 10 * 3,
          }}
        >
          <Text
            style={{
              fontFamily: typography.primaryText.bold,
              color: colors.primary,
              textAlign: 'center',
              fontSize: fontSizes.medium,
            }}
          >
            Or continue with
          </Text>

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
                backgroundColor: colors.lightBackground,
                borderRadius: 10 / 2,
                marginHorizontal: 10,
              }}
            >
              <Ionicons
                name="logo-google"
                color={colors.lightText}
                size={10 * 2}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor: colors.lightBackground,
                borderRadius: 10 / 2,
                marginHorizontal: 10,
              }}
            >
              <Ionicons
                name="logo-apple"
                color={colors.lightText}
                size={10 * 2}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor: colors.lightText,
                borderRadius: 10 / 2,
                marginHorizontal: 10,
              }}
            >
              <Ionicons
                name="logo-facebook"
                color={colors.lightText}
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

const styles = StyleSheet.create({});
