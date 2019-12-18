import AsyncStorage from '@react-native-community/async-storage';

export const saveWalletsIds = walletsIds =>
    AsyncStorage.setItem('walletsIds', JSON.stringify(walletsIds));

export const getWalletsIds = async () =>
    JSON.parse(await AsyncStorage.getItem('walletsIds')) || [];