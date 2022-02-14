import RootStack, { navigationRef } from '@navigation';
import { NavigationContainer } from '@react-navigation/native';
import store, { persistor } from '@store';
import globalStyles from '@theme/styles';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GestureHandlerRootView style={globalStyles.flex1}>
          <NavigationContainer ref={navigationRef}>
            <RootStack />
          </NavigationContainer>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
};

export default App;
