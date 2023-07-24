import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";

import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import { colors } from "../theme";
import { TextTitle } from "../components/Texts/TextTitle";
import { TextBody } from "../components/Texts/TextBody";
import { StyleGuide } from "../theme/StyleGuide";
import { PrimaryButton } from "../components/Buttons/FullButtons/PrimaryButton";
import { SeccondaryButton } from "../components/Buttons/FullButtons/SeccondaryButton";
import { CalloutButton } from "../components/Texts/CalloutButton";
import { Formik } from "formik";
import * as Yup from "yup";
import * as LocalAuthentication from "expo-local-authentication";
import { AppTextInput } from "../components/AppTextInput";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const LoginScreen = ({ navigation: { navigate } }) => {
  const [isChecked, setChecked] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [isBiometricSupported, setIsBiometricSupported] = React.useState(false);

  const ValidateLogin = Yup.object().shape({
    password: Yup.string()
      .min(8, "A sua senha precisa ter pelo menos 8 caracteres!")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Devem ser caracteres, pelo menos uma letra, um número e um caractere especial"
      )
      .required("Obrigatório"),
    email: Yup.string().email("E-mail inválido").required("Obrigatório"),
  });

  const authenticate = async () => {
    const auth = LocalAuthentication.authenticateAsync({
      fallbackLabel: "Inserir senha",
      cancelLabel: "Cancelar",
      requireConfirmation: false,
    });

    auth.then((result) => {
      setIsAuthenticated(result.success);

      if (result.success) {
        navigate("Home");
      }
    });
  };

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  });

  const checked = () => {
    setChecked(false);
  };

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
            alignItems: "center",
            marginTop: 60,
          }}
        >
          <TextTitle text={"Faça o login!!!"} />

          <TextBody
            text={"Bem-vindo de volta, sentimos sua falta!"}
            isDark={false}
          />
        </View>

        <Formik
          initialValues={{ email: "", password: "" }}
          validateOnMount={true}
          validationSchema={ValidateLogin}
          onSubmit={(values) => navigate("Home")}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            touched,
            values,
            errors,
            isValid,
          }) => (
            <View>
              <AppTextInput
                placeholder="E-mail"
                value={values.email}
                onChangeText={handleChange("email")}
              />
              <View style={{ marginBottom: 20 }}>
                {errors.email && touched.email ? (
                  <Text style={{ color: "red", fontSize: 15 }}>
                    {errors.email}
                  </Text>
                ) : null}
              </View>
              <AppTextInput
                placeholder="Senha"
                value={values.password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
              />
              <View style={{ marginBottom: 20 }}>
                {errors.password && touched.password ? (
                  <Text style={{ color: "red", fontSize: 15 }}>
                    {errors.password}
                  </Text>
                ) : null}
              </View>
              <PrimaryButton text={"Entrar"} onPress={handleSubmit} />
            </View>
          )}
        </Formik>

        <SeccondaryButton
          text={"Criar uma nova conta"}
          onPress={() => navigate("Register")}
        />

        <View
          style={{
            marginTop: StyleGuide.spacing * 3,
          }}
        >
          <CalloutButton text={"Esqueceu a sua senha?"} />
        </View>

        <View
          style={{
            marginVertical: StyleGuide.spacing * 3,
          }}
        >
          <CalloutButton text={"Ou continue com"} />

          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              justifyContent: "center",
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
