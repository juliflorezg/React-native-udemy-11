import React, {createContext, useState} from 'react';
import ImageColors from 'react-native-image-colors';

export const GradientContext = createContext({} as ContextProps); // todo: definir tipo

interface Props {
  children: JSX.Element | JSX.Element[];
}

interface ImageColors {
  primary: string;
  secondary: string;
}

interface ContextProps {
  colors: ImageColors;
  previousColors: ImageColors;
  setMainColors: (colors: ImageColors) => void;
  setPreviousMainColors: (colors: ImageColors) => void;
}

export const GradientContextProvider: React.FC<Props> = ({children}: Props) => {
  const [previousColors, setPreviousColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const [colors, setColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const setMainColors = (colorsObj: ImageColors) => {
    setColors(colorsObj);
  };
  const setPreviousMainColors = (colorsObj: ImageColors) => {
    setPreviousColors(colorsObj);
  };

  return (
    <GradientContext.Provider
      value={{colors, previousColors, setMainColors, setPreviousMainColors}}>
      {children}
    </GradientContext.Provider>
  );
};
