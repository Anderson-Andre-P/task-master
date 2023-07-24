import { Dimensions, ImageBackground, SafeAreaView, View } from "react-native";
import React from "react";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import { TextTitle } from "../components/Texts/TextTitle";
import { TextBody } from "../components/Texts/TextBody";
import { PrimaryMiddleButton } from "../components/Buttons/MiddleButtons/PrimaryMiddleButton";
import { SeccondaryMiddleButton } from "../components/Buttons/MiddleButtons/SecondaryMiddleButton";
const { height } = Dimensions.get("window");

type Props = NativeStackScreenProps<RootStackParamList, "Welcome">;

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
          source={require("../assets/images/welcome-img.png")}
        />
        <View
          style={{
            paddingHorizontal: 40,
            paddingTop: 40,
          }}
        >
          <TextTitle text={"Gerencie suas tarefas aqui"} />
          <TextBody
            text={
              "O melhor aplicativo para o gerenciamento de tarefas que você vai encontrar!"
            }
            isDark={false}
          />
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            paddingTop: 60,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <PrimaryMiddleButton
            text={"Entrar"}
            onPress={() => navigate("Login")}
          />

          <SeccondaryMiddleButton
            text={"Cadastrar"}
            onPress={() => navigate("Login")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
