/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
  AlbumSceen:undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type Album={
  id:string;
  imageUri:string;
  artistsHeadline:string;
  name:string;
  by:string;
  numberOfLikes:number;

};

export type Song={
  id:string,
  imageUri:string,
  title:string,
  artist:string,
  
};
