import { Stack } from "expo-router";
import MyGlobalContext from "./context/MyGlobalContext";

const RootLayout = () => {
  return (
    <MyGlobalContext>
      <Stack initialRouteName="login" screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="login"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="home"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </MyGlobalContext>
  );
};

export default RootLayout;
