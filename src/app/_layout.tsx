import { Stack } from "expo-router";
import MyGlobalContext from "./context/MyGlobalContext";

const RootLayout = () => {
  return (
    <MyGlobalContext>
      <Stack>
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
