import ImageColors from 'react-native-image-colors';

export const getImageColors = async (uri: string) => {
  const imageColors = await ImageColors.getColors(uri, {
    fallback: '#75cedb',
    quality: 'high',
  });

  let primary;
  let secondary;

  if (imageColors.platform === 'android') {
    primary = imageColors.dominant;
    secondary = imageColors.average;
  } else if (imageColors.platform === 'ios') {
    primary = imageColors.primary;
    secondary = imageColors.secondary;
  }

  return [primary, secondary];
};
