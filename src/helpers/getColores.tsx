import ImageColors from 'react-native-image-colors';

export const getCardColorsImg = async (uri: string) => {
    const colores = await ImageColors.getColors(uri, {});

    let primary;
    let secondary;

    if (colores.platform === 'android') {
        // Colores en android
        primary = colores.dominant;
        secondary = colores.average;
    } else {
        // colores en iOs Iphone

        primary = colores.platform;
        secondary = colores.platform;
    }

    return [primary, secondary];
};
