import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const Txt = styled.Text`
  color: ${props => props.theme.colors.text};
  font-family: 'Alatsi-Regular';
`;

export const StackHeader = styled.View`
  color: ${props => props.theme.colors.primary};
  height: 44px;
  width: 100%;
`;

export const Container = styled.View`
  flex: 1;
  background-color: ${props => `${props.theme.colors.background}`};
`;

export const MenuComponent = styled.View`
  flex: 1;
  background-color: 'rgba(255,255,255, 0.0)';
  flex-direction: row;
  align-items: center;
  height: 78px;
`;

export const TxtTitle = styled.Text`
  color: ${props => props.theme.colors.secundary};
  font-size: 14px;
`;

export const TxtSubtitle = styled(Txt)`
  font-size: 16px;
  opacity: 0.8;
`;

export const Meal = styled.View`
  margin-horizontal: 16px;
  margin-vertical: 15px;
  border-radius: 10px;
  background-color: ${props =>
    `${props.theme.name}` === 'dark'
      ? `${props.theme.colors.background}` //'#363333'
      : `${props.theme.colors.background}`};
`;

export const HeaderBar = styled.View`
  z-index: 1;
  background-color: ${props => `${props.theme.colors.primary}`};
  position: absolute;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 16px;
  height: 44px;
  width: 100%;
`;

export const TxtData = styled(Txt)`
  font-size: 12px;
  opacity: 0.8;
`;

const styles = StyleSheet.create({
  theme: {
    backgroundColor: '#F77337',
  },
  letterTheme: {
    fontFamily: 'DINRoundPro-Medi',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(244,244,244)',
  },
  menuContainer: {
    flex: 1,
    backgroundColor: 'rgb(244,244,244)',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  menuItem: {
    paddingHorizontal: 16,
    height: 44,
    marginBottom: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  itemContainer: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  subComponent: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 20,
  },
  itemSubtitle: {
    fontFamily: 'Roboto',
    fontSize: 14,
    color: '#1d1d1d',
    fontWeight: 'bold',
    opacity: 0.7,
  },
  foodIcon: {
    height: 46,
    width: 46,
    marginLeft: 10,
  },
  offline: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(299,238,236)',
  },
  viewMenuData: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  stackTitle: {
    fontFamily: 'JosefinSans-SemiBold',
    fontSize: 18,
  },
});

export default styles;
